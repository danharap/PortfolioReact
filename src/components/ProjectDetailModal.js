import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetailModal = ({
  project,
  darkMode,
  onClose,
  getImagePath,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const screenshots = project?.details?.screenshots || [];
  const hasMultiple = screenshots.length > 1;

  const nextImage = useCallback(() => {
    if (!hasMultiple) return;
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  }, [hasMultiple, screenshots.length, setCurrentImageIndex]);

  const prevImage = useCallback(() => {
    if (!hasMultiple) return;
    setCurrentImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  }, [hasMultiple, screenshots.length, setCurrentImageIndex]);

  useEffect(() => {
    if (!project) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 50);

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    const getFocusable = () =>
      panelRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) || [];

    const onTrapFocus = (e) => {
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusable = [...getFocusable()].filter((el) => !el.hasAttribute('disabled'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keydown', onTrapFocus);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keydown', onTrapFocus);
    };
  }, [project, onClose, nextImage, prevImage]);

  if (!project) return null;

  return (
    <motion.div
      role="presentation"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm md:items-center md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={`relative my-8 w-full max-w-5xl overflow-hidden rounded-2xl border shadow-elevate md:my-0 ${
          darkMode ? 'border-white/10 bg-zinc-900' : 'border-zinc-200 bg-white'
        }`}
        initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
            <header
              className={`sticky top-0 z-10 flex items-start justify-between gap-4 border-b px-6 py-5 ${
                darkMode ? 'border-white/10 bg-zinc-900/95' : 'border-zinc-100 bg-white/95'
              } backdrop-blur-md`}
            >
              <h2
                id="project-modal-title"
                className={`pr-4 font-display text-xl font-semibold tracking-tight md:text-2xl ${
                  darkMode ? 'text-white' : 'text-zinc-900'
                }`}
              >
                {project.title}
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                className={`shrink-0 rounded-full p-2 transition-colors ${
                  darkMode
                    ? 'text-zinc-400 hover:bg-white/10 hover:text-white'
                    : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
                aria-label="Close project details"
              >
                <X size={22} />
              </button>
            </header>

            <div className="max-h-[calc(100vh-8rem)] overflow-y-auto px-6 py-8 md:max-h-[min(90vh,880px)]">
              {screenshots.length > 0 && (
                <div className="mb-10">
                  <div
                    className={`relative overflow-hidden rounded-xl ${
                      darkMode ? 'bg-zinc-800' : 'bg-zinc-100'
                    }`}
                  >
                    <img
                      src={getImagePath(screenshots[currentImageIndex]?.image)}
                      alt={screenshots[currentImageIndex]?.title || project.title}
                      className="max-h-[min(56vh,420px)] w-full object-contain"
                      loading="eager"
                    />
                    {hasMultiple && (
                      <>
                        <button
                          type="button"
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          type="button"
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                          aria-label="Next image"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}
                    {hasMultiple && (
                      <div className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
                        {currentImageIndex + 1} / {screenshots.length}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <p
                      className={`text-base font-medium ${darkMode ? 'text-white' : 'text-zinc-900'}`}
                    >
                      {screenshots[currentImageIndex]?.title}
                    </p>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {screenshots[currentImageIndex]?.description}
                    </p>
                  </div>
                  {hasMultiple && (
                    <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-1">
                      {screenshots.map((screenshot, index) => (
                        <button
                          key={screenshot.image}
                          type="button"
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-opacity ${
                            index === currentImageIndex
                              ? 'border-blue-500 opacity-100'
                              : `opacity-50 hover:opacity-80 ${
                                  darkMode ? 'border-transparent' : 'border-transparent'
                                }`
                          }`}
                          aria-label={`Show image ${index + 1}`}
                        >
                          <img
                            src={getImagePath(screenshot.image)}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <section className="mb-8">
                <h3
                  className={`mb-3 text-lg font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}
                >
                  Overview
                </h3>
                <p className={`leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {project.details?.overview || project.description}
                </p>
              </section>

              <section className="mb-8">
                <h3
                  className={`mb-3 text-lg font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}
                >
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-md border px-3 py-1 text-sm font-medium ${
                        darkMode
                          ? 'border-white/10 bg-white/5 text-zinc-200'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {project.details?.keyFeatures && (
                <section className="mb-8">
                  <h3
                    className={`mb-3 text-lg font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}
                  >
                    Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.details.keyFeatures.map((feature) => (
                      <li
                        key={feature.slice(0, 48)}
                        className={`flex gap-2 text-sm leading-relaxed ${
                          darkMode ? 'text-zinc-400' : 'text-zinc-600'
                        }`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.details?.technicalHighlights && (
                <section className="mb-8">
                  <h3
                    className={`mb-3 text-lg font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}
                  >
                    Engineering
                  </h3>
                  <ul className="space-y-2">
                    {project.details.technicalHighlights.map((h) => (
                      <li
                        key={h.slice(0, 48)}
                        className={`flex gap-2 text-sm leading-relaxed ${
                          darkMode ? 'text-zinc-400' : 'text-zinc-600'
                        }`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.details?.architecture && (
                <section className="mb-8">
                  <h3
                    className={`mb-4 text-lg font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}
                  >
                    Architecture
                  </h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {Object.entries(project.details.architecture).map(([category, items]) => (
                      <div
                        key={category}
                        className={`rounded-xl border p-4 ${
                          darkMode ? 'border-white/10 bg-zinc-950/50' : 'border-zinc-200 bg-zinc-50'
                        }`}
                      >
                        <h4
                          className={`mb-2 text-sm font-semibold capitalize ${
                            darkMode ? 'text-white' : 'text-zinc-900'
                          }`}
                        >
                          {category}
                        </h4>
                        <ul className="space-y-1.5">
                          {items.map((item) => (
                            <li
                              key={item.slice(0, 40)}
                              className={`text-xs leading-relaxed ${
                                darkMode ? 'text-zinc-500' : 'text-zinc-600'
                              }`}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {(project.details?.challenges || project.details?.outcomes) && (
                <section className="mb-8 grid gap-8 md:grid-cols-2">
                  {project.details.challenges && (
                    <div>
                      <h3
                        className={`mb-3 text-lg font-semibold ${
                          darkMode ? 'text-white' : 'text-zinc-900'
                        }`}
                      >
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {project.details.challenges.map((c) => (
                          <li
                            key={c.slice(0, 40)}
                            className={`text-sm leading-relaxed ${
                              darkMode ? 'text-zinc-400' : 'text-zinc-600'
                            }`}
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.details.outcomes && (
                    <div>
                      <h3
                        className={`mb-3 text-lg font-semibold ${
                          darkMode ? 'text-white' : 'text-zinc-900'
                        }`}
                      >
                        Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {project.details.outcomes.map((o) => (
                          <li
                            key={o.slice(0, 40)}
                            className={`text-sm leading-relaxed ${
                              darkMode ? 'text-zinc-400' : 'text-zinc-600'
                            }`}
                          >
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              )}

              <div
                className={`flex flex-wrap justify-center gap-4 border-t pt-8 ${
                  darkMode ? 'border-white/10' : 'border-zinc-100'
                }`}
              >
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    <ExternalLink size={18} />
                    Open live app
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-colors ${
                    darkMode
                      ? 'border-white/15 text-white hover:bg-white/5'
                      : 'border-zinc-300 text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  <Github size={18} />
                  Source code
                </a>
              </div>
            </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailModal;

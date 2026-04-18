import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, darkMode, onOpenDetails, getImagePath, revealDelay = 0 }) => {
  const reduceMotion = useReducedMotion();
  const hasDetails = Boolean(project.details);

  return (
    <motion.article
      layout={false}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: revealDelay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border shadow-card transition-shadow duration-500 hover:shadow-card-hover ${
        darkMode
          ? 'border-white/[0.08] bg-zinc-900/50'
          : 'border-zinc-200/80 bg-white'
      }`}
    >
      <button
        type="button"
        className={`text-left ${hasDetails ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={() => hasDetails && onOpenDetails(project)}
        disabled={!hasDetails}
        aria-label={hasDetails ? `Open details for ${project.title}` : undefined}
      >
        <div
          className={`relative aspect-[16/10] overflow-hidden ${
            darkMode ? 'bg-zinc-800' : 'bg-zinc-100'
          }`}
        >
          {project.image?.startsWith('/images/') ? (
            <motion.img
              src={getImagePath(project.image)}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-violet-700 text-5xl text-white">
              {project.image}
            </div>
          )}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t opacity-60 transition-opacity duration-500 group-hover:opacity-80 ${
              darkMode ? 'from-zinc-950 via-transparent' : 'from-zinc-900/80 via-transparent'
            }`}
            aria-hidden
          />
          {hasDetails && (
            <span
              className={`pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
                darkMode ? 'bg-white/10 text-white' : 'bg-white/90 text-zinc-900'
              }`}
            >
              Case study
              <ArrowUpRight size={14} />
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3
            className={`font-display text-xl font-semibold tracking-tight md:text-2xl ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-3 line-clamp-3 text-sm leading-relaxed md:text-[0.95rem] ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                  darkMode
                    ? 'border-white/[0.08] bg-white/[0.03] text-zinc-300'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span
                className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                  darkMode ? 'border-white/10 text-zinc-500' : 'border-zinc-200 text-zinc-500'
                }`}
              >
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </button>

      <div
        className={`mt-auto flex flex-wrap items-center justify-between gap-4 border-t px-6 py-4 md:px-7 ${
          darkMode ? 'border-white/[0.06]' : 'border-zinc-100'
        }`}
      >
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 transition-colors ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} aria-hidden />
              Live
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} aria-hidden />
            Code
          </a>
        </div>
        {hasDetails && (
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className={`text-sm font-semibold transition-colors ${
              darkMode ? 'text-white hover:text-blue-200' : 'text-zinc-900 hover:text-blue-700'
            }`}
          >
            Details
          </button>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;

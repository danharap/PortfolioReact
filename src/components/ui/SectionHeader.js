import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE, DURATION, VIEWPORT, STAGGER } from '../../motion/constants';

/**
 * Editorial section title: small label + large headline + optional description.
 * When introMotion is true, eyebrow / title / description stagger in on scroll.
 */
const SectionHeader = ({
  darkMode,
  eyebrow,
  title,
  titleId,
  description,
  align = 'left',
  className = '',
  introMotion = true,
}) => {
  const reduceMotion = useReducedMotion();
  const alignCls =
    align === 'center' ? 'text-center mx-auto' : 'text-left max-w-3xl';

  const line = (delay) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: {
      duration: DURATION.reveal,
      delay,
      ease: EASE,
    },
  });

  if (!introMotion || reduceMotion) {
    return (
      <header className={`mb-14 md:mb-20 ${alignCls} ${className}`}>
        {eyebrow && (
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
              darkMode ? 'text-blue-400/90' : 'text-blue-600'
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          {...(titleId ? { id: titleId } : {})}
          className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl ${
            darkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed md:text-xl ${
              align === 'center' ? 'mx-auto' : ''
            } ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
          >
            {description}
          </p>
        )}
      </header>
    );
  }

  return (
    <header className={`mb-14 md:mb-20 ${alignCls} ${className}`}>
      {eyebrow && (
        <motion.p
          {...line(0)}
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            darkMode ? 'text-blue-400/90' : 'text-blue-600'
          }`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        {...line(eyebrow ? STAGGER.sectionLines : 0)}
        {...(titleId ? { id: titleId } : {})}
        className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl ${
          darkMode ? 'text-white' : 'text-zinc-900'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          {...line(eyebrow ? STAGGER.sectionLines * 2 : STAGGER.sectionLines)}
          className={`mt-5 max-w-2xl text-lg leading-relaxed md:text-xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
};

export default SectionHeader;

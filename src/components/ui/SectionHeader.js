import React from 'react';

/**
 * Editorial section title: small label + large headline + optional description
 */
const SectionHeader = ({
  darkMode,
  eyebrow,
  title,
  titleId,
  description,
  align = 'left',
  className = '',
}) => {
  const alignCls =
    align === 'center' ? 'text-center mx-auto' : 'text-left max-w-3xl';

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
};

export default SectionHeader;

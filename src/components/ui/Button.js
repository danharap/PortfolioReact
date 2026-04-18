import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE, DURATION } from '../../motion/constants';

const variants = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/25 border border-blue-500/40 dark:shadow-blue-950/40',
  secondary:
    'border border-zinc-300 bg-white/80 text-zinc-900 hover:border-zinc-400 hover:bg-white dark:border-white/15 dark:bg-transparent dark:text-zinc-100 dark:hover:border-white/25 dark:hover:bg-white/5',
  ghost:
    'border-transparent bg-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white',
};

const Button = ({
  as = 'button',
  variant = 'primary',
  className = '',
  children,
  disabled,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const MotionComp = as === 'a' ? motion.a : motion.button;
  const suppressMotion = reduceMotion || disabled;

  const motionProps = suppressMotion
    ? {}
    : {
        whileHover: { y: -1, transition: { duration: DURATION.micro, ease: EASE } },
        whileTap: { scale: 0.992, transition: { duration: 0.12 } },
      };

  return (
    <MotionComp
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 ${variants[variant] || variants.primary} ${className}`}
      {...motionProps}
      {...rest}
    >
      {children}
    </MotionComp>
  );
};

export default Button;

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE, DURATION, VIEWPORT } from '../../motion/constants';

const yPresets = {
  default: 18,
  subtle: 12,
  hero: 22,
};

/**
 * Viewport reveal: opacity + translateY. Respects prefers-reduced-motion.
 */
const Reveal = ({
  children,
  className = '',
  delay = 0,
  y: yProp,
  yPreset = 'default',
  once = true,
  amount = VIEWPORT.amount,
  margin = VIEWPORT.margin,
  duration = DURATION.reveal,
}) => {
  const reduceMotion = useReducedMotion();
  const y = yProp ?? yPresets[yPreset] ?? yPresets.default;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

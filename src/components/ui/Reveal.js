import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const defaultTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
};

const Reveal = ({
  children,
  className = '',
  delay = 0,
  y = 28,
  once = true,
  amount = 0.2,
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '-8% 0px -8% 0px' }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

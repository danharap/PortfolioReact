import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { EASE, DURATION, VIEWPORT } from '../../motion/constants';

/**
 * Hero → selected work: color ramp + editorial divider + scroll-clarified lines.
 * Decorative only; respects prefers-reduced-motion (no scroll-linked opacity then).
 */
const SectionBridge = ({ darkMode }) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  /** Lines gently resolve as the handoff zone moves through the viewport */
  const lineClarity = useTransform(scrollYProgress, [0, 0.28, 0.55, 1], [0.42, 0.88, 1, 1]);

  const surface = darkMode
    ? 'bg-gradient-to-b from-ink-950 from-[8%] via-zinc-950/48 via-[52%] to-zinc-950/40'
    : 'bg-gradient-to-b from-white from-[8%] via-zinc-50 via-[52%] to-zinc-50';

  const lines = (
    <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
      <div
        className={`h-px w-full max-w-lg bg-gradient-to-r from-transparent to-transparent ${
          darkMode ? 'via-white/[0.22]' : 'via-zinc-400/70'
        }`}
      />
      <div
        className={`h-px w-4/5 max-w-sm bg-gradient-to-r from-transparent to-transparent ${
          darkMode ? 'via-blue-400/18' : 'via-blue-500/35'
        }`}
      />
    </div>
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden px-4 py-12 md:py-16 ${surface}`}
      aria-hidden
    >
      {/* Soft bloom so the handoff does not feel like a flat band */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-1/2 h-[min(100%,28rem)] -translate-y-1/2 bg-glow-radial bg-no-repeat ${
          darkMode ? 'opacity-[0.14]' : 'opacity-[0.08]'
        }`}
        style={{ backgroundSize: '120% 70%', backgroundPosition: '50% 50%' }}
      />

      <div className="relative mx-auto max-w-3xl">
        {reduceMotion ? (
          lines
        ) : (
          <motion.div
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.bridge, ease: EASE }}
          >
            <motion.div style={{ opacity: lineClarity }}>{lines}</motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SectionBridge;

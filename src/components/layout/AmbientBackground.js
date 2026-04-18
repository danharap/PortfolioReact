import React from 'react';

const noiseData =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

/**
 * CSS-only ambient layers. Particles (if enabled) remain visible underneath at low opacity.
 */
const AmbientBackground = ({ darkMode }) => {
  if (!darkMode) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-zinc-50 via-white to-zinc-100"
        aria-hidden
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden>
      <div className="absolute inset-0 bg-ink-950/92" />
      <div
        className="absolute inset-0 bg-glow-radial bg-no-repeat"
        style={{ backgroundSize: '100% 60%', backgroundPosition: '50% -10%' }}
      />
      <div
        className="absolute inset-0 bg-glow-radial-violet bg-no-repeat opacity-80"
        style={{ backgroundSize: '70% 50%', backgroundPosition: '100% 0%' }}
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{ backgroundImage: noiseData }}
      />
    </div>
  );
};

export default AmbientBackground;

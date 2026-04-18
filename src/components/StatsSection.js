import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Layers, Rocket, LayoutGrid } from 'lucide-react';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

const StatsSection = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = document.getElementById('stats');
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;
    if (reduceMotion) {
      setCounts([5, 7, 5]);
      return undefined;
    }

    const targetValues = [5, 7, 5];
    const duration = 1600;
    const steps = 50;
    const stepDuration = duration / steps;

    const timers = targetValues.map((target, index) => {
      let current = 0;
      const increment = target / steps;
      return window.setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts((prev) => {
            const next = [...prev];
            next[index] = target;
            return next;
          });
        } else {
          setCounts((prev) => {
            const next = [...prev];
            next[index] = Math.floor(current);
            return next;
          });
        }
      }, stepDuration);
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, [isVisible, reduceMotion]);

  const stats = [
    {
      icon: Layers,
      value: counts[0],
      suffix: '+',
      label: 'Years building',
      sub: 'Coding, internships, and shipping products end to end',
    },
    {
      icon: Rocket,
      value: counts[1],
      suffix: '+',
      label: 'Shipped projects',
      sub: 'Web apps, mobile, native clients, and internal tools',
    },
    {
      icon: LayoutGrid,
      value: counts[2],
      suffix: '',
      label: 'Featured builds',
      sub: 'Portfolio builds with case-study depth — from idea to deploy',
    },
  ];

  const divide = darkMode ? 'divide-white/[0.08]' : 'divide-zinc-200';

  return (
    <section
      id="stats"
      className={`border-y py-16 md:py-20 ${
        darkMode ? 'border-white/[0.06] bg-zinc-900/30' : 'border-zinc-200 bg-zinc-100/80'
      }`}
      aria-label="At a glance"
    >
      <Container>
        <Reveal>
          <div className={`grid grid-cols-1 divide-y ${divide} md:grid-cols-3 md:divide-x md:divide-y-0`}>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-start py-10 first:pt-0 last:pb-0 md:px-8 md:py-8 lg:px-10"
                >
                  <Icon
                    className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    size={26}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p
                    className={`font-display text-4xl font-semibold tracking-tight md:text-5xl ${
                      darkMode ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p
                    className={`mt-2 text-sm font-semibold uppercase tracking-wider ${
                      darkMode ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                  >
                    {stat.label}
                  </p>
                  <p className={`mt-1 max-w-xs text-sm leading-relaxed ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
                    {stat.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default StatsSection;

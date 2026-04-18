import React from 'react';
import { Code, Database, Server, Smartphone, Wrench } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

const skillCategories = [
  { key: 'frontend', title: 'Frontend & web', icon: Code, accent: 'from-blue-500/20 to-transparent' },
  { key: 'mobile', title: 'Mobile & native', icon: Smartphone, accent: 'from-sky-500/15 to-transparent' },
  { key: 'backend', title: 'Backend & APIs', icon: Server, accent: 'from-emerald-500/15 to-transparent' },
  { key: 'databases', title: 'Data', icon: Database, accent: 'from-violet-500/20 to-transparent' },
  { key: 'tools', title: 'Platforms & tooling', icon: Wrench, accent: 'from-amber-500/15 to-transparent' },
];

const SkillsSection = ({ darkMode }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className={`py-24 md:py-32 ${darkMode ? 'bg-zinc-950/50' : 'bg-zinc-50'}`}
      aria-labelledby="skills-heading"
    >
      <Container>
        <Reveal>
          <SectionHeader
            darkMode={darkMode}
            eyebrow="Capabilities"
            title="Stack I use to go from idea to production"
            titleId="skills-heading"
            description="Grouped by how I think about the work — not an exhaustive list, but the tools I reach for when building real products."
            align="left"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map(({ key, title, icon: Icon, accent }, index) => (
            <motion.div
              key={key}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl border p-7 shadow-card ${
                darkMode
                  ? 'border-white/[0.08] bg-zinc-900/50'
                  : 'border-zinc-200/80 bg-white'
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100 ${accent}`}
                aria-hidden
              />
              <div className="relative">
                <div
                  className={`mb-6 inline-flex rounded-xl border p-3 ${
                    darkMode ? 'border-white/10 bg-white/5' : 'border-zinc-200 bg-zinc-50'
                  }`}
                >
                  <Icon
                    className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <h3 className={`font-display text-lg font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                  {title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {skillsData[key].map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ${
                          darkMode ? 'bg-white/5 ring-white/10' : 'bg-white ring-zinc-200'
                        }`}
                      >
                        <img
                          src={skill.icon}
                          alt=""
                          className="h-5 w-5 object-contain opacity-90"
                          loading="lazy"
                        />
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          darkMode ? 'text-zinc-300' : 'text-zinc-700'
                        }`}
                      >
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;

import React from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

const AboutSection = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-24 md:py-32 ${darkMode ? 'bg-ink-950' : 'bg-white'}`}
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                darkMode={darkMode}
                eyebrow="Positioning"
                title="Builder first. Details always."
                titleId="about-heading"
                align="left"
              />
            </Reveal>
          </div>
          <div className="space-y-8 lg:col-span-7">
            <Reveal delay={0.08}>
              <p
                className={`text-xl font-medium leading-relaxed md:text-2xl ${
                  darkMode ? 'text-zinc-200' : 'text-zinc-800'
                }`}
              >
                I ship end-to-end software: interfaces people enjoy using, APIs and data layers that stay
                coherent under load, and deployments that do not fall over on day two.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Recent work spans enterprise Angular and .NET at Hatch, Supabase-backed React products
                (PromoPilot, BudgetApp), and native Swift experiences (PhotoCleaner). I care about product
                polish, accessibility, and code that the next developer can pick up without pain.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div
                  className={`rounded-2xl border p-6 ${
                    darkMode ? 'border-white/[0.08] bg-zinc-900/40' : 'border-zinc-200 bg-zinc-50'
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    Education
                  </p>
                  <p className={`mt-3 font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                    Western University
                  </p>
                  <p className={`mt-1 text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    B.Sc. Computer Science — software development focus. London, ON.
                  </p>
                </div>
                <div
                  className={`rounded-2xl border p-6 ${
                    darkMode ? 'border-white/[0.08] bg-zinc-900/40' : 'border-zinc-200 bg-zinc-50'
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      darkMode ? 'text-violet-400' : 'text-violet-600'
                    }`}
                  >
                    Focus
                  </p>
                  <p className={`mt-3 font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                    Product-grade delivery
                  </p>
                  <p className={`mt-1 text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    UX, system design, auth, data modeling, and calm production rollouts.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

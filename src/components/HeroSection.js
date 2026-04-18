import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MapPin, Download, ArrowDownRight, Github, Linkedin } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import { EASE, DURATION, STAGGER } from '../motion/constants';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: STAGGER.heroChildren,
      delayChildren: STAGGER.heroDelay,
    },
  },
};

const item = (reduce) => ({
  hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: reduce
      ? { duration: 0 }
      : { duration: DURATION.reveal, ease: EASE },
  },
});

const socialIcon = (reduce) => ({
  hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: reduce ? { duration: 0 } : { duration: DURATION.revealFast, ease: EASE },
  },
});

const HeroSection = ({ darkMode, scrollToSection }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-20 md:pt-28 md:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Bottom ramp into selected work — same ink base, introduces next-section surface tone */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent via-transparent md:h-52 ${
          darkMode ? 'to-zinc-950/28' : 'to-zinc-200/30'
        }`}
        aria-hidden
      />

      <Container className="relative z-[1]">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item(reduceMotion)}
            className={`mb-6 text-xs font-semibold uppercase tracking-[0.25em] ${
              darkMode ? 'text-blue-400/90' : 'text-blue-600'
            }`}
          >
            Full-stack · Product-minded · Ships quality
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item(reduceMotion)}
            className={`font-display text-[2.65rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            I design and build{' '}
            <span className="text-gradient">polished</span> digital products.
          </motion.h1>

          <motion.p
            variants={item(reduceMotion)}
            className={`mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Computer Science at Western University. I care about real UX, solid architecture, and
            software that holds up after launch — from React and mobile to APIs, data, and cloud.
          </motion.p>

          <motion.div
            variants={item(reduceMotion)}
            className={`mt-6 flex items-center justify-center gap-2 text-sm ${
              darkMode ? 'text-zinc-500' : 'text-zinc-500'
            }`}
          >
            <MapPin size={16} className="shrink-0 opacity-80" aria-hidden />
            <span>Burlington, Ontario, Canada</span>
          </motion.div>

          <motion.div
            variants={item(reduceMotion)}
            className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
          >
            <Button
              as="button"
              type="button"
              variant="primary"
              className="min-h-[48px] px-8 py-3.5 text-base"
              onClick={() => scrollToSection('contact')}
            >
              <Mail size={18} aria-hidden />
              Start a conversation
            </Button>
            <Button
              as="button"
              type="button"
              variant="secondary"
              className="min-h-[48px] px-8 py-3.5 text-base"
              onClick={() => scrollToSection('projects')}
            >
              View selected work
              <ArrowDownRight size={18} className="opacity-80" aria-hidden />
            </Button>
          </motion.div>

          <motion.div variants={item(reduceMotion)} className="mt-5">
            <a
              href="/resume.pdf"
              download="Daniel_Harapiak_Resume.pdf"
              className={`inline-flex items-center gap-2 text-sm font-medium underline-offset-4 transition-colors hover:underline ${
                darkMode ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Download size={16} aria-hidden />
              Download resume (PDF)
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.02,
                },
              },
            }}
            className="mt-14 flex items-center justify-center gap-4"
          >
            <motion.a
              variants={socialIcon(reduceMotion)}
              href="https://github.com/danharap"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-3 transition-colors ${
                darkMode
                  ? 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
              aria-label="GitHub"
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              variants={socialIcon(reduceMotion)}
              href="https://www.linkedin.com/in/danielharapiak/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-3 transition-colors ${
                darkMode
                  ? 'text-zinc-400 hover:bg-white/5 hover:text-blue-300'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-blue-700'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              variants={socialIcon(reduceMotion)}
              href="mailto:daniel@harapiak.com"
              className={`rounded-full p-3 transition-colors ${
                darkMode
                  ? 'text-zinc-400 hover:bg-white/5 hover:text-emerald-300'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-emerald-700'
              }`}
              aria-label="Email"
            >
              <Mail size={22} />
            </motion.a>
          </motion.div>

          {!reduceMotion && (
            <motion.button
              type="button"
              variants={item(false)}
              onClick={() => scrollToSection('projects')}
              className={`mx-auto mt-16 flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest opacity-70 transition-opacity hover:opacity-100 ${
                darkMode ? 'text-zinc-500' : 'text-zinc-500'
              }`}
              aria-label="Scroll to projects"
            >
              <span>Scroll</span>
              <span className="block h-10 w-px bg-gradient-to-b from-zinc-500 to-transparent dark:from-zinc-600" />
            </motion.button>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;

import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, LayoutGroup, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Container from './ui/Container';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = ({
  darkMode,
  toggleDarkMode,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 44,
    mass: 0.28,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const barClass = darkMode
    ? scrolled
      ? 'border-white/[0.08] bg-zinc-950/85 shadow-elevate'
      : 'border-transparent bg-zinc-950/40'
    : scrolled
      ? 'border-zinc-200/80 bg-white/90 shadow-lg'
      : 'border-transparent bg-white/70';

  return (
    <>
      {!reduceMotion && (
        <motion.div
          className="fixed left-0 right-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-blue-500/70 via-violet-500/60 to-blue-400/70"
          style={{ scaleX: smoothProgress }}
        />
      )}

      <nav
        className={`fixed top-0.5 z-40 w-full border-b backdrop-blur-xl transition-all duration-500 ease-out ${barClass}`}
        role="navigation"
        aria-label="Primary"
      >
        <Container className="flex items-center justify-between py-3.5 md:py-4">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className={`font-display text-lg font-semibold tracking-tight transition-colors md:text-xl ${
              darkMode ? 'text-white hover:text-blue-200' : 'text-zinc-900 hover:text-blue-700'
            }`}
          >
            Daniel Harapiak
          </button>

          <LayoutGroup id="nav-desktop">
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map(({ id, label }) => {
                const active = activeSection === id;
                return (
                  <motion.button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? darkMode
                          ? 'text-white'
                          : 'text-zinc-900'
                        : darkMode
                          ? 'text-zinc-400 hover:text-white'
                          : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {active && !reduceMotion && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 -z-10 rounded-lg ${
                          darkMode ? 'bg-white/[0.08]' : 'bg-zinc-900/[0.06]'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    )}
                    {active && reduceMotion && (
                      <span
                        className={`absolute inset-0 -z-10 rounded-lg ${
                          darkMode ? 'bg-white/[0.08]' : 'bg-zinc-900/[0.06]'
                        }`}
                      />
                    )}
                    {label}
                  </motion.button>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              className={`rounded-lg p-2.5 transition-colors ${
                darkMode
                  ? 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`rounded-lg p-2.5 md:hidden ${
                darkMode
                  ? 'text-zinc-300 hover:bg-white/5'
                  : 'text-zinc-700 hover:bg-zinc-100'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>

        {mobileMenuOpen && (
          <div
            className={`border-t md:hidden ${
              darkMode ? 'border-white/10 bg-zinc-950/95' : 'border-zinc-200 bg-white/95'
            }`}
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                    activeSection === id
                      ? darkMode
                        ? 'bg-white/10 text-white'
                        : 'bg-zinc-100 text-zinc-900'
                      : darkMode
                        ? 'text-zinc-400 hover:bg-white/5 hover:text-white'
                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </Container>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;

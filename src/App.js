import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import AmbientBackground from './components/layout/AmbientBackground';

const SECTION_IDS = ['home', 'projects', 'about', 'stats', 'skills', 'contact'];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = SECTION_IDS[0];

      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? 'dark bg-ink-950 text-zinc-100' : 'bg-white text-zinc-900'
      }`}
    >
      <ParticleBackground darkMode={darkMode} />
      <AmbientBackground darkMode={darkMode} />

      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main className="relative z-10">
        <HeroSection darkMode={darkMode} scrollToSection={scrollToSection} />
        <ProjectsSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <StatsSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;

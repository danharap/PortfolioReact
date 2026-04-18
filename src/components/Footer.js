import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Container from './ui/Container';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`border-t py-14 ${
        darkMode ? 'border-white/[0.06] bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
      }`}
    >
      <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <p className={`text-center text-sm md:text-left ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
          © {new Date().getFullYear()} Daniel Harapiak. Crafted with React and Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/danharap"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-3 transition-colors ${
              darkMode ? 'text-zinc-400 hover:bg-white/5 hover:text-white' : 'text-zinc-600 hover:bg-zinc-200'
            }`}
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/danielharapiak/"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-3 transition-colors ${
              darkMode ? 'text-zinc-400 hover:bg-white/5 hover:text-blue-300' : 'text-zinc-600 hover:bg-zinc-200'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:daniel@harapiak.com"
            className={`rounded-full p-3 transition-colors ${
              darkMode ? 'text-zinc-400 hover:bg-white/5 hover:text-emerald-300' : 'text-zinc-600 hover:bg-zinc-200'
            }`}
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

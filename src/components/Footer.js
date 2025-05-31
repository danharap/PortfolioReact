import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://github.com/danharap"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors hover:scale-110 transform ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/danielharapiak/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors hover:scale-110 transform ${
                darkMode 
                  ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:daniel@harapiak.com"
              className={`p-2 rounded-full transition-colors hover:scale-110 transform ${
                darkMode 
                  ? 'text-gray-400 hover:text-green-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-green-600 hover:bg-gray-100'
              }`}
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2025 Daniel Harapiak. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Mail, MapPin, Download, ChevronDown, Github, Linkedin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HeroSection = ({ darkMode, scrollToSection }) => {
  const [heroRef, isHeroVisible] = useScrollAnimation();

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div 
        ref={heroRef}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >        <div className="text-center">
          <div className={`mb-8 transition-all duration-1200 delay-200 ${
            isHeroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className={`inline-block p-4 rounded-full mb-6 ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                DH
              </div>
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-400 ${
            darkMode ? 'text-white' : 'text-gray-900'
          } ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Daniel Harapiak
          </h1>
          
          <p className={`text-xl md:text-2xl mb-4 transition-all duration-1000 delay-600 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Software Engineer & Computer Science Major
          </p>
          
          <div className={`flex items-center justify-center space-x-4 mb-8 transition-all duration-1000 delay-700 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          } ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>Burlington, Ontario, Canada</span>
            </div>
          </div>
          
          <p className={`text-lg max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-800 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionate about creating innovative solutions through clean code and modern technologies. 
            I love turning complex problems into simple, beautiful designs.
          </p>
            <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-1000 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Mail size={16} />
              <span>Get In Touch</span>
            </button>
            
            <button className={`px-8 py-3 border rounded-md transition-colors flex items-center space-x-2 ${
              darkMode 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Media Links */}
          <div className={`flex items-center justify-center space-x-6 mt-8 transition-all duration-1000 delay-1100 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
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
              <Github size={24} />
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
              <Linkedin size={24} />
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
              <Mail size={24} />
            </a>
          </div>
          <div className={`mt-12 transition-all duration-1000 delay-1200 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <ChevronDown 
              size={24} 
              className={`mx-auto animate-bounce ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

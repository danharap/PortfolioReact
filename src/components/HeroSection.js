import React from 'react';
import { Mail, MapPin, Download, ChevronDown } from 'lucide-react';

const HeroSection = ({ darkMode, scrollToSection }) => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className={`inline-block p-4 rounded-full mb-6 ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                DH
              </div>
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Daniel Harapiak
          </h1>
          
          <p className={`text-xl md:text-2xl mb-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Software Engineer & Computer Science Major
          </p>
          
          <div className={`flex items-center justify-center space-x-4 mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>Burlington, Ontario, Canada</span>
            </div>
          </div>
          
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate about creating innovative solutions through clean code and modern technologies. 
            I love turning complex problems into simple, beautiful designs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
          
          <div className="mt-12">
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

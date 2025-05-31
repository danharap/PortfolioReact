import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutSection = ({ darkMode }) => {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [contentRef, isContentVisible] = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>        
        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Journey
              </h3>              <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                As a Computer Science student with a specialization in software development, I'm dedicated to 
                creating innovative solutions that make a difference. My journey in technology began 
                with curiosity and has evolved into a deep commitment to excellence in software development.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I specialize in full-stack development, working with modern technologies like React, 
                Python, and cloud platforms. I believe in writing clean, maintainable code and 
                creating user experiences that are both functional and delightful.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Education
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <strong>Western University</strong><br />
                Bachelor of Science in Computer Science<br />
                Specialization: Computer Science<br />
                London, Ontario, Canada
              </p>
            </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Interests
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Full-Stack Development, Cloud Computing, 
                Machine Learning, Open Source Contribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

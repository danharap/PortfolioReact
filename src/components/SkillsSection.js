import React from 'react';
import { Code, Database, Server, Wrench } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    { key: 'frontend', title: 'Frontend', icon: Code, color: 'text-blue-500' },
    { key: 'backend', title: 'Backend', icon: Server, color: 'text-green-500' },
    { key: 'databases', title: 'Databases', icon: Database, color: 'text-purple-500' },
    { key: 'tools', title: 'Tools & Platforms', icon: Wrench, color: 'text-orange-500' }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(({ key, title, icon: Icon, color }) => (
            <div key={key} className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
              <div className="flex items-center mb-6">
                <Icon className={`${color} mr-3`} size={24} />
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {title}
                </h3>
              </div>
              <div className="space-y-3">
                {skillsData[key].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} group-hover:${skill.color} transition-colors`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

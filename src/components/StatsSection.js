import React, { useState, useEffect } from 'react';
import { Award, Code, Coffee } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const StatsSection = ({ darkMode }) => {
  const [sectionRef, isSectionVisible] = useScrollAnimation();
  const [counts, setCounts] = useState([0, 0, 0]);

  // Simple count up animation
  useEffect(() => {
    if (!isSectionVisible) return;

    const targetValues = [3, 25, 500];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    targetValues.forEach((target, index) => {
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = target;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, stepDuration);
    });
  }, [isSectionVisible]);  const stats = [
    {
      icon: Award,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-blue-500'
    },
    {
      icon: Code,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-green-500'
    },
    {
      icon: Coffee,
      suffix: '+',
      label: 'Cups of Coffee',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >{stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div 
                key={index}
                className={`text-center transform transition-all duration-800 ${
                  isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isSectionVisible ? `${index * 200}ms` : '0ms' 
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} bg-opacity-20 mb-4`}>
                  <Icon className={`${stat.color}`} size={32} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {counts[index]}{stat.suffix}
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

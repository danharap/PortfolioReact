import React, { useEffect, useState } from 'react';

const CustomCursor = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor hidden md:block transition-transform duration-100 ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        borderColor: darkMode ? '#60A5FA' : '#3B82F6',
        backgroundColor: isHovering ? (darkMode ? '#60A5FA' : '#3B82F6') : 'transparent',
      }}
    />
  );
};

export default CustomCursor;

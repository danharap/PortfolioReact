import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ProjectsSection = ({ darkMode }) => {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [projectsRef, isProjectsVisible] = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.details?.screenshots) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.details.screenshots.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.details?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.details.screenshots.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>        
        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-800 hover-lift magnetic-hover group relative cursor-pointer ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } ${
                isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isProjectsVisible ? `${index * 200}ms` : '0ms' 
              }}
              onClick={() => project.details && openProjectModal(project)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Star size={12} fill="currentColor" />
                    <span>Featured</span>
                  </div>
                </div>
              )}              {/* Project Image */}
              <div className={`relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.image?.startsWith('/images/') ? (
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 bg-white"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-6xl items-center justify-center hidden">
                      📋
                    </div>
                  </div>
                ) : (
                  <div className="h-56 flex items-center justify-center text-6xl animate-float bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    {project.image}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                  <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveDemo}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                  
                  {/* View Details Button for Featured Projects */}
                  {project.details && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectModal(project);
                      }}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        darkMode 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                      }`}
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className={`max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          }`}>
            {/* Modal Header */}
            <div className={`sticky top-0 z-10 px-6 py-4 border-b flex justify-between items-center ${
              darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedProject.title}
                </h3>
                {selectedProject.featured && (
                  <div className="flex items-center space-x-1 mt-1">
                    <Star size={16} className="text-yellow-500" fill="currentColor" />
                    <span className="text-yellow-500 text-sm font-medium">Featured Project</span>
                  </div>
                )}
              </div>
              <button
                onClick={closeProjectModal}
                className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                  darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-500'
                }`}
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">              {/* Image Carousel */}
              {selectedProject.details?.screenshots && selectedProject.details.screenshots.length > 0 && (
                <div className="mb-8">
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.details.screenshots[currentImageIndex]?.image}
                      alt={selectedProject.details.screenshots[currentImageIndex]?.title}
                      className="w-full max-h-96 object-contain rounded-lg shadow-lg"
                      style={{ minHeight: '300px' }}
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedProject.details.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.details.screenshots.length}
                    </div>
                  </div>
                  
                  {/* Current Image Description */}
                  <div className="mt-4 text-center">
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedProject.details.screenshots[currentImageIndex]?.title}
                    </h4>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedProject.details.screenshots[currentImageIndex]?.description}
                    </p>
                  </div>

                  {/* Thumbnail Navigation */}
                  {selectedProject.details.screenshots.length > 1 && (
                    <div className="flex justify-center space-x-2 mt-4 overflow-x-auto pb-2">
                      {selectedProject.details.screenshots.map((screenshot, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? 'border-blue-500 opacity-100'
                              : 'border-transparent opacity-50 hover:opacity-75'
                          }`}
                        >
                          <img
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Project Overview */}
              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Project Overview
                </h4>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedProject.details?.overview || selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {selectedProject.details?.keyFeatures && (
                <div className="mb-6">
                  <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.details.keyFeatures.map((feature, index) => (
                      <li key={index} className={`flex items-start space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Highlights */}
              {selectedProject.details?.technicalHighlights && (
                <div className="mb-6">
                  <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.details.technicalHighlights.map((highlight, index) => (
                      <li key={index} className={`flex items-start space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className="text-blue-500 mt-1">⚡</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture (if available) */}
              {selectedProject.details?.architecture && (
                <div className="mb-6">
                  <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Architecture & Implementation
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(selectedProject.details.architecture).map(([category, items]) => (
                      <div key={category} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <h5 className={`font-semibold mb-2 capitalize ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {category}
                        </h5>
                        <ul className="space-y-1">
                          {items.map((item, index) => (
                            <li key={index} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Outcomes */}
              {(selectedProject.details?.challenges || selectedProject.details?.outcomes) && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {selectedProject.details?.challenges && (
                    <div>
                      <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Challenges Overcome
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.details.challenges.map((challenge, index) => (
                          <li key={index} className={`flex items-start space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <span className="text-orange-500 mt-1">🎯</span>
                            <span className="text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.details?.outcomes && (
                    <div>
                      <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Project Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.details.outcomes.map((outcome, index) => (
                          <li key={index} className={`flex items-start space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <span className="text-green-500 mt-1">🏆</span>
                            <span className="text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Project Links */}
              <div className="flex justify-center space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={selectedProject.liveDemo}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-colors ${
                    darkMode
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import useImagePath from '../hooks/useImagePath';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import SectionBridge from './ui/SectionBridge';
import Reveal from './ui/Reveal';
import ProjectCard from './ProjectCard';
import { STAGGER } from '../motion/constants';
import ProjectDetailModal from './ProjectDetailModal';

const PROJECTS_INITIAL_VISIBLE = 3;
const PROJECTS_LOAD_MORE_STEP = 3;

const ProjectsSection = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleProjectCount, setVisibleProjectCount] = useState(PROJECTS_INITIAL_VISIBLE);
  const { getImagePath } = useImagePath();

  const visibleProjects = projectsData.slice(0, visibleProjectCount);
  const hiddenProjectCount = projectsData.length - visibleProjectCount;
  const canShowMore = hiddenProjectCount > 0;

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section
      id="projects"
      className={`relative scroll-mt-24 pt-12 pb-24 md:pt-16 md:pb-32 ${
        darkMode ? 'bg-zinc-950/40' : 'bg-zinc-50'
      }`}
      aria-labelledby="projects-heading"
    >
      <SectionBridge darkMode={darkMode} />
      <Container>
        <SectionHeader
          darkMode={darkMode}
          eyebrow="Selected work"
          title="Products and platforms I've shipped"
          titleId="projects-heading"
          description="Full-stack apps, mobile experiences, and internal tools — built with attention to UX, data, and deployable architecture."
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
              onOpenDetails={openProjectModal}
              getImagePath={getImagePath}
              revealDelay={index * STAGGER.cards}
            />
          ))}
        </div>

        {canShowMore && (
          <Reveal className="mt-14 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setVisibleProjectCount((n) =>
                  Math.min(n + PROJECTS_LOAD_MORE_STEP, projectsData.length)
                )
              }
              className={`inline-flex items-center gap-2 rounded-full border px-8 py-3 text-sm font-semibold transition-colors ${
                darkMode
                  ? 'border-white/15 text-white hover:border-white/25 hover:bg-white/5'
                  : 'border-zinc-300 text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              Show more projects
              <ChevronDown size={18} className="opacity-80" aria-hidden />
            </button>
            <p className={`text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Showing {visibleProjectCount} of {projectsData.length}
              {hiddenProjectCount > 0 ? ` · ${hiddenProjectCount} more` : ''}
            </p>
          </Reveal>
        )}
      </Container>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            key={selectedProject.id}
            project={selectedProject}
            darkMode={darkMode}
            onClose={closeProjectModal}
            getImagePath={getImagePath}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

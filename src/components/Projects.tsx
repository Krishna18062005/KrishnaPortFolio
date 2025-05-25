import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { staggerContainerVariants, fadeInUpVariants } from '../utils/useAnimations';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    date: 'May 2025 - June 2025',
    description: 'An attractive portfolio website built using HTML, CSS, and JavaScript.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    codeLink: '#',
    demoLink: '#',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web'
  },
  {
    id: 2,
    title: 'AI-Driven Robotic System',
    date: 'Feb 2025 – Mar 2025',
    description: 'Designed an AI-powered system with a web-based dashboard that reduced manufacturing downtime by 20%.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    codeLink: '#',
    demoLink: '#',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
    category: 'ai'
  },
  {
    id: 3,
    title: 'Online Book Library',
    date: 'Mar 2025 – Apr 2025',
    description: 'Developed a full-stack application using MySQL, Angular, Node.js, and ExpressJS with dynamic book listings.',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    codeLink: '#',
    demoLink: '#',
    technologies: ['Angular', 'Node.js', 'Express', 'MySQL'],
    category: 'web'
  },
  {
    id: 4,
    title: 'Team Consistent Coders',
    date: 'Jan 2025 - Present',
    description: 'An open-source collaborative project for developers to share optimized coding solutions and tackle challenging problems together.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    codeLink: '#',
    demoLink: '#',
    technologies: ['GitHub', 'Java', 'Python', 'Algorithms'],
    category: 'open-source'
  },
  {
    id: 5,
    title: 'Talent Radar',
    date: 'Mar 2025 - Apr 2025',
    description: 'A project aimed at identifying and showcasing talent through analytics and coding challenges.',
    image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    codeLink: '#',
    demoLink: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Analytics'],
    category: 'web'
  },
  {
    id: 6,
    title: 'TechVaseegrah Hackathon',
    date: 'Jan 2025',
    description: 'A hackathon event focused on rapid problem solving and innovation in technology.',
    image: 'https://images.pexels.com/photos/7367/startup-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    codeLink: '#',
    demoLink: '#',
    technologies: ['Hackathon', 'Innovation', 'Rapid Prototyping'],
    category: 'event'
  },
];

const Projects: React.FC = () => {
  const categories = ['all', 'web', 'ai', 'open-source', 'event'];
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-24 bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <SectionTitle 
          title="Projects" 
          emoji="💻" 
          subtitle="Showcasing my best work"
        />
        
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUpVariants}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                title={project.title}
                date={project.date}
                description={project.description}
                image={project.image}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
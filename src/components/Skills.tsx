import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { staggerContainerVariants, scaleInVariants } from '../utils/useAnimations';

interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

const Skills: React.FC = () => {
  const programmingSkills: Skill[] = [
    { name: 'Java', level: 90, icon: '☕' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'JavaScript', level: 80, icon: '🌐' },
    { name: 'C', level: 75, icon: '🔧' },
    { name: 'SQL', level: 85, icon: '🗄️' },
  ];
  
  const frameworkSkills: Skill[] = [
    { name: 'Angular', level: 75, icon: '🅰️' },
    { name: 'Node.js', level: 80, icon: '📦' },
    { name: 'ExpressJS', level: 75, icon: '🚂' },
    { name: 'Git & GitHub', level: 85, icon: '🔄' },
    { name: 'MySQL', level: 80, icon: '📊' },
  ];
  
  const coreSkills = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Networking',
    'Agile Development',
    'RESTful APIs',
  ];
  
  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-900">
      <div className="container">
        <SectionTitle 
          title="Skills" 
          emoji="🛠️" 
          subtitle="What I bring to the table"
        />
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-xl">👨‍💻</span> Programming Languages
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <motion.div key={skill.name} variants={scaleInVariants}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-dark-500 dark:text-dark-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-xl">🧰</span> Frameworks & Tools
            </h3>
            <div className="space-y-6">
              {frameworkSkills.map((skill) => (
                <motion.div key={skill.name} variants={scaleInVariants}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-dark-500 dark:text-dark-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-center">
            <span className="text-xl">⚛️</span> Core Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={scaleInVariants}
                className="card px-6 py-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 hover:from-primary-100 hover:to-secondary-100 dark:hover:from-primary-900/30 dark:hover:to-secondary-900/30 transition-colors"
              >
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
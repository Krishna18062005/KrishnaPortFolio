import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { staggerContainerVariants, fadeInUpVariants } from '../utils/useAnimations';

const Education: React.FC = () => {
  const educationItems = [
    {
      id: 1,
      institution: 'K. Ramakrishnan College of Engineering, Tiruchirappalli',
      degree: 'B.Tech in CSBS',
      period: '2022-2026',
      grade: 'CGPA: 8.16 (up to 5th Semester)',
      activities: 'Coding competitions, hackathons, and technical symposiums.',
      icon: '🎓',
    },
    {
      id: 2,
      institution: 'Sri Bharathi Vidhyashram Matric Hr Sec School, Arni',
      degree: 'HSC Maths-Biology',
      period: '2021-2022',
      grade: '74.16%',
      activities: '',
      icon: '🏫',
    },
    {
      id: 3,
      institution: 'Sri Bharathi Vidhyashram Matric Hr Sec School, Arni',
      degree: 'SSLC',
      period: '2019-2020',
      grade: '95%',
      activities: '',
      icon: '🏫',
    },
  ];
  
  return (
    <section id="education" className="py-24 bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <SectionTitle 
          title="Education" 
          emoji="🎓" 
          subtitle="My academic journey"
        />
        
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-800 transform md:translate-x-[-50%] z-0"></div>
          
          {educationItems.map((item, index) => (
            <motion.div 
              key={item.id}
              variants={fadeInUpVariants}
              className={`relative z-10 flex flex-col md:flex-row mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-dark-800 transform translate-x-[-10px] md:translate-x-[-50%] mt-6"></div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-10`}>
                <div className="card p-6 hover:scale-[1.02] transition-transform">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.institution}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">{item.degree}</p>
                      <p className="text-dark-500 dark:text-dark-400 text-sm mb-2">{item.period}</p>
                      <p className="font-medium">{item.grade}</p>
                      {item.activities && <p className="text-dark-600 dark:text-dark-300 mt-2">{item.activities}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
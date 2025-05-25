import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { staggerContainerVariants, scaleInVariants } from '../utils/useAnimations';

const teamItems = [
  { id: 1, name: "Smart India Hackathon - 2024", teams: 5, category: "hackathon" },
  { id: 2, name: "Smart India Hackathon - 2025", teams: 5, category: "hackathon" },
  { id: 3, name: "Edii Hackathon", teams: 2, category: "hackathon" },
  { id: 4, name: "Startup Competition", teams: 3, category: "competition" },
  { id: 5, name: "Flipkart Grid 5.0", teams: 3, category: "hackathon" },
  { id: 6, name: "Accenture Innovation Challenge", teams: 2, category: "innovation" },
  { id: 7, name: "Face Recognition System Hackathon", teams: 2, category: "hackathon" },
  { id: 8, name: "MSME", teams: 3, category: "competition" },
  { id: 9, name: "Daksh", teams: 2, category: "hackathon" },
  { id: 10, name: "Loreal Sustainability", teams: 2, category: "competition" },
  { id: 11, name: "Coders Conclave", teams: 3, category: "coding" },
  { id: 12, name: "Hackfest", teams: 3, category: "hackathon" },
];

const volunteerItems = [
  { id: 1, name: "HackXtreme'25 Volunteers", members: 20, category: "hackathon" },
  { id: 2, name: "Coding Marathon Volunteers", members: 8, category: "coding" },
  { id: 3, name: "Innovate & Inspire Coordinators", members: 9, category: "innovation" },
];

type Category = 'all' | 'hackathon' | 'competition' | 'innovation' | 'coding';

const TeamBuilding: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<Category>('all');
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Teams' },
    { value: 'hackathon', label: 'Hackathons' },
    { value: 'competition', label: 'Competitions' },
    { value: 'innovation', label: 'Innovation' },
    { value: 'coding', label: 'Coding' },
  ];
  
  const filteredTeams = activeCategory === 'all'
    ? teamItems
    : teamItems.filter(item => item.category === activeCategory);
  
  const filteredVolunteers = activeCategory === 'all'
    ? volunteerItems
    : volunteerItems.filter(item => item.category === activeCategory);
  
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      hackathon: 'from-purple-400 to-indigo-500',
      competition: 'from-green-400 to-teal-500',
      innovation: 'from-amber-400 to-orange-500',
      coding: 'from-blue-400 to-blue-600',
    };
    
    return colors[category] || 'from-primary-400 to-primary-600';
  };
  
  return (
    <section id="team-building" className="py-24 bg-white dark:bg-dark-900">
      <div className="container">
        <SectionTitle 
          title="Team Building & Competitions" 
          emoji="🤝" 
          subtitle="Collaborating to achieve excellence"
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
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category.value
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <span className="text-3xl mr-2">🏆</span> Competition Teams
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {filteredTeams.map((item) => (
              <motion.div
                key={item.id}
                variants={scaleInVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-6 bg-white dark:bg-dark-800 hover:shadow-elevation-3 transition-all overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-full h-2 bg-gradient-to-r ${getCategoryColor(item.category)} mb-6 -mx-6 -mt-6`}></div>
                  <h4 className="font-semibold text-lg mb-4">{item.name}</h4>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item.teams} teams participated
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <span className="text-3xl mr-2">👥</span> Volunteer Teams
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredVolunteers.map((item) => (
              <motion.div
                key={item.id}
                variants={scaleInVariants}
                whileHover={{ scale: 1.05 }}
                className={`card p-6 bg-gradient-to-br ${getCategoryColor(item.category)}/10 hover:shadow-elevation-3 transition-all border border-primary-100 dark:border-primary-800/30`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center mb-4 shadow-elevation-1">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-4">{item.name}</h4>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-white/60 dark:bg-dark-800/60 rounded-full text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item.members} members participated
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Animation variants for the component
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default TeamBuilding;
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { staggerContainerVariants, fadeInUpVariants, slideInLeftVariants, slideInRightVariants } from '../utils/useAnimations';

const Achievements: React.FC = () => {
  const mainAchievements = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: "Self-published international author with the book \"Krish's Tech Journey\" published in over 12 countries."
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: "Organized over 100+ events and led 50+ teams, fostering collaboration and innovation."
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: "Participated in multiple hackathons with teams of 50+ members. Received Best Coding Engineer Award (Dec 25, 2023), Daksh Hackathon Finalist with a ₹10,000 grant, and is working on the book \"365 Days of Code\"."
    },
  ];
  
  const hackathonWins = [
    { id: 1, name: "Chasing Bugs 2025", details: "Intra-college, AI Dept Winner (May 6, 2025)" },
    { id: 2, name: "Blind Coding", details: "(SKCT, Coimbatore – Silver)" },
    { id: 3, name: "Code Relay", details: "(SKCT, Coimbatore – Bronze)" },
    { id: 4, name: "Neural Nector", details: "SKCT, Coimbatore" },
    { id: 5, name: "Di-cipher", details: "(3rd Prize, Sri Eshwar College of Engineering)" },
    { id: 6, name: "Debugging", details: "(1st Prize, Care College of Engineering, Nov 2024)" },
    { id: 7, name: "Master Minds of Code", details: "2024 Winner (Issued by Computer Science and Engineering, Oct 2024)" },
    { id: 8, name: "TEQathon", details: "Outstanding Performer (T4TEQ Software Solutions, Feb 2024)" },
  ];
  
  return (
    <section id="achievements" className="py-24 bg-white dark:bg-dark-900">
      <div className="container">
        <SectionTitle 
          title="Achievements" 
          emoji="🏆" 
          subtitle="Highlights of my journey"
        />
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {mainAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={fadeInUpVariants}
              whileHover={{ y: -10 }}
              className="card overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={`Achievement ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="text-dark-700 dark:text-dark-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold mb-10 text-center flex items-center justify-center gap-2">
            <span className="text-3xl">🥇</span> Hackathon Wins
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackathonWins.map((win, index) => (
              <motion.div
                key={win.id}
                variants={index % 2 === 0 ? slideInLeftVariants : slideInRightVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-100 dark:border-primary-800"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl">🏅</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{win.name}</h4>
                  <p className="text-dark-600 dark:text-dark-300 text-sm">{win.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 card p-8 bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 border border-accent-100 dark:border-accent-800"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white dark:bg-dark-800 flex items-center justify-center flex-shrink-0 shadow-elevation-2">
              <span className="text-4xl">📊</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Rankings & Coding Footprint:</h3>
              <ul className="space-y-2 text-dark-700 dark:text-dark-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span> Ranked Top 1 in SkillRack (Feb 2023 - Present) with 1760+ problems solved
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Global Rank Top 200 on Unstop
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> LeetCode: 475+ challenges completed
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> CodeChef: 463+ problems tackled
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
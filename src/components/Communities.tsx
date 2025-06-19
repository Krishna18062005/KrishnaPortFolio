import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { staggerContainerVariants, fadeInUpVariants } from '../utils/useAnimations';

const communities = [
  {
    id: 1,
    title: "TalentRadar",
    description: "A community born from placement challenges, now offering research-backed clarity, interview strategies, and insights.",
    team: "Sriswasthika A, Sowmiya S, Sanjanah A",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 2,
    title: "Team Consistent Coders",
    description: "A community dedicated to daily coding commits, progress sharing, and building GitHub discipline.",
    team: "Sriswasthika A",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 3,
    title: "Coding Paradise",
    description: "A national hub for discussing data structures, system design, and tech trends.",
    team: "VM Hariharan",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 4,
    title: "Job & Internship Sharing Group",
    description: "A WhatsApp-based platform sharing job leads, resume tips, and interview strategies.",
    team: "VM Hariharan",
    image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

const Communities: React.FC = () => {
  return (
    <section id="communities" className="py-24 bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <SectionTitle 
          title="Communities & Team Building" 
          emoji="🌐" 
          subtitle="Growing together, learning together"
        />
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {communities.map((community) => (
            <motion.div
              key={community.id}
              variants={fadeInUpVariants}
              whileHover={{ y: -10 }}
              className="card overflow-hidden h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={community.image} 
                  alt={community.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-700 dark:text-primary-400">
                  {community.title}
                </h3>
                <p className="text-dark-700 dark:text-dark-300 mb-4">{community.description}</p>
                <p className="text-dark-500 dark:text-dark-400 text-sm font-medium">
                  <span className="text-primary-600 dark:text-primary-400">Co-Admin:</span> {community.team}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary">
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Communities;

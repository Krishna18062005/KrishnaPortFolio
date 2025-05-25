import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { staggerContainerVariants, scaleInVariants } from '../utils/useAnimations';

const certifications = [
  { id: 1, name: "NPTEL Java", category: "programming" },
  { id: 2, name: "NPTEL Data Structures & Algorithms", category: "programming" },
  { id: 3, name: "Microsoft Azure", category: "cloud" },
  { id: 4, name: "Accenture Hackathon Participation", category: "event" },
  { id: 5, name: "Sastra Hackathon Participation", category: "event" },
  { id: 6, name: "Sudo Override, IIT Patna", category: "event" },
  { id: 7, name: "Java Ninja Webinar", category: "programming" },
  { id: 8, name: "Data Science Webinar", category: "data" },
  { id: 9, name: "Spring Boot", category: "programming" },
  { id: 10, name: "Web3 Immersion Workshop", category: "web" },
  { id: 11, name: "Intel Gen AI Workshop", category: "ai" },
  { id: 12, name: "Nipam IPR", category: "other" },
  { id: 13, name: "One Day Web Dev Boot Camp", category: "web" },
  { id: 14, name: "DSA Masterclass", category: "programming" },
  { id: 15, name: "TNCPL Learnathon", category: "event" },
  { id: 16, name: "Loreal BrandStorm Participation", category: "other" },
  { id: 17, name: "Unstop Talent Park", category: "other" },
  { id: 18, name: "ReactJs Workshop", category: "web" },
  { id: 19, name: "Flutter Android Development Workshop", category: "mobile" },
  { id: 20, name: "Basics of Java, OOPs in Java, Java Elanès", category: "programming" },
];

type Category = 'all' | 'programming' | 'web' | 'cloud' | 'data' | 'ai' | 'mobile' | 'event' | 'other';

const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const categories: { value: Category; label: string; emoji: string }[] = [
    { value: 'all', label: 'All', emoji: '🔍' },
    { value: 'programming', label: 'Programming', emoji: '💻' },
    { value: 'web', label: 'Web Dev', emoji: '🌐' },
    { value: 'cloud', label: 'Cloud', emoji: '☁️' },
    { value: 'data', label: 'Data Science', emoji: '📊' },
    { value: 'ai', label: 'AI & ML', emoji: '🤖' },
    { value: 'mobile', label: 'Mobile Dev', emoji: '📱' },
    { value: 'event', label: 'Events', emoji: '🎯' },
    { value: 'other', label: 'Other', emoji: '🔄' },
  ];
  
  const filteredCertifications = activeCategory === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeCategory);
  
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      programming: 'from-blue-400 to-indigo-500',
      web: 'from-teal-400 to-green-500',
      cloud: 'from-blue-400 to-blue-600',
      data: 'from-purple-400 to-indigo-500',
      ai: 'from-red-400 to-pink-500',
      mobile: 'from-amber-400 to-orange-500',
      event: 'from-green-400 to-teal-500',
      other: 'from-gray-400 to-gray-600',
    };
    
    return colors[category] || 'from-primary-400 to-primary-600';
  };
  
  const getCategoryEmoji = (category: string) => {
    const emojis: Record<string, string> = {
      programming: '💻',
      web: '🌐',
      cloud: '☁️',
      data: '📊',
      ai: '🤖',
      mobile: '📱',
      event: '🎯',
      other: '🔄',
    };
    
    return emojis[category] || '🔍';
  };
  
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-dark-900">
      <div className="container">
        <SectionTitle 
          title="Certifications" 
          emoji="📜" 
          subtitle="Continuous learning and growth"
        />
        
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-1 ${
                activeCategory === category.value
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600'
              }`}
            >
              <span>{category.emoji}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={scaleInVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="card overflow-hidden h-full flex flex-col"
              >
                <div className={`h-24 bg-gradient-to-r ${getCategoryColor(cert.category)} flex items-center justify-center text-white`}>
                  <span className="text-4xl">{getCategoryEmoji(cert.category)}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-medium text-center">{cert.name}</h3>
                  <div className="mt-4 pt-4 border-t border-dark-100 dark:border-dark-700 text-center">
                    <span className="inline-block px-3 py-1 bg-dark-100 dark:bg-dark-700 rounded-full text-xs">
                      {categories.find(c => c.value === cert.category)?.label || 'Other'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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

export default Certifications;
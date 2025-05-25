import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  emoji?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  emoji, 
  className = '' 
}) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {emoji && (
          <span className="inline-block text-4xl mb-4 animate-bounce-light">
            {emoji}
          </span>
        )}
        <h2 className="inline-block font-bold relative mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg text-dark-600 dark:text-dark-300">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionTitle;
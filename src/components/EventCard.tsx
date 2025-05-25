import React from 'react';
import { motion } from 'framer-motion';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  description,
  image,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card flex flex-col md:flex-row gap-6 p-6 overflow-hidden"
    >
      <div className="w-full md:w-1/4 flex-shrink-0">
        <div className="h-40 md:h-full rounded-lg overflow-hidden">
          <img
            src={image || 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="text-dark-500 dark:text-dark-400 text-sm mb-1">{date}</div>
        <h3 className="text-xl font-semibold mb-3 text-primary-700 dark:text-primary-400">
          {title}
        </h3>
        <p className="text-dark-600 dark:text-dark-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
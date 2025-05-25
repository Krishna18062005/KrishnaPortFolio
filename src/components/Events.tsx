import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import EventCard from './EventCard';
import { staggerContainerVariants, fadeInUpVariants } from '../utils/useAnimations';

const events = [
  {
    id: 1,
    title: "CBX'24",
    date: "March 18, 2024",
    description: "Coordinated a code debugging event with 120+ participants. Supported by Staff Coordinators Mrs. M R Nithya & Mrs. P. Uma Maheswari.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 2,
    title: "National-Level Tech Event",
    date: "May 1, 2024",
    description: "Organized an online technical event with interactive sessions, Byte Battle, quizzes, and workshops with national participation.",
    image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 3,
    title: "Fix My Code Inaugural Event",
    date: "August 15, 2024",
    description: "Intra-college debugging challenge for KRCE students, organized with fellow coordinators and supported by Mrs. M R Nithya.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 4,
    title: "HackXtreme'25 National Hackathon",
    date: "April 28-29, 2025",
    description: "24-hour national hackathon with real-time problem solving. Organized with support from Mrs. P. Uma Maheswari, Mrs. J. Priyadharshini, and 20+ volunteers.",
    image: "https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 5,
    title: "Innovate & Inspire Symposium",
    date: "June 2024 - June 2025",
    description: "National symposium series led as Chief Patron, with 10+ members, bridging creative ideas with tech solutions.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <SectionTitle 
          title="Event Organising" 
          emoji="📅" 
          subtitle="Creating impactful tech experiences"
        />
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUpVariants}
            >
              <EventCard
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.image}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn btn-primary">
            Collaborate on an Event
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
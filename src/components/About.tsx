import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { staggerContainerVariants, fadeInUpVariants } from '../utils/useAnimations';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-900">
      <div className="container">
        <SectionTitle 
          title="About Me" 
          emoji="👋" 
          subtitle="Get to know me a bit better"
        />
        
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={fadeInUpVariants} className="order-2 md:order-1">
            <p className="text-lg mb-4">
              Hi there! I'm Krishna, a passionate problem solver and tech enthusiast
              from K.Ramakrishnan College of Engineering, Trichy. I thrive on solving
              complex challenges and building impactful software solutions.
            </p>
            <p className="text-lg mb-4">
              With a strong foundation in Java, I'm always ready for the next big challenge.
              I believe in continuous learning and pushing boundaries to create innovative
              solutions that make a difference.
            </p>
            <p className="text-lg mb-6">
              Beyond coding, I'm passionate about mentoring others and building communities
              that foster growth and collaboration. Let's innovate together! 🤩
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline"
              >
                See My Work
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUpVariants} className="order-1 md:order-2 relative">
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-elevation-3">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-secondary-500/90 mix-blend-multiply"></div>
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Krishna K" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900/90 to-transparent">
                <p className="text-white font-medium">
                  "Code is like humor. When you have to explain it, it's bad." 
                  <span className="block mt-2 text-sm opacity-80">— Cory House</span>
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-accent-400 dark:bg-accent-600 rounded-lg -z-10 opacity-30 animate-pulse-slow"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-primary-400 dark:bg-primary-600 rounded-lg -z-10 opacity-30 animate-pulse-slow"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
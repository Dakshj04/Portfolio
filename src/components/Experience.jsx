import React from 'react';
import { Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

function Experience({ experiences }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-ivory">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-16 text-center"
          variants={itemVariants}
        >
          Experience
        </motion.h2>
        {experiences.map((experience, index) => (
          <motion.div 
            key={index} 
            className="bg-ivory rounded-2xl p-8 shadow-lg border border-taupe mb-6"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              x: 10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start">
              <motion.div 
                className="flex-shrink-0 w-12 h-12 bg-beige rounded-full flex items-center justify-center mr-6"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Wrench className="h-6 w-6 text-espresso" />
              </motion.div>
              <div className="flex-grow">
                <h3 className="font-serif text-2xl font-bold text-espresso mb-2">{experience.title}</h3>
                <p className="text-brown font-medium mb-2">{experience.company} • {experience.period}</p>
                <p className="text-mocha leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;
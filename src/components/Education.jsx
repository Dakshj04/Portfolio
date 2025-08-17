import React from 'react';
import { motion } from 'framer-motion';

function Education({ education }) {
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
    hidden: { opacity: 0, x: -30 },
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
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
          Education
        </motion.h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-cream to-ivory rounded-2xl p-8 shadow-lg border border-taupe"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                x: 10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-serif text-2xl font-bold text-espresso mb-2">{edu.degree}</h3>
              <p className="text-brown font-medium mb-2">{edu.institution} • {edu.period}</p>
              {edu.gpa && <p className="text-mocha">CGPA: {edu.gpa}</p>}
              {edu.details && <p className="text-mocha">{edu.details}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
import React from 'react';
import { motion } from 'framer-motion';

function Skills({ skills, skillIcons }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-ivory">
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
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const IconComponent = skillIcons[category];
            return (
              <motion.div 
                key={category} 
                className="bg-ivory rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="h-6 w-6 text-espresso mr-3" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-espresso">{category}</h3>
                </div>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-2 bg-beige text-brown rounded-full text-sm font-medium hover:bg-taupe transition-colors"
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#D2B48C",
                        y: -2
                      }}
                      transition={{ duration: 0.2 }}
                      custom={skillIndex}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
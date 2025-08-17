import React from 'react';
import { motion } from 'framer-motion';

function Projects({ projects }) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
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
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-cream to-ivory rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe hover:border-mocha"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.h3 
                className="font-serif text-2xl font-bold text-espresso mb-4"
                whileHover={{ color: "#8B4513" }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-brown mb-6 leading-relaxed">{project.description}</p>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-brown text-ivory rounded-full text-xs font-medium"
                    variants={techVariants}
                    whileHover={{ scale: 1.1, backgroundColor: "#654321" }}
                    transition={{ duration: 0.2 }}
                    custom={techIndex}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
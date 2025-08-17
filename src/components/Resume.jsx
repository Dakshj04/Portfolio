import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

function Resume({ resumeVersions }) {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#654321",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ivory to-cream">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-16"
          variants={itemVariants}
        >
          Resume Downloads
        </motion.h2>
        <motion.p 
          className="text-brown text-lg mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Download different versions of my resume tailored for specific roles and opportunities.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {resumeVersions.map((resume, index) => (
            <motion.div 
              key={index} 
              className="bg-ivory rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-serif text-xl font-bold text-espresso mb-4">{resume.label}</h3>
              {resume.description && (
                <p className="text-brown mb-6 text-sm leading-relaxed">{resume.description}</p>
              )}
              <motion.a
                href={`/assets/${resume.filename}`}
                download
                className="inline-flex items-center px-6 py-3 bg-brown text-ivory rounded-full hover:bg-espresso transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;
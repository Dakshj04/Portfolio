import React from 'react';
import { motion } from 'framer-motion';

function Certifications({ certifications }) {
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
          Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="bg-ivory rounded-2xl p-8 shadow-lg border border-taupe"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-serif text-xl font-bold text-espresso mb-2">{cert.name}</h3>
              <p className="text-brown">{cert.issuer}</p>
              {cert.date && <p className="text-mocha text-sm mt-2">{cert.date}</p>}
              {cert.verificationUrl && (
                <motion.a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-brown hover:text-espresso transition-colors text-sm underline"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Verify Certificate
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Certifications;
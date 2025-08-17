import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function About({ description, location, email, imageUrl }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-8"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-brown text-lg leading-relaxed mb-8"
              variants={itemVariants}
            >
              {description}
            </motion.p>
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center text-brown"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="mr-3 h-5 w-5" />
                <span>{location}</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-brown"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="mr-3 h-5 w-5" />
                <span>{email}</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <motion.div 
              className="w-80 h-80 mx-auto bg-gradient-to-br from-beige to-taupe rounded-3xl shadow-2xl flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imageUrl}
                alt="Profile"
                className="w-72 h-72 object-cover rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero({ name, title, description, resumeVersions }) {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
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
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-serif text-5xl md:text-7xl font-bold bg-gradient-to-r from-espresso via-brown to-gold bg-clip-text text-transparent mb-6 leading-tight"
          variants={itemVariants}
        >
          {name}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-brown mb-12 font-light leading-relaxed"
          variants={itemVariants}
        >
          {title}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="/assets/resume-aifocus.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-ivory text-brown border-2 border-brown rounded-full hover:bg-brown hover:text-ivory transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume (AI)
          </motion.a>
          <motion.a
            href="/assets/resume-fullstack.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-ivory text-brown border-2 border-brown rounded-full hover:bg-brown hover:text-ivory transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume (Full Stack)
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
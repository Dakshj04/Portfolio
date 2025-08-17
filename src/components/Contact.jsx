import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact({ email, phone, github, linkedin }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactItems = [
    { href: `mailto:${email}`, icon: Mail, label: "Email", value: email },
    { href: `tel:${phone}`, icon: Phone, label: "Phone", value: phone },
    { href: github, icon: Github, label: "GitHub", value: "Dakshj04", external: true },
    { href: linkedin, icon: Linkedin, label: "LinkedIn", value: "daksh-jain", external: true }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-espresso">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-16"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center p-6 bg-ivory/10 rounded-2xl hover:bg-ivory/20 transition-all duration-300 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="h-8 w-8 text-ivory mb-4" />
              </motion.div>
              <span className="text-ivory font-medium">{item.label}</span>
              <span className="text-gold text-sm">{item.value}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
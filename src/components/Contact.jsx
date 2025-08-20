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
    { href: `mailto:${email}`, icon: Mail, text: "Email", value: email },
    { href: `tel:${phone}`, icon: Phone, text: "Phone", value: phone },
    { href: github, icon: Github, text: "GitHub", value: "Dakshj04", external: true },
    { href: linkedin, icon: Linkedin, text: "LinkedIn", value: "daksh-jain", external: true }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-espresso">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-8"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-gold text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center p-6 bg-ivory/10 backdrop-blur-sm rounded-xl hover:bg-ivory/20 transition-all duration-300 group border border-gold/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="h-8 w-8 text-gold group-hover:text-ivory transition-colors duration-300" />
              </motion.div>
              <span className="text-ivory font-medium mb-1">{item.text}</span>
              <span className="text-gold/80 text-sm">{item.value}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
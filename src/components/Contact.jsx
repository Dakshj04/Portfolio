import React from 'react';
import { Mail, Phone, GitHub, Linkedin } from 'lucide-react';
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
    { href: github, icon: GitHub, label: "GitHub", value: "Dakshj04", external: true },
    { href: linkedin, icon: Linkedin, label: "LinkedIn", value: "daksh-jain", external: true }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-espresso dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-ivory dark:text-gold mb-16 text-center"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-2xl font-bold text-ivory dark:text-gold mb-8">
              Get in Touch
            </h3>
            <p className="text-gold dark:text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center p-6 bg-ivory/10 dark:bg-gray-800/50 rounded-2xl hover:bg-ivory/20 dark:hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="h-8 w-8 text-ivory dark:text-gold mb-4" />
                  </motion.div>
                  <span className="text-ivory dark:text-gray-200 font-medium">{item.label}</span>
                  <span className="text-gold dark:text-gray-400 text-sm">{item.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-ivory/10 dark:bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-bold text-ivory dark:text-gold mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-ivory dark:text-gray-200 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-ivory/20 dark:bg-gray-700/50 border border-gold/30 dark:border-gray-600 rounded-lg text-ivory dark:text-gray-200 placeholder-gold/70 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-ivory dark:text-gray-200 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-ivory/20 dark:bg-gray-700/50 border border-gold/30 dark:border-gray-600 rounded-lg text-ivory dark:text-gray-200 placeholder-gold/70 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-ivory dark:text-gray-200 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-ivory/20 dark:bg-gray-700/50 border border-gold/30 dark:border-gray-600 rounded-lg text-ivory dark:text-gray-200 placeholder-gold/70 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold focus:border-transparent resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-espresso font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
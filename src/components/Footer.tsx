import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/qilinxue'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/xueqilin'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:qilin.xue@mail.utoronto.ca'
    }
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">QiLin Xue</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                PhD student in quantum optics, passionate about research, 
                software engineering, and education.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>University of Toronto</p>
                <p>Department of Physics</p>
                <p>Toronto, ON, Canada</p>
                <a
                  href="mailto:qilin.xue@mail.utoronto.ca"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  qilin.xue@mail.utoronto.ca
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} QiLin Xue. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

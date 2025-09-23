import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const slogans = [
    "PhD Student developing next-gen quantum technologies",
    "Educator passionate about impactful teaching",
    "Engineer building software that drive innovation"
  ]

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentSlogan = slogans[currentSloganIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (charIndex < currentSlogan.length) {
          setDisplayedText(currentSlogan.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setDisplayedText(currentSlogan.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          // Finished deleting, move to next slogan
          setIsDeleting(false)
          setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length)
        }
      }
    }, isDeleting ? 50 : 100) // Faster deleting, slower typing

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentSloganIndex, slogans])

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-primary-100/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">QiLin Xue</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-2 font-semibold min-h-[2.5rem] flex items-center justify-center">
              {displayedText}
              <span className="animate-pulse text-primary-300 ml-1">|</span>
            </p>
            <p className="text-lg text-gray-100 mb-8 font-medium">
              University of Toronto • Former Intel/Altera SWE Intern
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 shadow-xl backdrop-blur-sm bg-white/20"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/QiLinXue"
              className="text-white hover:text-primary-300 transition-colors duration-200 p-3 rounded-full hover:bg-white/20"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/xueqilin"
              className="text-white hover:text-primary-300 transition-colors duration-200 p-3 rounded-full hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:qilin.xue@mail.utoronto.ca"
              className="text-white hover:text-primary-300 transition-colors duration-200 p-3 rounded-full hover:bg-white/20"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <a href="#about" className="text-white hover:text-primary-300 transition-colors duration-200 p-2 rounded-full hover:bg-white/20 block">
            <ChevronDown size={28} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

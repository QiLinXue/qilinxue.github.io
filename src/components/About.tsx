import React from 'react'
import { motion } from 'framer-motion'
import { Mountain } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <div className="w-24 h-24 mr-6 rounded-full overflow-hidden border-4 border-primary-200 shadow-xl flex-shrink-0">
              <img 
                src="/QiLinXue.jpg" 
                alt="QiLin Xue" 
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                About Me
              </h2>
              {/* <p className="text-xl text-gray-600">
                filler
              </p> */}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a PhD student at the <b>University of Toronto</b> studying experimental AMO (atomic, molecular, and optical) physics. I am interested in pushing the limits of how finely we can control atoms with light-matter interactions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong background in engineering, I've worked as a SWE intern at <b>Intel/Altera</b> for 16 months, where I wrote algorithms to support the next generation of FPGAs, including periphery IP work on the Agilex series. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In my spare time, I'm an avid adventurer who enjoys camping, running, and skiing. On the right is a picture of me after completing the <b>Laugavegur Trail</b> in Iceland, in Summer 2025. 
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden w-full max-w-2xl mx-auto">
                <img 
                  src="/laugavegur.jpg" 
                  alt="QiLin on the Laugavegur Trail, Iceland" 
                  className="w-full h-[24rem] object-cover object-center scale-110"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-base font-medium">Laugavegur Trail, Iceland</p>
                    <p className="text-xs opacity-90">4-day, 55km backpacking adventure • Summer 2025</p>
                  </div>
                </div>
              </div>
              {/* <p className="text-gray-700 text-sm text-center max-w-2xl mx-auto">
                Completed one of Iceland's most challenging and beautiful hiking trails, traversing volcanic landscapes, glacial rivers, and geothermal valleys.
              </p> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

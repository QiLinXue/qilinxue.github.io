import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Download, ExternalLink } from 'lucide-react'

const Resume = () => {
  const experiences = [
    {
      title: "FPGA Software Engineering Intern",
      company: "Intel Corporation",
      location: "Remote",
      period: "May 2023 - Aug 2024",
      description: "Spearheaded development of innovative periphery modeling methodology and led periphery IP development, significantly improving simulation accuracy and test performance.",
      highlights: [
        "Achieved significant improvement in simulation accuracy for over 85% of signals in IP",
        "Improved test accuracy from 80% to 95% through comprehensive development",
        "Created automated scripts that successfully caught hardware bugs in future device families",
        "Collaborated with hardware teams to fix RTL issues across device families"
      ],
      type: "Industry"
    },
    {
      title: "Contractor",
      company: "Quantum Bridge Technologies",
      location: "Remote",
      period: "Sep 2023 - Dec 2023",
      description: "Collaborated with Prof. Hoi-Kwong Lo's research team on quantum cryptography and QKD technical documentation and research.",
      highlights: [
        "Drafted technical documents including Bank of Canada report on quantum cryptography",
        "Conducted research on global QKD protocols with detailed technical figures",
        "Analyzed current state of Quantum Key Distribution (QKD) technologies",
        "Produced insights to advance secure quantum communication"
      ],
      type: "Industry"
    },
    {
      title: "Teaching Assistant",
      company: "University of Toronto",
      location: "Toronto, ON",
      period: "Sep 2022 - Present",
      description: "Teaching assistant for multiple engineering courses, including ESC190, MAT187/MAT188, and other core engineering subjects.",
      highlights: [
        "Wrote comprehensive lecture notes for ESC190: low-level programming course",
        "Led tutorials and office hours for MAT187/MAT188 calculus and linear algebra",
        "Won Engineering Science Teaching Assistant Award in 2025 (1 of 6 recipients)",
        "Mentored first-year engineering students in algorithms and data structures"
      ],
      type: "Teaching"
    },
    {
      title: "Data Analyst Intern",
      company: "Global Affairs Canada",
      location: "Ottawa, ON (Remote)",
      period: "May 2022 - Aug 2022",
      description: "Analyzed data from over 1,000 treaties using Python and Power BI to support Canada's international relations and policy decisions.",
      highlights: [
        "Used Python and Power BI to analyze 1,000+ treaty datasets",
        "Maintained and optimized treaty database at treaty-accord.gc.ca",
        "Built automated pipeline to digitize and clean paper records",
        "Improved database reliability and streamlined access to critical information"
      ],
      type: "Industry"
    }
  ]

  const skills = [
    { category: "Programming", items: ["Python", "C++", "JavaScript", "TypeScript", "MATLAB", "LabVIEW", "ROOT", "SRIM"] },
    { category: "Quantum Technologies", items: ["Quantum Optics", "Quantum Key Distribution", "High-Finesse Cavities", "Quantum Algorithms", "QKD Protocols"] },
    { category: "Software Development", items: ["FPGA Development", "RTL Design", "Machine Learning", "Data Analysis", "Power BI", "Git"] },
    { category: "Research & Analysis", items: ["Experimental Design", "Scientific Writing", "Mathematica", "Statistical Analysis", "Technical Documentation"] },
    { category: "Teaching & Education", items: ["Course Development", "Student Mentoring", "Technical Writing", "Problem Creation", "Competition Organization"] }
  ]

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            My professional journey in quantum physics, software engineering, and education
          </p> */}
{/*           
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center">
              <Download size={20} className="mr-2" />
              Download PDF
            </button>
            <button className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200 flex items-center justify-center">
              <ExternalLink size={20} className="mr-2" />
              View Online
            </button>
          </div> */}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="text-primary-600 mr-3" size={28} />
              Education
            </h3>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
                    <Briefcase className="text-blue-600" size={20} />
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">Bachelor of Applied Science in Engineering Science</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                        <Calendar size={16} className="mr-1" />
                        Sep 2020 - Jun 2025
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <span className="font-semibold">University of Toronto</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        Toronto, ON
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Engineering Physics major with PEY Co-op Program, graduating with High Honours and maintaining Dean's Honour List status for 7 consecutive terms.
                    </p>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <strong>GPA:</strong>&nbsp;3.91/4.00 (Cumulative)
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <strong>Three Minors:</strong>&nbsp;Mathematics, Artificial Intelligence, Robotics
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <strong>Engineering Science Award of Excellence:</strong>&nbsp;1 of 17 recipients out of 300 students
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <strong>Dean's Honour List:</strong>&nbsp;7 consecutive terms (2020 Fall - 2025 Winter)
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="text-primary-600 mr-3" size={28} />
              Work Experience
            </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        exp.type === 'Education' ? 'bg-primary-100' : 'bg-green-100'
                      }`}>
                        <Briefcase className={`${
                          exp.type === 'Education' ? 'text-primary-600' : 'text-green-600'
                        }`} size={20} />
                      </div>
                      
                      <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                            <Calendar size={16} className="mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-3">
                          <span className="font-semibold">{exp.company}</span>
                          <span className="mx-2">•</span>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume

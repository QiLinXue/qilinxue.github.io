import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Star, GraduationCap } from 'lucide-react'

const Teaching = () => {
  const courses = [
    { code: "ESC180", name: "Introduction to Computer Programming", times: 3, description: "Python programming fundamentals" },
    { code: "ESC190", name: "Introduction to Engineering Design", times: 2, description: "Algorithms and data structures" },
    { code: "MAT187", name: "Calculus II", times: 1, description: "Single variable calculus" },
    { code: "MAT188", name: "Linear Algebra", times: 1, description: "Engineering linear algebra" },
    { code: "PHY180", name: "Physics I", times: 1, description: "Engineering Science Classical mechanics" }
  ]

  const achievements = [
    {
      title: "EngSci Teaching AssistantAward",
      description: "Recognized for exceptional dedication to student learning in the Introduction to Programming and Data Structures and Algorithms courses",
      icon: <Award className="text-yellow-500" size={24} />,
      year: "2023"
    },
    {
      title: "Student Feedback Excellence",
      description: "Consistently high ratings from students across all courses taught",
      icon: <Star className="text-blue-500" size={24} />,
      year: "2022-2024"
    }
  ]

  return (
    <section id="teaching" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Teaching Experience
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about education and helping students succeed in engineering and mathematics
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Courses Taught */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-primary-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Courses TA'ed</h3>
              </div>
              
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.code}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">{course.code} - {course.name}</h4>
                      <p className="text-sm text-gray-600">{course.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary-600 font-bold">{course.times}x</span>
                      <p className="text-xs text-gray-500">taught</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center">
                  <Users className="text-primary-600 mr-2" size={20} />
                  <span className="text-sm font-medium text-primary-800">
                    Total: {courses.reduce((sum, course) => sum + course.times, 0)} course offerings
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements and Notes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Teaching Awards */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Award className="text-primary-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Awards & Recognition</h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                      <span className="text-xs text-primary-600 font-medium">{achievement.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EngSci Notes */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-primary-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">EngSci Notes</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                Comprehensive study materials and lecture notes for Engineering Science courses, 
                helping students understand complex concepts through clear explanations and examples.
              </p>
              
              <a
                href="https://xueqilin.me/engsci-2t4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <BookOpen size={20} className="mr-2" />
                View All Notes
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Teaching

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, X } from 'lucide-react'
import { blogPosts } from '../data/blog'

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null)

  const handleReadMore = (postId: string) => {
    setSelectedPost(postId)
  }

  const handleCloseModal = () => {
    setSelectedPost(null)
  }

  const selectedPostData = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts on research, teaching, and adventures
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar size={16} className="mr-2" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      {post.readTime}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => handleReadMore(post.id)}
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                    >
                      Read More
                      <ArrowLeft size={16} className="ml-2 rotate-180" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPostData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    {selectedPostData.date}
                    <span className="mx-2">•</span>
                    <Clock size={16} className="mr-2" />
                    {selectedPostData.readTime}
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedPostData.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedPostData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {selectedPostData.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('# ')) {
                        return (
                          <h1 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            {paragraph.slice(2)}
                          </h1>
                        )
                      } else if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                            {paragraph.slice(3)}
                          </h2>
                        )
                      } else if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                            {paragraph.slice(4)}
                          </h3>
                        )
                      } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                        return (
                          <p key={index} className="text-sm text-gray-600 italic text-center mt-2 mb-4">
                            {paragraph.slice(1, -1)}
                          </p>
                        )
                      } else if (paragraph.trim() === '') {
                        return <br key={index} />
                      } else if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
                        return (
                          <li key={index} className="text-gray-700 mb-2">
                            {paragraph.slice(3)}
                          </li>
                        )
                      } else {
                        return (
                          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                            {paragraph}
                          </p>
                        )
                      }
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Blog

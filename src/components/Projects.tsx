import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, BookOpen, Music, Award, X, Calendar, Users, Code2, Globe } from 'lucide-react'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { allProjects } from '../data/projects/index'
import type { Project } from '../data/projects'

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'award':
        return <Award className="text-primary-600" size={32} />
      case 'book':
        return <BookOpen className="text-primary-600" size={32} />
      case 'music':
        return <Music className="text-primary-600" size={32} />
      case 'play':
        return <Play className="text-primary-600" size={32} />
      default:
        return <Award className="text-primary-600" size={32} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800'
      case 'Ongoing': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  const convertMarkdownToHtml = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my work spanning quantum physics, software engineering, and education
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-lg transition-all duration-500 overflow-hidden group ${
                expandedProject === index 
                  ? 'shadow-2xl scale-[1.02] md:col-span-2 lg:col-span-3' 
                  : 'hover:shadow-xl hover:scale-[1.01]'
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              {/* Project Header - Always Visible */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-primary-50 transition-colors duration-200">
                    {getIcon(project.iconType)}
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedProject === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400"
                    >
                      <ExternalLink size={20} />
                    </motion.div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {project.teamSize}
                    </div>
                    <div className="flex items-center">
                      <Code2 size={14} className="mr-1" />
                      {project.duration}
                    </div>
                  </div>
                  <div className="text-primary-600 font-medium text-xs">
                    {expandedProject === index ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-6 space-y-6">
                        {/* Full Description */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
                          <div className="text-gray-700 leading-relaxed">
                            {(() => {
                              const lines = project.fullDescription.split('\n');
                              const processedLines: (JSX.Element | { line: string; index: number })[] = [];
                              let i = 0;
                              
                              while (i < lines.length) {
                                const line = lines[i];
                                
                                // Handle multi-line LaTeX display math
                                if (line.trim() === '\\[') {
                                  let mathContent = '';
                                  let j = i + 1;
                                  while (j < lines.length && lines[j].trim() !== '\\]') {
                                    mathContent += lines[j].trim() + ' ';
                                    j++;
                                  }
                                  if (j < lines.length) {
                                    processedLines.push(
                                      <div key={`math-${i}`} className="my-6 text-center">
                                        <BlockMath math={mathContent.trim()} />
                                      </div>
                                    );
                                    i = j + 1;
                                    continue;
                                  }
                                }
                                
                                // Handle HTML audio elements
                                if (line.trim().startsWith('<audio')) {
                                  let audioContent = line;
                                  let j = i + 1;
                                  while (j < lines.length && !audioContent.includes('</audio>')) {
                                    audioContent += '\n' + lines[j];
                                    j++;
                                  }
                                  if (audioContent.includes('</audio>')) {
                                    processedLines.push(
                                      <div key={`audio-${i}`} className="my-6">
                                        <div dangerouslySetInnerHTML={{ __html: audioContent }} />
                                      </div>
                                    );
                                    i = j;
                                    continue;
                                  }
                                }
                                
                                // Handle HTML div elements with styling
                                if (line.trim().startsWith('<div')) {
                                  let divContent = line;
                                  let j = i + 1;
                                  while (j < lines.length && !divContent.includes('</div>')) {
                                    divContent += '\n' + lines[j];
                                    j++;
                                  }
                                  if (divContent.includes('</div>')) {
                                    processedLines.push(
                                      <div key={`div-${i}`} className="my-6">
                                        <div dangerouslySetInnerHTML={{ __html: divContent }} />
                                      </div>
                                    );
                                    i = j;
                                    continue;
                                  }
                                }
                                
                                // Handle HTML iframe elements
                                if (line.trim().startsWith('<iframe')) {
                                  let iframeContent = line;
                                  let j = i + 1;
                                  while (j < lines.length && !iframeContent.includes('</iframe>')) {
                                    iframeContent += '\n' + lines[j];
                                    j++;
                                  }
                                  if (iframeContent.includes('</iframe>')) {
                                    processedLines.push(
                                      <div key={`iframe-${i}`} className="my-6">
                                        <div dangerouslySetInnerHTML={{ __html: iframeContent }} />
                                      </div>
                                    );
                                    i = j;
                                    continue;
                                  }
                                }
                                
                                // Handle markdown tables
                                if (line.includes('|') && line.includes('|')) {
                                  const tableLines = [];
                                  let k = i;
                                  while (k < lines.length && lines[k].includes('|')) {
                                    tableLines.push(lines[k]);
                                    k++;
                                  }
                                  
                                  if (tableLines.length >= 2) {
                                    const rows = tableLines.map(row => 
                                      row.split('|').map(cell => cell.trim()).filter(cell => cell !== '')
                                    );
                                    
                                    const dataRows = rows.filter(row => 
                                      !row.every(cell => /^-+$/.test(cell))
                                    );
                                    
                                    if (dataRows.length > 0) {
                                      const headers = dataRows[0];
                                      const tableData = dataRows.slice(1);
                                      
                                      processedLines.push(
                                        <div key={`table-${i}`} className="my-6 overflow-x-auto">
                                          <table className="min-w-full border-collapse border border-gray-300">
                                            <thead>
                                              <tr className="bg-gray-50">
                                                {headers.map((header, idx) => (
                                                  <th key={idx} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                                                    <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(header) }} />
                                                  </th>
                                                ))}
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {tableData.map((row, rowIdx) => (
                                                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                  {row.map((cell, cellIdx) => (
                                                    <td key={cellIdx} className="border border-gray-300 px-4 py-2">
                                                      <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(cell) }} />
                                                    </td>
                                                  ))}
                                                </tr>
                                              ))}
                                            </tbody>
                                          </table>
                                        </div>
                                      );
                                      i = k;
                                      continue;
                                    }
                                  }
                                }
                                
                                // Handle single-line LaTeX display math
                                if ((line.includes('\\[') && line.includes('\\]')) || (line.includes('\\\\[') && line.includes('\\\\]'))) {
                                  let mathContent;
                                  if (line.includes('\\\\[') && line.includes('\\\\]')) {
                                    mathContent = line.match(/\\\\\[(.*?)\\\\]/)?.[1];
                                  } else {
                                    mathContent = line.match(/\\\[(.*?)\\\]/)?.[1];
                                  }
                                  if (mathContent) {
                                    processedLines.push(
                                      <div key={`math-${i}`} className="my-6 text-center">
                                        <BlockMath math={mathContent} />
                                      </div>
                                    );
                                    i++;
                                    continue;
                                  }
                                }
                                
                                processedLines.push({ line, index: i });
                                i++;
                              }
                              
                              return processedLines.map((item, index) => {
                                if ('line' in item) {
                                  const line = item.line;
                                  const lineIndex = item.index;
                                  
                                  // Handle markdown headers
                                  if (line.startsWith('## ')) {
                                    return (
                                      <h2 key={lineIndex} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                        {line.slice(3)}
                                      </h2>
                                    );
                                  }
                                  if (line.startsWith('### ')) {
                                    return (
                                      <h3 key={lineIndex} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                                        {line.slice(4)}
                                      </h3>
                                    );
                                  }
                                      // Handle markdown images
                                      if (line.startsWith('![') && line.includes('](') && line.includes(')')) {
                                        const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
                                        if (match) {
                                          const [, alt, src] = match;
                                          return (
                                            <div key={lineIndex} className="my-6">
                                              <img 
                                                src={src} 
                                                alt={alt} 
                                                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                                              />
                                            </div>
                                          );
                                        }
                                      }
                                  // Handle horizontal rules
                                  if (line.trim() === '---') {
                                    return (
                                      <hr key={lineIndex} className="my-8 border-gray-300" />
                                    );
                                  }
                                  // Handle italic text (captions)
                                  if (line.startsWith('*') && line.endsWith('*')) {
                                    return (
                                      <p key={lineIndex} className="text-sm text-gray-600 italic text-center mt-2 mb-4">
                                        {line.slice(1, -1)}
                                      </p>
                                    );
                                  }
                                  // Handle mixed content with LaTeX inline math and bold text
                                  if (line.includes('\\(') && line.includes('\\)') || line.includes('\\\\(') && line.includes('\\\\)') || line.includes('**')) {
                                    const parts = [];
                                    let remaining = line;
                                    let partIndex = 0;
                                    
                                    while (remaining.length > 0) {
                                      // Check for LaTeX inline math first (both single and double escaped)
                                      const inlineMatchSingle = remaining.match(/\\\((.*?)\\\)/);
                                      const inlineMatchDouble = remaining.match(/\\\\\\((.*?)\\\\)/);
                                      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
                                      
                                      let match = null;
                                      let matchType = '';
                                      
                                      // Choose the first match (single or double escaped)
                                      const inlineMatch = inlineMatchSingle || inlineMatchDouble;
                                      
                                      if (inlineMatch && (!boldMatch || (inlineMatch.index !== undefined && boldMatch.index !== undefined && inlineMatch.index < boldMatch.index))) {
                                        match = inlineMatch;
                                        matchType = 'math';
                                      } else if (boldMatch) {
                                        match = boldMatch;
                                        matchType = 'bold';
                                      }
                                      
                                      if (match) {
                                        // Add text before the match
                                        const beforeMatch = remaining.substring(0, match.index);
                                        if (beforeMatch.trim()) {
                                          parts.push(
                                            <span key={`text-${partIndex++}`}>
                                              {beforeMatch}
                                            </span>
                                          );
                                        }
                                        
                                        // Add the matched content
                                        if (matchType === 'math') {
                                          parts.push(
                                            <InlineMath key={`math-${partIndex++}`} math={match[1]} />
                                          );
                                        } else if (matchType === 'bold') {
                                          parts.push(
                                            <strong key={`bold-${partIndex++}`}>
                                              {match[1]}
                                            </strong>
                                          );
                                        }
                                        
                                        // Update remaining
                                        remaining = remaining.substring((match.index || 0) + match[0].length);
                                      } else {
                                        // No more matches, add remaining text
                                        if (remaining.trim()) {
                                          parts.push(
                                            <span key={`text-${partIndex++}`}>
                                              {remaining}
                                            </span>
                                          );
                                        }
                                        break;
                                      }
                                    }
                                    
                                    return (
                                      <p key={lineIndex} className="mb-3">
                                        {parts}
                                      </p>
                                    );
                                  }
                                  // Handle legacy LaTeX patterns
                                  if (line.includes('ω =') || line.includes('m =') || line.includes('δ_Ek =')) {
                                    return (
                                      <div key={lineIndex} className="my-3">
                                        <InlineMath math={line} />
                                      </div>
                                    );
                                  }
                                  // Regular text
                                  if (line.trim()) {
                                    return (
                                      <p key={lineIndex} className="mb-3">
                                        {line}
                                      </p>
                                    );
                                  }
                                  return null;
                                } else {
                                  // This is a pre-processed LaTeX block
                                  return item;
                                }
                              });
                            })()}
                          </div>
                        </div>

                        {/* Challenges and Achievements */}
                        {(project.challenges && project.challenges.length > 0) || (project.achievements && project.achievements.length > 0) ? (
                          <div className="grid md:grid-cols-2 gap-6">
                            {project.challenges && project.challenges.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h4>
                                <ul className="space-y-2">
                                  {project.challenges.map((challenge: string, idx: number) => (
                                    <li key={idx} className="flex items-start text-gray-700">
                                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      {challenge}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {project.achievements && project.achievements.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                                <ul className="space-y-2">
                                  {project.achievements.map((achievement: string, idx: number) => (
                                    <li key={idx} className="flex items-start text-gray-700">
                                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ) : null}

                        {/* All Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Additional detailed sections if available */}
                        {project.methodology && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">{project.methodology.title}</h4>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {project.methodology.content}
                            </p>
                          </div>
                        )}

                        {project.results && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">{project.results.title}</h4>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {project.results.content}
                            </p>
                          </div>
                        )}

                        {project.technicalSpecs && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">{project.technicalSpecs.title}</h4>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {project.technicalSpecs.content}
                            </p>
                          </div>
                        )}

                        {project.futureWork && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">{project.futureWork.title}</h4>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {project.futureWork.content}
                            </p>
                          </div>
                        )}

                            {/* Links */}
                            {project.links && Object.keys(project.links).length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Links</h4>
                                <div className="flex flex-wrap gap-3">
                                  {Object.entries(project.links).map(([key, url]: [string, string]) => (
                                    <a
                                      key={key}
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center px-4 py-2 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-lg transition-colors duration-200"
                                    >
                                      {key === 'github' && <Github size={16} className="mr-2" />}
                                      {key === 'demo' && <ExternalLink size={16} className="mr-2" />}
                                      {key === 'live' && <Globe size={16} className="mr-2" />}
                                      {key === 'youtube' && <Play size={16} className="mr-2" />}
                                      {key === 'papers' && <BookOpen size={16} className="mr-2" />}
                                      {key === 'docs' && <Code2 size={16} className="mr-2" />}
                                      {key === 'playlist' && <Play size={16} className="mr-2" />}
                                      {key === 'notes' && <BookOpen size={16} className="mr-2" />}
                                      {key === 'lab' && <Globe size={16} className="mr-2" />}
                                      {key === 'paper' && <BookOpen size={16} className="mr-2" />}
                                      {key === 'documentation' && <Code2 size={16} className="mr-2" />}
                                      {key === 'video' && <Play size={16} className="mr-2" />}
                                      {key === 'download' && <ExternalLink size={16} className="mr-2" />}
                                      {key === 'orcid' && <BookOpen size={16} className="mr-2" />}
                                      {key === 'arxiv' && <BookOpen size={16} className="mr-2" />}
                                      {key === 'discord' && <Globe size={16} className="mr-2" />}
                                      {key === 'website' && <Globe size={16} className="mr-2" />}
                                      {key === 'blog' && <BookOpen size={16} className="mr-2" />}
                                      {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

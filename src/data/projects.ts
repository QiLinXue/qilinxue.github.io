export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  iconType: 'award' | 'book' | 'music' | 'play'
  status: 'Completed' | 'In Progress' | 'Ongoing'
  color: string
  duration: string
  year: string
  teamSize?: string
  challenges?: string[]
  achievements?: string[]
  links?: {
    [key: string]: string
  }
  methodology?: {
    title: string
    content: string
  }
  results?: {
    title: string
    content: string
  }
  technicalSpecs?: {
    title: string
    content: string
  }
  futureWork?: {
    title: string
    content: string
  }
}

export const projects: Project[] = [
  {
    id: 'weather-tank',
    title: 'Capstone Weather in a Tank',
    shortDescription: 'A comprehensive fluid dynamics simulation project that models atmospheric weather patterns in a controlled laboratory environment.',
    fullDescription: 'This capstone project represents the culmination of my undergraduate studies in Engineering Science. The Weather in a Tank project simulates atmospheric circulation patterns using a rotating cylindrical tank filled with water. The system models the Coriolis effect and other atmospheric phenomena through controlled laboratory conditions.\n\nKey features include real-time data visualization, advanced numerical modeling using finite difference methods, and automated data collection systems. The project demonstrates the application of fluid dynamics principles to understand complex weather systems and climate patterns.',
    technologies: ['Python', 'MATLAB', 'Fluid Dynamics', 'Data Visualization', 'Arduino', 'LabVIEW'],
    iconType: 'award',
    status: 'In Progress',
    color: 'from-blue-500 to-cyan-500',
    duration: '8 months',
    teamSize: 'Individual',
    year: '2024',
    challenges: [
      'Implementing accurate fluid dynamics simulations',
      'Real-time data acquisition and processing',
      'Calibrating experimental parameters for atmospheric modeling'
    ],
    achievements: [
      'Developed novel visualization techniques for fluid flow patterns',
      'Achieved 95% accuracy in weather pattern prediction',
      'Presented findings at Engineering Science Symposium'
    ],
    links: {
      github: 'https://github.com/qilinxue/weather-tank',
      demo: 'https://weather-tank-demo.vercel.app',
      paper: '/papers/weather-tank-paper.pdf'
    }
  },
  {
    id: 'phd-thesis',
    title: 'PhD Thesis Research',
    shortDescription: 'Investigating novel quantum optical phenomena and their applications in quantum computing.',
    fullDescription: 'My PhD research focuses on experimental quantum optics, specifically exploring quantum entanglement and its applications in quantum information processing. The work involves developing new experimental protocols for quantum state manipulation and measurement using advanced optical systems.\n\nCurrent research includes the development of quantum error correction protocols, quantum state tomography techniques, and the implementation of quantum algorithms on optical quantum computers. The project combines theoretical quantum mechanics with practical experimental design.',
    technologies: ['Quantum Optics', 'LabVIEW', 'Python', 'Optics', 'Quantum Computing', 'Mathematica'],
    iconType: 'book',
    status: 'Ongoing',
    color: 'from-purple-500 to-pink-500',
    duration: '3+ years',
    teamSize: 'Research Group (5 members)',
    year: '2022-Present',
    challenges: [
      'Maintaining quantum coherence in experimental systems',
      'Developing precise measurement techniques for quantum states',
      'Integrating theoretical models with experimental constraints'
    ],
    achievements: [
      'Published 2 papers in top-tier quantum optics journals',
      'Developed new quantum state preparation protocols',
      'Presented at 3 international conferences'
    ],
    links: {
      github: 'https://github.com/qilinxue/quantum-optics-research',
      papers: '/papers/quantum-research-papers',
      lab: 'https://quantum-lab.utoronto.ca'
    }
  },
  {
    id: 'midishark',
    title: 'Midishark',
    shortDescription: 'An intelligent music transcription tool that converts audio recordings into MIDI format using machine learning algorithms.',
    fullDescription: 'Midishark is a sophisticated music transcription system that uses deep learning to convert audio recordings into MIDI format with high accuracy. The project combines signal processing, machine learning, and music theory to create a robust transcription tool.\n\nThe system processes audio in real-time, identifying musical notes, rhythms, and harmonies. It features a user-friendly interface for musicians and music producers, with support for multiple audio formats and export options. The machine learning model was trained on a diverse dataset of classical and contemporary music.',
    technologies: ['Python', 'TensorFlow', 'Audio Processing', 'Machine Learning', 'PyQt', 'Librosa'],
    iconType: 'music',
    status: 'Completed',
    color: 'from-green-500 to-emerald-500',
    duration: '6 months',
    teamSize: 'Solo Project',
    year: '2023',
    challenges: [
      'Training accurate ML models for music transcription',
      'Real-time audio processing optimization',
      'Handling polyphonic music and complex harmonies'
    ],
    achievements: [
      'Achieved 92% accuracy on classical music transcription',
      'Developed custom neural network architecture',
      'Open-sourced with 500+ GitHub stars'
    ],
    links: {
      github: 'https://github.com/qilinxue/midishark',
      demo: 'https://midishark-demo.vercel.app',
      docs: 'https://midishark-docs.readthedocs.io'
    }
  },
  {
    id: 'opho',
    title: 'OPhO (Online Physics Olympiad)',
    shortDescription: 'A web-based platform for hosting physics competitions and practice sessions.',
    fullDescription: 'OPhO is a comprehensive online platform designed to host physics competitions and provide practice resources for students worldwide. The platform features automated grading, real-time leaderboards, and a comprehensive problem management system.\n\nThe system supports multiple competition formats, including individual and team competitions, with features like live scoring, detailed analytics, and educational resources. It has been used by over 10,000 students from 50+ countries, making physics education more accessible globally.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Socket.io', 'AWS'],
    iconType: 'play',
    status: 'Completed',
    color: 'from-orange-500 to-red-500',
    duration: '1 year',
    teamSize: 'Team of 4',
    year: '2022-2023',
    challenges: [
      'Scaling to support thousands of concurrent users',
      'Implementing secure real-time competition features',
      'Creating fair and accurate automated grading systems'
    ],
    achievements: [
      'Successfully hosted 15+ international competitions',
      'Served 10,000+ students from 50+ countries',
      'Achieved 99.9% uptime during competitions'
    ],
    links: {
      github: 'https://github.com/qilinxue/opho-platform',
      live: 'https://opho.online',
      demo: 'https://opho-demo.vercel.app'
    }
  },
  {
    id: 'differential-geometry',
    title: 'Differential Geometry YouTube Series',
    shortDescription: 'Educational video series explaining complex differential geometry concepts through intuitive visualizations.',
    fullDescription: 'This educational series makes advanced differential geometry concepts accessible to undergraduate and graduate students through clear explanations, intuitive visualizations, and step-by-step mathematical derivations. The series covers topics from basic manifolds to advanced topics like Riemannian geometry.\n\nEach video combines rigorous mathematical content with visual aids and practical examples. The series has gained recognition in the mathematics education community and is used as supplementary material in university courses worldwide.',
    technologies: ['Video Production', 'Mathematical Visualization', 'Education', 'Blender', 'LaTeX', 'Manim'],
    iconType: 'play',
    status: 'Ongoing',
    color: 'from-indigo-500 to-purple-500',
    duration: '2+ years',
    teamSize: 'Solo Project',
    year: '2022-Present',
    challenges: [
      'Creating accurate mathematical visualizations',
      'Balancing rigor with accessibility',
      'Producing high-quality educational content consistently'
    ],
    achievements: [
      '50+ videos with 100,000+ total views',
      'Used in 20+ university courses worldwide',
      'Featured in Mathematical Association of America newsletter'
    ],
    links: {
      youtube: 'https://youtube.com/@qilinxue-math',
      playlist: 'https://youtube.com/playlist?list=PLdifferential-geometry',
      notes: 'https://differential-geometry-notes.vercel.app'
    }
  }
]

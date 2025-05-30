import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

import Portfolio from '../assets/projects/portfolio.png'
import Todo_Renewed from '../assets/projects/todo_renewed.png'
import WeatherApp from '../assets/projects/weatherApp.png'
import BarcodeBackend from '../assets/projects/barcodeBackend.png'
import BarcodeApp from '../assets/projects/barcodeApp.jpg'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      title: "Barcode Menu Restaurant",
      description: "A QR code-based restaurant menu application with user authentication, post creation, and interaction features.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "MUI", "Tailwind CSS", "Framer Motion"],
      image: BarcodeApp,
      category: "fullstack",
      github: "https://github.com/dasjayadev/BarcodeApp",
      liveDemo: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application with CRUD Operation, Tasks organization, and Realtime data sync features.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Framer Motion", "Tailwind CSS"],
      image: Todo_Renewed,
      category: "fullstack",
      github: "https://github.com/soumya3969/Todo_Renewed",
      liveDemo: "https://todo-renewed-f.vercel.app/"
    },
    {
      title: "Weather App",
      description: "Interactive weather dashboard showcasing current conditions and forecasts for locations worldwide.",
      technologies: ["JavaScript", "OpenWeatherMap API", "HTML5","CSS3" ,"Bootstrap 5"],
      image: WeatherApp,
      category: "frontend",
      github: "https://github.com/soumya3969/Weather_Web_App-mini-p",
      liveDemo: "https://soumya3969.github.io/Weather_Web_App-mini-p/"
    },
    {
      title: "Barcode App Backend",
      description: "RESTful API for a QRcode Menu Restaurant platform with user authentication, post creation, and interaction features.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Vercel", "Vercel Blob Storage"],
      image: BarcodeBackend,
      category: "backend",
      github: "https://github.com/soumya3969/BarcodeApp-Backend",
      liveDemo: null
    },
    {
      title: "Fitness Tracker",
      description: "Application to track workouts, nutritional data, and fitness progress with data visualization.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "fullstack",
      github: "#",
      liveDemo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with animations and interactive elements.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: Portfolio,
      category: "frontend",
      github: "https://github.com/soumya3969/soumya.dev",
      liveDemo: "https://soumya-dev-beryl.vercel.app/"
    }
  ]

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-dark-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mt-2 mb-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore some of my recent work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map(filter => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-secondary-500 text-white'
                  : 'bg-dark-200 text-gray-300 hover:bg-dark-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200 rounded-lg overflow-hidden card"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-400/80 pointer-events-none"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-dark-100 text-secondary-400 px-2 py-1 rounded-full hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] transition-shadow duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between space-x-4">
                  {project.github && project.github !== '#' ? (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white hover:shadow-glow-strong py-1 px-2 rounded-full transition-colors"
                    >
                      <FiGithub className="mr-1" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="flex items-center text-gray-500 cursor-not-allowed py-1 px-2 rounded-full opacity-60">
                      <FiGithub className="mr-1" />
                      <span>Code</span>
                    </span>
                  )}
                  
                  {project.liveDemo && (
                    project.liveDemo !== '#' ? (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white hover:shadow-glow-strong py-1 px-2 rounded-full transition-colors"
                      >
                        <FiExternalLink className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex items-center text-gray-500 cursor-not-allowed py-1 px-2 rounded-full opacity-60">
                        <FiExternalLink className="mr-1" />
                        <span>Live Demo</span>
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
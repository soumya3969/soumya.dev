import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, user authentication, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "fullstack",
      github: "#",
      liveDemo: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application with drag-and-drop task management, project organization, and team collaboration features.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      image: "https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "fullstack",
      github: "#",
      liveDemo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard showcasing current conditions and forecasts for locations worldwide.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "frontend",
      github: "#",
      liveDemo: "#"
    },
    {
      title: "Social Media API",
      description: "RESTful API for a social media platform with user authentication, post creation, and interaction features.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      image: "https://images.pexels.com/photos/7015034/pexels-photo-7015034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "backend",
      github: "#",
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
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "frontend",
      github: "#",
      liveDemo: "#"
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
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white hover:shadow-glow-strong py-1 px-2 rounded-full transition-colors"
                  >
                    <FiGithub className="mr-1" />
                    <span>Code</span>
                  </a>
                  
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white hover:shadow-glow-strong py-1 px-2 rounded-full transition-colors"
                    >
                      <FiExternalLink className="mr-1" />
                      <span>Live Demo</span>
                    </a>
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
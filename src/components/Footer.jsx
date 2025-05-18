import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-dark-500 text-gray-300">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-white">Soumya</span>
              <span className="text-secondary-500">.dev</span>
            </motion.div>
            
            <p className="mb-6 text-gray-400 max-w-sm">
              Creating innovative web solutions with a focus on user experience and clean code.
              Let&apos;s collaborate to bring your ideas to life.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <motion.a 
                href="https://github.com/soumya3969" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-lg"
                whileHover={{ scale: 1.2 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/soumya3968/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-800 transition-colors text-lg"
                whileHover={{ scale: 1.2 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="https://x.com/Soumya3969" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors text-lg"
                whileHover={{ scale: 1.2 }}
              >
                <FiTwitter />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/hh_soumya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors text-lg"
                whileHover={{ scale: 1.2 }}
              >
                <FiInstagram />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['hero', 'about', 'education', 'skills', 'projects', 'contact'].map((section, index) => (
                <li key={index}>
                  <Link
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Bangalore, India</li>
              <li>srmhnt2001@gmail.com</li>
              <li>+91 99374 46657</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-dark-300 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Soumya Ranjan. All rights reserved.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="w-10 h-10 bg-dark-300 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary-500 transition-all cursor-pointer"
            >
              <FiArrowUp />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
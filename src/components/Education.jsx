import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Utkal University",
      location: "Bhubaneswar, Odisha, India",
      period: "2018 - 2021",
      description: "Studied discrete mathematics, linear algebra, and statistical analysis that built my foundation in programming logic. Graduated with distinction."
    },
    {
      degree: "Master of Computer Applications",
      institution: "Gandhi Institute For Technology (Autonomous) [GIFT]",
      location: "Bhubaneswar, Odisha, India",
      period: "2022 - 2024",
      description: "Specialized in software engineering and full-stack development. Developed several projects using modern technologies including MERN stack."
    },
    {
      degree: "Full Stack Javascript Development Bootcamp 2.0",
      institution: "Ineuron.ai",
      location: "Bengaluru, Karnataka, India [Remote]",
      period: "2022-2023",
      description: "Intensive 1-year bootcamp focusing on modern web development technologies including HTML, CSS, Javascript and React."
    },
    {
      degree: "MERN Full Stack Development",
      institution: "Jspiders",
      location: "Bengaluru, Karnataka, India",
      period: "2023-2024",
      description: "In-depth training on MongoDB, Express.js, React.js, and Node.js. Hands-on experience with real-world projects. Intensive training in the complete MERN stack ecosystem. Built 5+ full-stack applications including an e-commerce platform and real-time chat application. Mastered RESTful API design, state management with Redux, and CI/CD deployment workflows."
    },
    
  ]

  return (
    <section id="education" className="py-20 bg-dark-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education</h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mt-2 mb-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            My academic journey and certifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-dark-100 transform md:-translate-x-1/2"></div>

          {/* Education items */}
          <div className="space-y-12 relative">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 relative">
                  <div 
                    className={`p-6 bg-dark-200 rounded-lg shadow-lg border-l-4 border-secondary-500 hover:shadow-glow transition-shadow md:mx-4 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                    <h4 className="text-lg text-secondary-400 mb-2">{item.institution}</h4>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-3 ">
                      <FiMapPin className="mr-2" />
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <FiCalendar className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                    
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Circle marker for timeline */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-secondary-500 border-4 border-dark-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
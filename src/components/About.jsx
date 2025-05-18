import { motion } from 'framer-motion'
import { FiUser, FiCode, FiMail, FiMapPin } from 'react-icons/fi'

const About = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const aboutInfo = [
    { icon: <FiUser />, label: 'Name', value: 'Soumya Ranjan' },
    { icon: <FiCode />, label: 'Experience', value: 'Full Stack Developer' },
    { icon: <FiMail />, label: 'Email', value: 'srmhnt2001@gmail.com' },
    { icon: <FiMapPin />, label: 'Location', value: 'India' }
  ]

  return (
    <section id="about" className="py-20 bg-dark-400">
      <div className="section-container">
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mt-2 mb-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Get to know more about me, my background, and what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="relative rounded-lg overflow-hidden h-96"
          >
            <div className="absolute inset-0 bg-secondary-500/10 z-10 rounded-lg"></div>
            <div className="absolute h-full w-full">
              <img
                src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Soumya Ranjan"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-400 to-transparent z-20">
              <h3 className="text-2xl font-bold text-white">Soumya Ranjan</h3>
              <p className="text-secondary-400">Full Stack Developer</p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Dedicated Full Stack Developer from India
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m a passionate Full Stack Developer specializing in MERN stack development with a 
              focus on building exceptional digital experiences. With a strong foundation in both 
              front-end and back-end technologies, I create scalable, user-friendly applications 
              that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-6">
              I enjoy transforming complex problems into simple, beautiful, and intuitive designs. 
              My goal is to create software that not only functions flawlessly but also provides 
              users with a seamless and enjoyable experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {aboutInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <span className="text-secondary-500 text-lg">{info.icon}</span>
                  <span className="text-gray-400">{info.label}:</span>
                  <span className="text-white">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
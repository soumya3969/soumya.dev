import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import contactUs from '/images/contactUs.gif'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text)
        setIsSubmitting(false)
        setSubmitStatus('error')
        setErrorMessage('Failed to send message. Please try again later.')
        
        // Reset error after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
          setErrorMessage('')
        }, 5000)
      })
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "srmhnt2001@gmail.com",
      link: "mailto:srmhnt2001@gmail.com"
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+91 99374 46657",
      link: "tel:+919937446657"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Bangalore, India",
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-400">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Contact Me</h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mt-2 mb-4"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200 p-6 rounded-lg text-center border border-dark-100"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-secondary-500/10 rounded-full flex items-center justify-center text-secondary-500 text-2xl">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link} 
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-300">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-dark-200 rounded-lg p-8 border border-dark-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Send Me a Message</h3>
              <p className="text-gray-300 mb-6">
                Have a project in mind or want to discuss a potential collaboration? 
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>
              
              <div className="hidden md:block mt-10">
                <img 
                  src={contactUs}
                  alt="Contact illustration"
                  className="w-full h-fit rounded-lg opacity-75 aspect-video bg-contain object-cover drop-shadow-[0_35px_35px_rgba(0,54,208,0.5)]"
                  loading="lazy"
                  style={{
                    // filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </div>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="text-gray-300 text-sm mb-1 block">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-dark-300 border border-dark-100 text-white text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 pl-10"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="text-gray-300 text-sm mb-1 block">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-dark-300 border border-dark-100 text-white text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 pl-10"
                      placeholder="example@domain.com"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="subject" className="text-gray-300 text-sm mb-1 block">Subject</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMessageSquare className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-dark-300 border border-dark-100 text-white text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 pl-10"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="text-gray-300 text-sm mb-1 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="bg-dark-300 border border-dark-100 text-white text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5"
                    placeholder="Hello, I'm interested in working with you on..."
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full h-10 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <FiSend className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-500/20 text-green-400 rounded-lg text-center"
                    >
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-red-500/20 text-red-400 rounded-lg text-center"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
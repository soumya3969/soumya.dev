import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowDown } from "react-icons/fi";

import Avt2 from "/images/avt2.jpg";
// import DarkVeil from "./ui/DarkVeil";
import LightRays from "./ui/LightRays";

const Hero = () => {
  return (
    <section
      id='hero'
      className='min-h-screen flex items-center relative overflow-hidden py-20'
    >
      {/* Background with gradient overlay */}
      <div className='absolute inset-0 z-0'>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-dark-400 via-dark-400/95 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/hero_bg.png')] bg-cover bg-center bg-no-repeat opacity-20"></div> */}
        {/* <DarkVeil/> */}
        <LightRays
          raysOrigin='top-center'
          raysColor='#00ffff'
          raysSpeed={0.5}
          lightSpread={5.5}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className='custom-rays'
        />
      </div>

      {/* Content */}
      <div className='section-container relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-start'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mb-3'
            >
              <span className='text-secondary-500 text-lg md:text-xl font-medium px-6 py-2 border border-secondary-500/30 rounded-full bg-secondary-500/10'>
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-5xl md:text-7xl font-bold text-white mb-6'
            >
              Soumya Ranjan
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-xl md:text-3xl text-gray-300 font-medium mb-8'
            >
              I&apos;m a{" "}
              <span className='text-secondary-500'>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "MERN Stack Developer",
                    1500,
                    "Frontend Developer",
                    1500,
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-gray-300 text-lg mb-12 max-w-2xl leading-relaxed'
            >
              Crafting exceptional digital experiences through modern web
              development. Specializing in building scalable applications with
              clean, efficient code and intuitive user interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='flex flex-wrap gap-6'
            >
              <motion.a
                href='/resume.pdf'
                className='btn-primary flex items-center gap-2 text-lg px-8 py-3'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FiDownload className='h-5 w-5' />
                <a
                  href='/documents/resume.pdf'
                  download='soumya_ranjan_resume.pdf'
                  className='text-lg font-medium'
                >
                  Resume
                </a>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='btn-secondary flex items-center gap-2 text-lg px-8 py-3 cursor-pointer'
                >
                  Hire Me
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='hidden lg:block relative'
          >
            <div className='relative w-full aspect-square'>
              <div className='absolute inset-0 bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 rounded-full animate-pulse'></div>
              <img
                src={Avt2}
                alt='Soumya Ranjan'
                className='rounded-full w-full h-full object-cover border-8 border-dark-300/50'
              />
              <div className='absolute -inset-4 border-2 border-dashed border-secondary-500/30 rounded-full animate-spin-slow'></div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='absolute -top-2 -left-2 bg-dark-200 p-2 rounded-lg shadow-lg border border-dark-100'
            >
              <div className='text-secondary-500 font-bold text-xl'>1+</div>
              <div className='text-gray-400 text-sm'>Years of Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='absolute -bottom-2 -right-2 bg-dark-200 p-2 rounded-lg shadow-lg border border-dark-100'
            >
              <div className='text-secondary-500 font-bold text-xl'>5+</div>
              <div className='text-gray-400 text-sm'>Projects Completed</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      >
        <Link
          to='about'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='flex flex-col items-center text-gray-400 hover:text-white transition-colors cursor-pointer'
        >
          <span className='text-sm mb-2'>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown className='h-5 w-5' />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

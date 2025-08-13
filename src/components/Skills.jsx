// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import {
//   FiCode,
//   FiDatabase,
//   FiServer,
//   FiLayout,
//   FiTool,
//   FiGlobe,
//   FiCloud
// } from 'react-icons/fi'
// import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiRedux, SiNextdotjs, SiGit, SiDocker, SiGraphql, SiTypescript, SiVite } from 'react-icons/si'

// const Skills = () => {
//   const [slidesPerView, setSlidesPerView] = useState(3)

//   useEffect(() => {
//     const updateSlidesPerView = () => {
//       if (window.innerWidth < 640) {
//         setSlidesPerView(1)
//       } else if (window.innerWidth < 1024) {
//         setSlidesPerView(2)
//       } else {
//         setSlidesPerView(3)
//       }
//     }

//     updateSlidesPerView()
//     window.addEventListener('resize', updateSlidesPerView)
//     return () => window.removeEventListener('resize', updateSlidesPerView)
//   }, [])

//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       icon: <FiLayout />,
//       skills: [
//         { name: "React.js", icon: <SiReact />, level: 90 },
//         { name: "JavaScript", icon: <SiJavascript />, level: 85 },
//         { name: "HTML5", icon: <SiHtml5 />, level: 90 },
//         { name: "CSS3", icon: <SiCss3 />, level: 85 },
//         { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
//         { name: "Redux", icon: <SiRedux />, level: 75 },
//       ]
//     },
//     {
//       title: "Backend Development",
//       icon: <FiServer />,
//       skills: [
//         { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
//         { name: "Express.js", icon: <SiExpress />, level: 85 },
//         { name: "RESTful APIs", icon: <FiGlobe />, level: 80 },
//         { name: "GraphQL", icon: <SiGraphql />, level: 70 },
//         { name: "TypeScript", icon: <SiTypescript />, level: 75 },
//       ]
//     },
//     {
//       title: "Databases",
//       icon: <FiDatabase />,
//       skills: [
//         { name: "MongoDB", icon: <SiMongodb />, level: 85 },
//         { name: "SQL", icon: <FiDatabase />, level: 70 },
//       ]
//     },
//     {
//       title: "DevOps & Tools",
//       icon: <FiTool />,
//       skills: [
//         { name: "Git", icon: <SiGit />, level: 85 },
//         { name: "Docker", icon: <SiDocker />, level: 70 },
//         { name: "AWS", icon: <FiCloud />, level: 65 },
//         { name: "Vite", icon: <SiVite />, level: 80 },
//       ]
//     },
//   ]

//   return (
//     <section id="skills" className="py-20 bg-dark-400">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="section-title">My Skills</h2>
//           <div className="w-24 h-1 bg-secondary-500 mx-auto mt-2 mb-4"></div>
//           <p className="text-gray-300 max-w-3xl mx-auto">
//             Technologies and tools I work with
//           </p>
//         </motion.div>

//         {/* Skills Carousel */}
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={slidesPerView}
//           pagination={{ clickable: true }}
//           modules={[Pagination, Autoplay]}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false
//           }}
//           loop={true}
//           className="mb-20"
//         >
//           {skillCategories.map((category, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="h-full"
//               >
//                 <div className="bg-dark-200 rounded-lg p-6 border border-dark-100 h-full">
//                   <div className="flex items-center mb-6">
//                     <span className="text-3xl text-secondary-500 mr-3">
//                       {category.icon}
//                     </span>
//                     <h3 className="text-xl font-bold">{category.title}</h3>
//                   </div>

//                   <div className="space-y-5">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div key={skillIndex}>
//                         <div className="flex justify-between items-center mb-2">
//                           <div className="flex items-center">
//                             <span className="text-lg text-gray-300 mr-2">
//                               {skill.icon}
//                             </span>
//                             <span className="text-gray-300">{skill.name}</span>
//                           </div>
//                           <span className="text-sm text-gray-400">{skill.level}%</span>
//                         </div>
//                         <div className="w-full bg-dark-300 rounded-full h-2.5">
//                           <div
//                             className="bg-gradient-to-r from-primary-600 to-secondary-500 h-2.5 rounded-full"
//                             style={{ width: `${skill.level}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Additional Skills Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-xl font-bold mb-8 text-center">All Skills</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
//             {skillCategories.flatMap(category =>
//               category.skills.map((skill, index) => (
//                 <motion.div
//                   key={`${category.title}-${index}`}
//                   whileHover={{ y: -5 }}
//                   className="bg-dark-200 rounded-lg p-4 border border-dark-100"
//                 >
//                   <div className="text-3xl text-secondary-500 mb-2 flex justify-center">
//                     {skill.icon}
//                   </div>
//                   <p className="text-gray-300">{skill.name}</p>
//                 </motion.div>
//               ))
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Skills

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiPostman,
  SiMongoose,
  SiSequelize,
  SiKeycloak,
} from "react-icons/si";

const skills = [
  {
    name: "ReactJS",
    icon: <FaReact size={40} className='text-blue-400' />,
    level: 90,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript size={40} className='text-yellow-400' />,
    level: 95,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs size={40} className='text-white' />,
    level: 75,
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs size={40} className='text-green-500' />,
    level: 85,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress size={40} className='text-gray-400' />,
    level: 85,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} className='text-green-400' />,
    level: 80,
  },
  {
    name: "Mongoose",
    icon: <SiMongoose size={40} className='text-red-500' />,
    level: 75,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={40} className='text-blue-400' />,
    level: 75,
  },
  {
    name: "Sequelize",
    icon: <SiSequelize size={40} className='text-blue-400' />,
    level: 80,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={40} className='text-orange-500' />,
    level: 98,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={40} className='text-blue-500' />,
    level: 92,
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript className='text-blue-400' style={{ fontSize: "40px" }} />
    ),
    level: 80,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={40} className='text-cyan-400' />,
    level: 90,
  },
  {
    name: "Redux",
    icon: <SiRedux size={40} className='text-purple-500' />,
    level: 85,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className='text-orange-400' />,
    level: 60,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={40} className='text-red-500' />,
    level: 85,
  },
  {
    name: "Keycloak",
    icon: <SiKeycloak size={40} className='text-blue-600' />,
    level: 40,
  },
  {
    name: "Github",
    icon: <FaGithub size={40} className='text-gray-100' />,
    level: 85,
  },
  {
    name: "Gitlab",
    icon: <FaGitlab size={40} className='text-orange-400' />,
    level: 75,
  },
  {
    name: "Postman",
    icon: <SiPostman size={40} className='text-orange-400' />,
    level: 80,
  },
  {
    name: "vsCode",
    icon: <TbBrandVscode size={40} className='text-blue-600' />,
    level: 80,
  },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "ReactJS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "NextJS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Sequelize",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Firebase", "Github", "Gitlab", "Postman", "Keycloak", "vsCode"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id='skills' className='bg-dark-200 py-20'>
      <div className='section-container' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='section-title'>My Skills</h2>
          <div className='w-24 h-1 bg-secondary-500 mx-auto mt-2 mb-4'></div>
          <p className='text-gray-400 max-w-3xl mx-auto mt-4'>
            I have experience with various technologies in the web development
            ecosystem. Here are the key skills and technologies I work with:
          </p>
        </motion.div>

        {/* Skill Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-16'
        >
          <Slider {...sliderSettings}>
            {skills.map((skill, index) => (
              <div key={skill.name} className='px-2'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className='card flex flex-col items-center p-6 h-[180px] hover:shadow-[inset_0_0_0_2px_rgba(99,102,241,0.8)] transition-shadow duration-300'
                >
                  <div className='mb-4'>{skill.icon}</div>
                  <h3 className='text-lg font-semibold mb-3'>{skill.name}</h3>
                  <div className='w-full bg-dark-300 h-2 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                      className='h-full bg-gradient-to-r from-primary-500 to-accent-500'
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Skill Categories */}
        <div className='grid md:grid-cols-3 gap-8 '>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 * categoryIndex }}
              className='card hover:shadow-glow'
            >
              <h3 className='text-xl font-semibold mb-6 section-title'>
                {category.title}
              </h3>
              <ul className='space-y-3'>
                {category.skills.map((skillName) => {
                  const skill = skills.find((s) => s.name === skillName);
                  return (
                    <li
                      key={skillName}
                      className='flex items-center justify-between'
                    >
                      <div className='flex items-center gap-2'>
                        <span className='text-sm'>{skill?.icon}</span>
                        <span>{skillName}</span>
                      </div>
                      <span className='text-sm text-gray-400'>
                        {skill?.level}%
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

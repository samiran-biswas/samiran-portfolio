// src/components/Testimonials.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'
import examProVideo from '../assets/projects/ExamPro.mp4'
import signProDocVideo from '../assets/projects/SignProDoc.mp4'
import mJobVideo from '../assets/projects/MJob.mp4'
import linkHubVideo from '../assets/projects/alllink.mp4'
import crmProVideo from '../assets/projects/crm.mp4'

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Professor at IIT Patna",
    content: "Samiran was one of our top students in the M.Tech program. His ability to solve complex problems and implement innovative solutions was exceptional. He demonstrated strong leadership in group projects.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Amit Sharma",
    role: "CTO at Dinajpur Nidhi",
    content: "Samiran's work on our Loan Management System transformed our operations. His technical skills and attention to detail resulted in a system that handles 300+ daily users with excellent performance.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Project Manager",
    content: "Working with Samiran on the Tractor Maintenance project was a pleasure. He delivered ahead of schedule and his solution helped us secure additional funding for further development.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
]

const techLogos = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" }
]

const projectVideos = [
  {
    id: 1,
    title: "ExamPro - Interactive Learning Platform",
    description: "Cutting-edge flashcard application revolutionizing how students and professionals learn",
    video: examProVideo,
    features: [
      "50/50 split-card design for terms & definitions",
      "Smooth 3D flip animations",
      "Personalized study tracking & analytics",
      "Responsive & accessible across devices",
      "Stacked card UI for realistic learning"
    ],
    additionalInfo: {
      title: "Looking For",
      items: [
        "Investors to help scale the vision",
        "Developers passionate about edtech",
        "Collaborators to expand features",
        "Potential co-founder(s)"
      ]
    }
  },
  {
    id: 2,
    title: "SignProDoc - eSign Application",
    description: "Digital document signing platform for secure and quick approvals",
    video: signProDocVideo,
    features: [
      "Easy upload of PDFs and images",
      "Multiple signer support",
      "Authentication before signing",
      "Document journey tracking",
      "Future Aadhaar-based eSign integration"
    ],
    additionalInfo: {
      title: "Future Plans",
      items: [
        "AI-powered document verification",
        "Smart signer suggestions",
        "Enterprise features",
        "SaaS subscription model"
      ]
    }
  },
  {
    id: 3,
    title: "MJob - Career Discovery Platform",
    description: "Revolutionary platform connecting professionals with dream careers",
    video: mJobVideo,
    features: [
      "Advanced job matching algorithms",
      "Company culture insights",
      "Skill gap analysis",
      "Personalized career pathways",
      "Talent acquisition tools"
    ],
    additionalInfo: {
      title: "Opportunities",
      items: [
        "Investors for scaling",
        "Developers to enhance platform",
        "Organizations for partnerships",
        "Co-founders to join the journey"
      ]
    }
  },
  {
    id: 4,
    title: "LinkHub - Ultimate Link Management",
    description: "All-in-one platform for smart link management and digital presence",
    video: linkHubVideo,
    features: [
      "Centralized link control dashboard",
      "Engagement analytics",
      "Custom-branded URL shortener",
      "Social media scheduling",
      "Meeting & product management"
    ],
    additionalInfo: {
      title: "Future Features",
      items: [
        "AI-powered link optimization",
        "Advanced scheduling",
        "Team collaboration tools",
        "E-commerce integrations"
      ]
    }
  },
  {
    id: 5,
    title: "CRM Pro - Business Management SaaS",
    description: "Comprehensive CRM system with AI-powered automation",
    video: crmProVideo,
    features: [
      "Leads & customer management",
      "Quotation & invoice generation",
      "Sales pipeline visualization",
      "AI-powered form builder",
      "Document management system"
    ],
    additionalInfo: {
      title: "Tech Stack",
      items: [
        "React.js frontend",
        "Node.js backend",
        "MongoDB database",
        "AWS infrastructure",
        "AI/ML integrations"
      ]
    }
  }
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="testimonials" ref={ref} className="section">
      <motion.h2
        initial={{  y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        Testimonials & Projects
      </motion.h2>

      {/* Testimonials Section */}
      <motion.div
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold mb-8 text-center">What People Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{  y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Videos Section */}
      <motion.div
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
        <div className="space-y-12">
          {projectVideos.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{  y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white dark:bg-dark/50 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-primary">{project.title}</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-lg">Key Features:</h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.additionalInfo && (
                    <div className="mt-6">
                      <h5 className="font-semibold mb-3 text-lg">{project.additionalInfo.title}:</h5>
                      <ul className="space-y-2">
                        {project.additionalInfo.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-secondary mr-2">→</span>
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="rounded-xl overflow-hidden shadow-md">
                  <ReactPlayer
                    url={project.video}
                    width="100%"
                    height="100%"
                    controls
                    light={false}
                    playing={false}
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center">My Technology Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{  scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <img 
                src={tech.src} 
                alt={tech.name}
                className="tech-logo w-12 h-12 mb-3"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
// // src/components/Testimonials.jsx
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const testimonials = [
//   {
//     id: 1,
//     name: "Dr. Rajesh Kumar",
//     role: "Professor at IIT Patna",
//     content: "Samiran was one of our top students in the M.Tech program. His ability to solve complex problems and implement innovative solutions was exceptional. He demonstrated strong leadership in group projects.",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     id: 2,
//     name: "Amit Sharma",
//     role: "CTO at Dinajpur Nidhi",
//     content: "Samiran's work on our Loan Management System transformed our operations. His technical skills and attention to detail resulted in a system that handles 300+ daily users with excellent performance.",
//     avatar: "https://randomuser.me/api/portraits/men/44.jpg"
//   },
//   {
//     id: 3,
//     name: "Priya Singh",
//     role: "Project Manager",
//     content: "Working with Samiran on the Tractor Maintenance project was a pleasure. He delivered ahead of schedule and his solution helped us secure additional funding for further development.",
//     avatar: "https://randomuser.me/api/portraits/women/65.jpg"
//   }
// ]

// const techLogos = [
//   { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//   { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
//   { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
//   { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//   { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
//   { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//   { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//   { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
//   { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
//   { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//   {
//     name: "TailwindCSS",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
//   }, { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//   { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//   { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
//   { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
//   { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
//   { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" }
// ]

// const projectVideos = [
//   {
//     id: 1,
//     title: "Loan Management System",
//     description: "A comprehensive system automating loan processes for Dinajpur Nidhi Limited",
//     videoId: "dQw4w9WgXcQ" // Replace with actual YouTube video ID
//   },
//   {
//     id: 2,
//     title: "Tractor Maintenance App",
//     description: "Web application with area measurement features for agricultural engineering",
//     videoId: "dQw4w9WgXcQ" // Replace with actual YouTube video ID
//   }
// ]

// const Testimonials = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.3,
//     triggerOnce: true
//   })

//   return (
//     <section id="testimonials" ref={ref} className="section">
//       <motion.h2
//         initial={{  y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5 }}
//         className="heading"
//       >
//         Testimonials & Tech Stack
//       </motion.h2>

//       {/* Testimonials Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="mb-20"
//       >
//         <h3 className="text-2xl font-bold mb-8 text-center">What People Say</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{  y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ scale: 1.03 }}
//               className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
//             >
//               <div className="flex items-center mb-4">
//                 <img 
//                   src={testimonial.avatar} 
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-bold">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Project Videos Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="mb-20"
//       >
//         <h3 className="text-2xl font-bold mb-8 text-center">Project Showcase</h3>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {projectVideos.map((video, index) => (
//             <motion.div
//               key={video.id}
//               initial={{  y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
//               className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
//             >
//               <h4 className="text-xl font-bold mb-2 text-primary">{video.title}</h4>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">{video.description}</p>
//               <div className="video-container rounded-lg overflow-hidden">
//                 <iframe 
//                   src={`https://www.youtube.com/embed/${video.videoId}`}
//                   title={video.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Tech Stack Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ duration: 0.5, delay: 0.8 }}
//       >
//         <h3 className="text-2xl font-bold mb-8 text-center">My Technology Stack</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//           {techLogos.map((tech, index) => (
//             <motion.div
//               key={tech.name}
//               initial={{  scale: 0.8 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
//               className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
//             >
//               <img 
//                 src={tech.src} 
//                 alt={tech.name}
//                 className="tech-logo w-12 h-12 mb-3"
//               />
//               <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{tech.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// export default Testimonials
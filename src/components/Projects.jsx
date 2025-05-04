import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'Loan Origination System (LOS)',
      description: 'Bayes Theorem engine to predict loan eligibility with AI chatbot integration',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'AI Integration'],
      features: [
        'Automated loan processing APIs',
        'Agreement editor for reusable templates',
        'PAN/CIBIL/Bank Analysis integration',
        'Payment Gateway Integration',
        'PDF Compressor using Ghostscript'
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Loan Management System (LMS)',
      description: 'Comprehensive system automating loan sanctioning and EMI tracking',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
      features: [
        'Automated loan workflows',
        'Real-time EMI tracking',
        'Role-based access control',
        '300+ daily active users'
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'StockKey LMS',
      description: 'Inventory management system with stock tracking and reporting',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Chart.js'],
      features: [
        'Real-time stock monitoring',
        'Automated reorder alerts',
        'Multi-location inventory',
        'Custom reporting dashboard'
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Stock Matrix',
      description: 'Advanced stock analysis and portfolio management tool',
      technologies: ['Python', 'Django', 'Pandas', 'Matplotlib'],
      features: [
        'Stock performance analytics',
        'Portfolio simulation',
        'Technical indicators',
        'Custom watchlists'
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Lalaji Organic',
      description: 'E-commerce platform for organic products with admin dashboard',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'TailwindCSS'],
      features: [
        'Product catalog management',
        'Secure checkout flow',
        'Order tracking system',
        'Admin analytics dashboard'
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'HomeoWithDrPratibha',
      description: 'Healthcare platform for homeopathic consultations',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Twilio'],
      features: [
        'Appointment scheduling',
        'Video consultation',
        'Prescription management',
        'Patient records system'
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'eSign Platform',
      description: 'Digital document signing solution with authentication',
      technologies: ['React.js', 'Node.js', 'AWS S3', 'Digital Signatures'],
      features: [
        'Document upload & management',
        'Multi-party signing',
        'Audit trail',
        'Aadhaar eSign integration'
      ],
      demoUrl: '#',
      codeUrl: '#'
    },
    
  ]

  return (
    <section id="projects" ref={ref} className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col h-full hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3 text-primary">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex gap-3">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <FiExternalLink size={14} /> Live Demo
                </a>
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <FiGithub size={14} /> Code
                </a>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
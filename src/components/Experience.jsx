import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const experiences = [
    {
      company: 'Dinajpur Nidhi Limited',
      role: 'Full Stack Developer',
      duration: 'Feb 2023 – Present',
      location: 'Siliguri, India',
      description: [
        'Developed a Loan Management System for DNL, automating loan sanctioning and EMI tracking',
        'Built employee role management and performance tracking, enhancing workflow and efficiency',
        'Deployed a scalable system handling 300+ daily users, reducing turnaround time significantly',
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB'],
    },
    {
      company: 'College of Agricultural Engineering (RPCAU)',
      role: 'Full Stack Developer Intern',
      duration: 'Dec 2022 – Jul 2023',
      location: 'Pusa, India',
      description: [
        'Built a Tractor Maintenance Web App with Area Measurement to streamline tracking and servicing',
        'Implemented the feature, helping the project secure ¥27K university funding for development',
      ],
      technologies: ['WordPress', 'JavaScript', 'HTML', 'Android Studio', 'MySQL'],
    },
  ]

  return (
    <section id="experience" ref={ref} className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                <h4 className="text-lg font-semibold">{exp.company}</h4>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FiCalendar />
                <span>{exp.duration}</span>
                <span>•</span>
                <FiBriefcase />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="list-disc pl-5 space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
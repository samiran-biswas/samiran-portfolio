// src/components/Skills.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const technicalSkills = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 88 },
  { name: 'JavaScript', level: 95 },
  { name: 'React Native', level: 80 },
  { name: 'Redux/Zustand', level: 85 },
  { name: 'React Query', level: 82 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'C++', level: 70 },
  { name: 'HTML5/CSS3', level: 90 },
  { name: 'TailwindCSS', level: 88 },
  { name: 'MongoDB', level: 80 },
  { name: 'RESTful APIs', level: 85 },
  { name: 'Zod/Joi', level: 80 },
  { name: 'AWS', level: 75 },
  { name: 'Azure Blob', level: 70 },
  { name: 'Google APIs', level: 75 },
  { name: 'Git/GitHub', level: 85 },
  { name: 'CI/CD', level: 80 }
]

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Bengali', level: 'Native' },
]

const softSkills = [
  'Leadership', 
  'Problem-Solving', 
  'Decision-Making',
  'Team Collaboration',
  'Agile Methodology',
  'Code Review',
  'Technical Documentation',
  'Mentoring',
  'Project Planning',
  'Performance Optimization'
]

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="skills" ref={ref} className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
          <div className="space-y-4 grid-mask h-[500px] overflow-y-auto pr-2">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.03 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.03 }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Languages</h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >
                  <span className="font-medium">{language.name}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {language.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span className="text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
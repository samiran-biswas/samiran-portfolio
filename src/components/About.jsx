import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={ref} className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          <p>
            I'm a passionate <strong>Full Stack Developer</strong> with a Master
            of Technology in Computer Science and Engineering from{' '}
            <strong>Indian Institute of Technology (IIT), Patna</strong>.
          </p>
          <p>
            My expertise lies in building scalable web applications using modern
            technologies like <strong>React.js, Node.js, and MongoDB</strong>. I
            specialize in creating efficient, user-friendly solutions that solve
            real-world problems.
          </p>
          <p>
            Currently, I'm working at{' '}
            <strong>Dinajpur Nidhi Limited</strong> where I've developed
            innovative financial systems like a Loan Management System and Loan
            Origination System with AI capabilities.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or mentoring aspiring
            developers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
        >
          <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">
                Master of Technology in Computer Science and Engineering
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Indian Institute of Technology (IIT), Patna
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Coursework: Data Structure and Algorithms, Operating Systems,
                Computer Networks, Database Management Systems, Object Oriented
                Programming
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-primary">Languages</h3>
          <div className="flex gap-2 flex-wrap">
            {['English', 'Hindi', 'Bengali'].map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
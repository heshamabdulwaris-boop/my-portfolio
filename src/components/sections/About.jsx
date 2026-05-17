import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaProjectDiagram, FaUsers, FaCode } from 'react-icons/fa';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { personalInfo } from '../../data/personalInfo';

const About = () => {
  const stats = [
    { icon: FaBriefcase, label: 'Experience', value: '6 Months' },
    { icon: FaProjectDiagram, label: 'Projects Completed', value: '4+' },
    { icon: FaUsers, label: 'Happy Clients', value: '15+' },
    { icon: FaCode, label: 'Technologies Mastered', value: '6+' },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl font-bold gradient-text mb-4">AWH</div>
                  <p className="text-slate-700 dark:text-slate-400 text-lg">Frontend Developer</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              A Passionate <span className="gradient-text">Frontend Developer</span>
            </h3>

            <p className="text-slate-700 dark:text-slate-400 mb-6 leading-relaxed">
              I'm Abdul Waris Hesham, a dedicated frontend developer with a passion for creating beautiful, 
              responsive, and user-friendly web applications. With expertise in React, modern JavaScript, 
              and cutting-edge CSS frameworks, I transform ideas into stunning digital experiences.
            </p>

            <p className="text-slate-700 dark:text-slate-400 mb-8 leading-relaxed">
              My journey in web development started 3+ years ago, and since then, I've worked on diverse 
              projects ranging from simple landing pages to complex web applications. I believe in writing 
              clean, maintainable code and staying up-to-date with the latest industry trends.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700/50"
                >
                  <stat.icon className="text-3xl text-primary-700 dark:text-primary-400 mb-2" />
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* <div className="flex justify-center sm:justify-start">
              <a 
                href={personalInfo.resumeUrl} 
                download="/public/cv/Waris.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaDownload /> Download Resume
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

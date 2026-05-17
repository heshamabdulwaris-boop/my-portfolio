import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const TimelineItem = ({ experience, index, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-start gap-0 md:gap-8 mt-8">
        {/* Left side content (for even items) or empty space */}
        <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
          {isLeft && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 ml-auto max-w-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl text-white shrink-0">
                  {experience.type === 'work' ? <FaBriefcase className="text-xl" /> : <FaGraduationCap className="text-xl" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full">
                      {experience.date}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      experience.type === 'work' 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                    }`}>
                      {experience.type === 'internship' ? 'internship' : 'Education'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                    {experience.role}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {experience.company}
                  </p>
                  
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-primary-500 mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Timeline dot - centered on the line */}
        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-primary-500 shadow-lg flex items-center justify-center">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white">
              {experience.type === 'work' ? <FaBriefcase className="text-lg" /> : <FaGraduationCap className="text-lg" />}
            </div>
          </div>
        </div>

        {/* Right side content (for odd items) or mobile view */}
        <div className={`md:w-1/2 pl-20 md:pl-12 ${!isLeft ? 'md:order-1 md:pr-12' : 'md:pl-12'}`}>
          {/* Mobile card (visible only on small screens) */}
          <div className="md:hidden bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl text-white shrink-0">
                {experience.type === 'work' ? <FaBriefcase className="text-xl" /> : <FaGraduationCap className="text-xl" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full">
                    {experience.date}
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    experience.type === 'work' 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                  }`}>
                    {experience.type === 'work' ? 'Work' : 'Education'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                  {experience.role}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {experience.company}
                </p>
                
                <ul className="space-y-2">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-primary-500 mt-1.5 text-xs">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop card for odd items */}
          {!isLeft && (
            <div className="hidden md:block bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 max-w-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl text-white shrink-0">
                  {experience.type === 'work' ? <FaBriefcase className="text-xl" /> : <FaGraduationCap className="text-xl" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full">
                      {experience.date}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      experience.type === 'work' 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                    }`}>
                      {experience.type === 'work' ? 'Work' : 'Education'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                    {experience.role}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {experience.company}
                  </p>
                  
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-primary-500 mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;

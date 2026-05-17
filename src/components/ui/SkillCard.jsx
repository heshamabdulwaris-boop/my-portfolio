import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Create a mapping for specific icon imports
const iconMap = {
  // Simple Icons
  SiReact: () => import('react-icons/si').then(mod => mod.SiReact),
  SiJavascript: () => import('react-icons/si').then(mod => mod.SiJavascript),
  SiHtml5: () => import('react-icons/si').then(mod => mod.SiHtml5),
  SiTailwindcss: () => import('react-icons/si').then(mod => mod.SiTailwindcss),
  SiBootstrap: () => import('react-icons/si').then(mod => mod.SiBootstrap),
  SiGit: () => import('react-icons/si').then(mod => mod.SiGit),
  SiFigma: () => import('react-icons/si').then(mod => mod.SiFigma),
  SiWebpack: () => import('react-icons/si').then(mod => mod.SiWebpack),
  SiVite: () => import('react-icons/si').then(mod => mod.SiVite),
  SiGooglechrome: () => import('react-icons/si').then(mod => mod.SiGooglechrome),
  // Dev Icons
  DiCss3: () => import('react-icons/di').then(mod => mod.DiCss3),
  // VS Code Icons
  VscVscode: () => import('react-icons/vsc').then(mod => mod.VscVscode),
  // Font Awesome Icons
  FaLightbulb: () => import('react-icons/fa').then(mod => mod.FaLightbulb),
  FaComments: () => import('react-icons/fa').then(mod => mod.FaComments),
  FaUsers: () => import('react-icons/fa').then(mod => mod.FaUsers),
  FaClock: () => import('react-icons/fa').then(mod => mod.FaClock),
};

const SkillCard = ({ skill, index }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconLoader = iconMap[skill.icon];
        if (iconLoader) {
          const icon = await iconLoader();
          setIconComponent(() => icon);
        }
      } catch (error) {
        console.warn(`Failed to load icon: ${skill.icon}`);
      }
    };

    loadIcon();
  }, [skill.icon]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50"
    >
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="p-3 rounded-lg text-white flex items-center justify-center"
          style={{ backgroundColor: skill.color || '#06b6d4' }}
        >
          {IconComponent && <IconComponent className="text-2xl" />}
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
          {skill.name}
        </h3>
      </div>
      
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-2.5 rounded-full"
          style={{ backgroundColor: skill.color || '#06b6d4' }}
        />
      </div>
      
      <p className="text-sm text-slate-700 dark:text-slate-400 text-right">
        {skill.level}%
      </p>
    </motion.div>
  );
};

export default SkillCard;

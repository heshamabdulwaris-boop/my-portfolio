import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';
import MyImg from '../../assets/my picture/waris1.png';
import MyCv from '../../../public/cv/abdulwaris.pdf';
import Button from '../../components/ui/Button';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-20 bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-slate-800 dark:text-slate-300 mb-6 h-10"
          >
            <span className="font-semibold text-primary-700 dark:text-primary-400">{text}</span>
            <span className="animate-pulse text-primary-500">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-slate-700 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button onClick={() => scrollToSection('contact')}>
              Hire Me
            </Button>
            <a 
              href={MyCv} 
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-700 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transform hover:scale-105 transition-all duration-300 sm:justify-start"
            >
              <FaDownload /> Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-1 shadow-2xl"
            >
              <img src={MyImg} alt="Waris" className="w-full h-full rounded-full bg-white dark:bg-slate-800 object-cover flex items-center justify-center"/>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent-400/30 to-primary-400/30 rounded-full blur-xl animate-pulse animation-delay-1000" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-slate-700 dark:text-slate-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <FaChevronDown className="text-2xl animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

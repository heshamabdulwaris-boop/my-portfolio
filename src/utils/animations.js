// Lightweight animation utility to replace some framer-motion usage
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
};

// CSS-only animation classes for simple animations
export const cssAnimations = {
  fadeInUp: 'animate-fadeInUp',
  fadeInLeft: 'animate-fadeInLeft', 
  fadeInRight: 'animate-fadeInRight',
  scaleIn: 'animate-scaleIn',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce'
};

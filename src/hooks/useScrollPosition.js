import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      const position = window.pageYOffset;
      const windowHeight = window.document.documentElement.scrollHeight - window.innerHeight;
      const percentage = windowHeight > 0 ? (position / windowHeight) * 100 : 0;
      
      setScrollPosition(position);
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return { scrollPosition, scrollPercentage };
};

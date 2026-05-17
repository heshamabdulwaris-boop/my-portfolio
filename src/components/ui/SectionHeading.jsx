import { useEffect, useRef } from 'react';

const SectionHeading = ({ title, subtitle }) => {
  const headingRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            if (lineRef.current) {
              setTimeout(() => {
                lineRef.current.style.width = '100px';
                lineRef.current.style.transition = 'width 0.8s ease-out';
              }, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={headingRef} className="text-center mb-16 opacity-0">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-700 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div 
        ref={lineRef}
        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6 rounded-full"
        style={{ width: 0 }}
      />
    </div>
  );
};

export default SectionHeading;

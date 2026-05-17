import { useScrollPosition } from '../../hooks/useScrollPosition';

const ScrollProgress = () => {
  const { scrollPercentage } = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-100"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

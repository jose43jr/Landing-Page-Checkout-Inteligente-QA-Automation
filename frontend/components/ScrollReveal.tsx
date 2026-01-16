
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slideUp' | 'slideIn';
  delay?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'slideUp', 
  delay = 0,
  duration = 800
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationStyles = () => {
    const base = {
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade': return { ...base, opacity: 0 };
        case 'slideUp': return { ...base, opacity: 0, transform: 'translateY(40px)' };
        case 'slideIn': return { ...base, opacity: 0, transform: 'translateX(-40px)' };
        default: return { ...base, opacity: 0 };
      }
    }

    return { ...base, opacity: 1, transform: 'translate(0, 0)' };
  };

  return (
    <div ref={ref} style={getAnimationStyles()}>
      {children}
    </div>
  );
};

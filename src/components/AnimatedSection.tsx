
import { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-in' | 'scale-in';
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className = '',
  id,
  delay = 0,
  animation = 'fade-in',
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [once]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
    >
      <div
        className={`transition duration-700 ease-out 
          ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
        style={{ 
          animationDelay: `${delay}ms`,
          animationFillMode: 'forwards'
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;

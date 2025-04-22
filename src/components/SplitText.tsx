import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0.05,
  threshold = 0.5,
  rootMargin = '50px',
  onLetterAnimationComplete
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView({ 
    root: null,
    threshold,
    rootMargin
  });

  useEffect(() => {
    if (isInView) {
      controls.start(i => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * delay,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }));
    }
  }, [isInView, controls, delay]);

  return (
    <span className={className} ref={ref}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          onAnimationComplete={i === text.length - 1 ? onLetterAnimationComplete : undefined}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
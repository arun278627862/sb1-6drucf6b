import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 5,
  blurStrength = 10
}) => {
  const ref = useRef(null);
  const isInView = useInView({
    root: null,
    threshold: 0.2,
    rootMargin: '-50px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: baseOpacity,
        y: 50,
        rotate: baseRotation,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
      }}
      animate={{
        opacity: isInView ? 1 : baseOpacity,
        y: isInView ? 0 : 50,
        rotate: isInView ? 0 : baseRotation,
        filter: isInView ? 'blur(0px)' : `blur(${blurStrength}px)`
      }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
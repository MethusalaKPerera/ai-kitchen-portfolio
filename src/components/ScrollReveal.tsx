import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
  duration?: number;
}
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  duration = 0.6
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10%'
  });
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: {
            opacity: 0,
            y: 40
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
      case 'down':
        return {
          hidden: {
            opacity: 0,
            y: -40
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
      case 'left':
        return {
          hidden: {
            opacity: 0,
            x: 40
          },
          visible: {
            opacity: 1,
            x: 0
          }
        };
      case 'right':
        return {
          hidden: {
            opacity: 0,
            x: -40
          },
          visible: {
            opacity: 1,
            x: 0
          }
        };
      case 'none':
        return {
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1
          }
        };
      default:
        return {
          hidden: {
            opacity: 0,
            y: 40
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
    }
  };
  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}>
      
      {children}
    </motion.div>);

}
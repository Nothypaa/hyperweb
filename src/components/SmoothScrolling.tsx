'use client'

import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis with cloud-like settings
    const lenis = new Lenis({
      duration: 1.2, // Floating duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      wheelMultiplier: 1, // Natural mouse wheel speed
      touchMultiplier: 2
    });

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;
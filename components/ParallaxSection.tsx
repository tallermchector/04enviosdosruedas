'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Speed multiplier, positive or negative
}

/**
 * A container that shifts its background or decorations relative to scroll position.
 */
export function ParallaxSection({ children, className = '', speed = 0.15 }: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Use a smooth spring to make the motion extremely gentle and luxurious
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 25,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], [`${-speed * 80}px`, `${speed * 80}px`]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Scroll-driven animated background glow container */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 pointer-events-none -z-10 select-none"
      >
        <div className="absolute top-10 left-10 w-72 h-72 bg-sunbeam-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-egyptian-blue/10 rounded-full blur-3xl" />
      </motion.div>
      {children}
    </div>
  );
}

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // positive = moves faster/same dir, negative = opposite dir
  axis?: 'y' | 'x';
}

/**
 * An element wrapper that moves independently of standard page scroll to create depth.
 */
export function ParallaxElement({ children, className = '', speed = 0.1, axis = 'y' }: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  const movement = useTransform(smoothProgress, [0, 1], [`${-speed * 120}px`, `${speed * 120}px`]);

  return (
    <motion.div 
      ref={elementRef}
      style={{ [axis]: movement }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

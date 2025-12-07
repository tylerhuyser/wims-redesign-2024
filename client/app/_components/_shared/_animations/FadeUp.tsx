'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react';

interface FadeUpSectionProps {
  children: ReactNode;
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  bottomMargin?: string;
}

export default function FadeUpSection({
  children,
  delay = 0,
  triggerOnce = true,
  threshold = 0.15,
  bottomMargin = '-150px',
}: FadeUpSectionProps) {
  return (
    <motion.div
      className="animationContainer"
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 2,
        ease: 'easeOut',
        delay
      }}
      viewport={{
        once: triggerOnce,
        amount: threshold,
        margin: `0px 0px ${bottomMargin} 0px`,
      }}
    >
      {children}
    </motion.div>
  )
}
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react';

interface FadeUpSectionProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeUpSection({ children, delay = 0 }: FadeUpSectionProps) {
  return (
    <motion.div
      className="contentContainer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.5 }} 
    >
      {children}
    </motion.div>
  )
}
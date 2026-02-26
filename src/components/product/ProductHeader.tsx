'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const ProductHeader = () => {
  return (
    <section className={styles.heroSectionLight}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '33%', height: '100%', backgroundColor: 'hsl(var(--primary) / 0.05)', transform: 'skewX(-12deg) translateX(5rem)' }} />
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: '48rem' }}
        >
          <h1 className={styles.heroTitleLight}>Product Center</h1>
          <p className={styles.heroSubtitleLight} style={{ marginLeft: 0 }}>
            We provide full-link digital dental products covering diagnosis, design, and production. Every product is rigorously clinically verified to provide dentists with the most efficient tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const ContactHeader = () => {
  return (
    <section className={styles.heroSectionLight}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '16rem', height: '16rem', border: '4px solid hsl(var(--primary))', borderRadius: '9999px' }} />
        <div style={{ position: 'absolute', bottom: '5rem', right: '5rem', width: '24rem', height: '24rem', border: '4px solid hsl(var(--primary))', borderRadius: '9999px' }} />
      </div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroTitleLight}
          >
            Contact <span className={styles.textPrimary}>HAIREY</span>
          </motion.h1>
          <p className={styles.heroSubtitleLight}>
            Whether for technical consultation, product ordering, or partnership inquiries, our expert team is ready to provide immediate response.
          </p>
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const IntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Placeholder Image */}
        <div className={styles.placeholderImageContainer}>
          <div className={styles.placeholderImage}>
            <span>Top Banner Placeholder</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.introContent}
        >
          <p className={styles.introTextCentered}>
            Premium, stable and affordable CAD/CAM solutions for universal dental health.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

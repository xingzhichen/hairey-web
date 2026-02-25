'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

export const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBg} />
      <div className={styles.ctaPattern} />
      
      <div className={`${styles.container} ${styles.ctaContent}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ maxWidth: '56rem', margin: '0 auto' }}
        >
          <h2 className={styles.ctaTitle}>
            Start Your Digital<br /><span className={styles.highlight}>Dental Lab</span> Journey
          </h2>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Consult an Expert Now
            </Link>
            <Link href="/product" className={styles.ctaSecondary}>
              Download Product Brochure
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

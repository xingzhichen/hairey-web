'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

export const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBg} />
      <div className={styles.ctaPattern} />

      <motion.div
        className={styles.ctaBlob1}
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className={styles.ctaBlob2}
        animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className={`${styles.container} ${styles.ctaContent}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={styles.ctaPanel}
        >
          <motion.h2
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Looking for a dental CAD/CAM manufacturing partner?
          </motion.h2>
          <motion.p
            className={styles.ctaDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            As a trusted manufacturer of zirconia and PMMA materials, Hairey supports OEM and private-label programs with consistent quality, flexible customization, and dependable production.
          </motion.p>
          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ duration: 0.3 }}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Talk to the Team <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: -1 }} transition={{ duration: 0.3 }}>
              <a
                href="/downloads/Hairey-Product-Brochure-2026.pdf"
                download
                className={styles.ctaSecondary}
              >
                Download Brochure <Download size={18} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

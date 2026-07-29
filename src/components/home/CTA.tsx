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
          <motion.span
            className={styles.sectionEyebrowLight}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Let’s talk about your next case flow
          </motion.span>
          <motion.h2
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Need a partner for your <span className={styles.highlight}>digital dental materials</span> pipeline?
          </motion.h2>
          <motion.p
            className={styles.ctaDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Share your market, product interest, or sampling need. We’ll help you find the right fit faster with a clearer response path.
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
                Consult an Expert <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: -1 }} transition={{ duration: 0.3 }}>
              <Link href="/product" className={styles.ctaSecondary}>
                Download Brochure <Download size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

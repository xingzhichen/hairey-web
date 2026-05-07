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
      
      {/* Decorative Elements */}
      <motion.div 
        className={styles.ctaBlob1}
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 8, 
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className={styles.ctaBlob2}
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ 
          duration: 10, 
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className={`${styles.container} ${styles.ctaContent}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: '56rem', margin: '0 auto' }}
        >
          <motion.h2 
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Start Your Digital<br />
            <motion.span 
              className={styles.highlight}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              animate={{ 
                textShadow: [
                  "0 0 10px hsl(var(--primary) / 0.5)",
                  "0 0 20px hsl(var(--primary) / 0.8)",
                  "0 0 10px hsl(var(--primary) / 0.5)"
                ]
              }}
            >
              Dental Lab
            </motion.span> Journey
          </motion.h2>
          <motion.div 
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ duration: 0.3 }}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Consult an Expert Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: -1 }} transition={{ duration: 0.3 }}>
              <Link href="/product" className={styles.ctaSecondary}>
                Download Product Brochure
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

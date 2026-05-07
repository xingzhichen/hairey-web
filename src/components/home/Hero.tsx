'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HomePage.module.css';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className={styles.heroSection}>
      <motion.div 
        style={{ y: yHero }} 
        className={styles.heroBackground}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className={styles.heroOverlay} />
        <Image 
          src="/images/new-banner.png" 
          alt="Dental Biotechnology"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
      </motion.div>
      
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className={styles.heroContent}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={styles.badge}
          >
            <span className={styles.badgeDotContainer}>
              <span className={styles.badgePing}></span>
              <span className={styles.badgeDot}></span>
            </span>
            <span>Next-Gen Dental Biotechnology</span>
          </motion.div>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Stable Performance <br />
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Predictable Results
            </motion.span>
          </motion.h1>
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Complete CAD/CAM material solutions engineered to provide dental labs with consistent shades, predictable outcomes, and dependable long-term performance.
          </motion.p>
          <motion.div 
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Link 
              href="/contact" 
              className={styles.primaryButton}
            >
              Ask sample <ArrowRight className={styles.iconRight} size={20} />
            </Link>
            <Link 
              href="/about" 
              className={styles.secondaryButton}
            >
              Know more
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        className={styles.floatingBlob1}
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
        className={styles.floatingBlob2}
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
    </section>
  );
};

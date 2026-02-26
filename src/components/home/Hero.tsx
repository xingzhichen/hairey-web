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
      <motion.div style={{ y: yHero }} className={styles.heroBackground}>
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
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className={styles.heroContent}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={styles.badge}
          >
            <span className={styles.badgeDotContainer}>
              <span className={styles.badgePing}></span>
              <span className={styles.badgeDot}></span>
            </span>
            <span>Next-Gen Dental Biotechnology</span>
          </motion.div>
          <h1 className={styles.heroTitle}>
            Stable Performance <br />
            <span className="text-gradient">Predictable Results</span>
          </h1>
          <p className={styles.heroDescription}>
            Complete CAD/CAM material solutions engineered to provide dental labs with consistent shades, predictable outcomes, and dependable long-term performance.
          </p>
          <div className={styles.buttonGroup}>
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
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className={styles.floatingBlob1} />
      <div className={styles.floatingBlob2} />
    </section>
  );
};

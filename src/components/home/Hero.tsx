'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HomePage.module.css";

const quickMetrics = [
  { value: "Reliable", label: "Smooth cutting, predictable results" },
  { value: "Trusted", label: "50+ countries served" },
  { value: "OEM / ODM", label: "Flexible collaboration model" },
];

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 180]);

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
        <div className={styles.heroLayout}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={styles.heroContent}
          >
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Reshape Your <br />
              <motion.span
                className="text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Smile
              </motion.span>
            </motion.h1>

            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              High-quality CAD/CAM materials engineered for dental labs and distributors, ensuring consistent, predictable performance.
            </motion.p>

            <motion.div
              className={styles.buttonGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Link href="#products" className={styles.secondaryButton}>
                Browse products
              </Link>
            </motion.div>

            <motion.div
              className={styles.heroMetricStrip}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {quickMetrics.map((item) => (
                <div key={item.value} className={styles.heroMetricItem}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.floatingBlob1}
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className={styles.floatingBlob2}
        animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
    </section>
  );
};

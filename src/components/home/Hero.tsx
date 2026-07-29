'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HomePage.module.css";

const heroHighlights = [
  "Stable shade consistency",
  "Reliable global delivery",
  "Digital workflow ready",
];

const heroStats = [
  { value: "10+", label: "Years of dental material focus" },
  { value: "4", label: "Core product families" },
  { value: "24h", label: "Fast response for sampling needs" },
];

const quickMetrics = [
  { value: "OEM / ODM", label: "Flexible collaboration model" },
  { value: "Export Ready", label: "Global distributor support" },
  { value: "Shade Stable", label: "Predictable restorative results" },
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
              Stable Materials for <br />
              <motion.span
                className="text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Predictable Smiles
              </motion.span>
            </motion.h1>

            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Complete CAD/CAM material solutions engineered for dental labs and distributors that care about shade consistency, efficient workflows, and dependable long-term performance.
            </motion.p>

            <motion.div
              className={styles.heroHighlights}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8 }}
            >
              {heroHighlights.map((item) => (
                <span key={item} className={styles.heroHighlightItem}>
                  <BadgeCheck size={16} />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className={styles.buttonGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Link href="/contact" className={styles.primaryButton}>
                Ask sample <ArrowRight className={styles.iconRight} size={20} />
              </Link>
              <Link href="/product" className={styles.secondaryButton}>
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
                <div key={item.label} className={styles.heroMetricItem}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            className={styles.heroPanel}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.heroPanelHeader}>
              <span className={styles.heroPanelEyebrow}>Why labs choose Hairey</span>
              <Sparkles size={18} />
            </div>
            <div className={styles.heroStatList}>
              {heroStats.map((item) => (
                <div key={item.label} className={styles.heroStatCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.heroPanelDivider}></div>
            <div className={styles.heroPanelFooter}>
              <span className={styles.heroPanelTag}>Zirconia</span>
              <span className={styles.heroPanelTag}>Disilicate</span>
              <span className={styles.heroPanelTag}>PMMA</span>
              <span className={styles.heroPanelTag}>Burs</span>
            </div>
          </motion.aside>
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

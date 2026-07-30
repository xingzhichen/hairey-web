'use client';

import React from 'react';
import { Activity, Shield, Zap, Microscope, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import styles from './HomePage.module.css';

const trustItems = [
  {
    icon: Microscope,
    title: 'Powerful R&D',
    desc: 'More than a decade of technical focus helps translate material science into dependable daily performance.',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Zap,
    title: 'Stable Supply',
    desc: 'Structured production and inventory planning support consistent quality and timely global fulfillment.',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Shield,
    title: 'Global Standards',
    desc: 'Quality control is designed to align with international expectations for modern dental material delivery.',
    color: 'hsl(217, 91%, 60%)',
  },
  {
    icon: Activity,
    title: 'Workflow Optimized',
    desc: 'Each product line is tuned for smoother milling, finishing, and shade management in real lab scenarios.',
    color: 'hsl(158, 64%, 52%)',
  },
];

export const Trust = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className={styles.trustSection}>
      <div className={styles.container}>
        <div className={styles.trustIntro}>
          <div className={styles.sectionHeadingCompact}>
            <h2 className={styles.sectionTitle}>Built to feel reliable at every stage of the workflow</h2>
            <p className={styles.sectionDesc}>
              We focus on the details labs care about most: material stability, delivery confidence, and repeatable restorative outcomes.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={styles.grid}
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              className={styles.card}
            >
              <motion.div
                className={styles.iconBox}
                style={{ color: item.color }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  backgroundColor: item.color,
                  color: 'white',
                }}
                transition={{ duration: 0.3 }}
              >
                <item.icon size={32} />
              </motion.div>
              <motion.h3 className={styles.cardTitle}>{item.title}</motion.h3>
              <motion.p className={styles.cardDesc}>{item.desc}</motion.p>
              <motion.div className={styles.cardLink} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                Learn More <ChevronRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

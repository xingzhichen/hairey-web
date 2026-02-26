'use client';

import React from 'react';
import { Activity, Shield, Zap, Microscope, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import styles from './HomePage.module.css';

export const Trust = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={styles.trustSection}>
      <div className={styles.container}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.grid}
        >
          {[
            { icon: Microscope, title: 'Powerful R&D', desc: 'Over a decade of innovation ensures industry-leading product performance.', color: 'hsl(var(--primary))' },
            { icon: Zap, title: 'Stable Supply', desc: 'Reliable production and inventory for consistent quality and timely delivery.', color: 'hsl(var(--accent))' },
            { icon: Shield, title: 'Global Standards', desc: 'Strict quality control aligned with international dental regulations.', color: 'hsl(217, 91%, 60%)' },
            { icon: Activity, title: 'Clinically Optimized', desc: 'Refined based on lab workflow and real clinical feedback.', color: 'hsl(158, 64%, 52%)' },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={styles.card}
            >
              <div className={styles.iconBox} style={{ color: item.color }}>
                <item.icon size={32} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <div className={styles.cardLink}>
                Learn More <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

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
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className={styles.card}
            >
              <motion.div 
                className={styles.iconBox}
                style={{ color: item.color }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  backgroundColor: item.color,
                  color: 'white'
                }}
                transition={{ duration: 0.3 }}
              >
                <item.icon size={32} />
              </motion.div>
              <motion.h3 
                className={styles.cardTitle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className={styles.cardDesc}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {item.desc}
              </motion.p>
              <motion.div 
                className={styles.cardLink}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Learn More <ChevronRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

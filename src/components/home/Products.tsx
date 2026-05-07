'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

export const Products = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle} 
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our product
        </motion.h2>
        <div className={styles.productGrid}>
          {[
            { title: 'Zirconia block' },
            { title: 'Disilicate product' },
            { title: 'PMMA' },
            { title: 'Milling Bur' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                y: -10, 
                scale: 1.02, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className={styles.productCard}
            >
              <motion.h3 
                className={styles.productTitle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
              <motion.div 
                className={styles.productImageWrapper}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={`https://placehold.co/400x300/png?text=${encodeURIComponent(item.title)}`} 
                  alt={item.title}
                  fill
                  className={styles.productImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </motion.div>
              <motion.div 
                className={styles.productHoverContent}
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.viewDetails}>View Details</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

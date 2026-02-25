'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

export const Products = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: '3rem' }}>Our product</h2>
        <div className={styles.productGrid}>
          {[
            { title: 'Zirconia block' },
            { title: 'Disilicate product' },
            { title: 'PMMA' },
            { title: 'Milling Bur' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.productCard}
            >
              <h3 className={styles.productTitle}>{item.title}</h3>
              <div className={styles.productImageWrapper}>
                <Image 
                  src={`https://placehold.co/400x300/png?text=${encodeURIComponent(item.title)}`} 
                  alt={item.title}
                  fill
                  className={styles.productImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

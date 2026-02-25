'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const ProductHeader = () => {
  return (
    <section className={styles.heroSectionLight}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '33%', height: '100%', backgroundColor: 'hsl(var(--primary) / 0.05)', transform: 'skewX(-12deg) translateX(5rem)' }} />
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: '48rem' }}
        >
          <h1 className={styles.heroTitleLight}>产品中心</h1>
          <p className={styles.heroSubtitleLight} style={{ marginLeft: 0 }}>
            我们提供覆盖从诊断、设计到生产的全链路数字化牙科产品。每一件产品都经过严格的临床验证，旨在为牙科医生提供最高效的工具。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

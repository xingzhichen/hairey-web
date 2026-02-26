'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Pages.module.css';

export const GlobalReach = () => {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.mapContainer}
        >
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Global Reach
          </h2>
          <div className={styles.imageWrapper}>
            <Image
              src={`/images/about-us/${encodeURIComponent('世界地图.jpg')}`}
              alt="Hairey Global Map"
              width={1200}
              height={600}
              className={styles.roundedImage}
              style={{ width: '100%', height: 'auto' }}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

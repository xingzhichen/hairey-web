'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Pages.module.css';

export const Values = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Values</h2>
          
          <div className={styles.introText} style={{ marginBottom: '3rem' }}>
            <p>
              Hairey was founded in 2015. For nearly a decade, we have been dedicated to the R&D, production and quality control of high-standard CAD/CAM dental consumables. We uphold strict quality management systems and operate in full compliance with international medical device regulations. Every product is manufactured under standardized processes to ensure safety, precision and long-term performance.
            </p>
            
            <p className={styles.listTitle}>Our core product line includes:</p>
            <ul className={styles.introList}>
              <li>Premium zirconia blocks with excellent strength and aesthetic results</li>
              <li>Lithium disilicate products for natural, lifelike dental restorations</li>
              <li>Medical-grade PMMA materials for temporary and clinical applications</li>
              <li>High-precision milling burs compatible with all major CAD/CAM systems</li>
            </ul>
            
            <p>
              With professional technology, stable supply chain and customer-oriented service, Hairey is committed to becoming a trusted global partner in the dental industry.
            </p>
          </div>

          <div className={styles.imageWrapper} style={{ marginTop: '2rem' }}>
             <Image
              src={`/images/about-us/${encodeURIComponent('公司价值观.png')}`}
              alt="Hairey Values"
              width={1200}
              height={400}
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

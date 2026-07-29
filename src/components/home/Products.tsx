'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

const productItems = [
  {
    title: 'Zirconia Blocks',
    desc: 'High-strength solutions for esthetic restorations with balanced translucency and reliable milling performance.',
    tone: 'ocean',
    tags: ['Multi-layer', 'High strength', 'Natural shade'],
  },
  {
    title: 'Disilicate Materials',
    desc: 'Refined for lifelike translucency, smooth finishing, and consistent shade matching across restorative cases.',
    tone: 'amber',
    tags: ['Esthetic', 'Translucent', 'Chairside ready'],
  },
  {
    title: 'PMMA Solutions',
    desc: 'Clean-cut temporary restoration materials built for fast digital workflows and stable manufacturing results.',
    tone: 'mint',
    tags: ['Temporary', 'Stable milling', 'Workflow friendly'],
  },
  {
    title: 'Milling Burs',
    desc: 'Precision tooling designed to support smoother cutting, longer service life, and dependable productivity.',
    tone: 'violet',
    tags: ['Precise', 'Durable', 'Efficient output'],
  },
];

export const Products = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <motion.span
            className={styles.sectionEyebrow}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Product matrix
          </motion.span>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Material solutions built for modern digital labs
          </motion.h2>
          <motion.p
            className={styles.sectionDesc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From core restorative materials to precision tooling, Hairey helps teams deliver efficient workflows and more predictable clinical outcomes.
          </motion.p>
        </div>

        <div className={styles.productGrid}>
          {productItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -10 }}
              className={styles.productCard}
            >
              <div className={`${styles.productVisual} ${styles[`tone_${item.tone}`]}`}>
                <span className={styles.productOrb}></span>
                <span className={styles.productGridPattern}></span>
              </div>
              <div className={styles.productCardBody}>
                <h3 className={styles.productTitle}>{item.title}</h3>
                <p className={styles.productDesc}>{item.desc}</p>
                <div className={styles.productTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.productTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link href="/product" className={styles.productLink}>
                View Details <ArrowUpRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

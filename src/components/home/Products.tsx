'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

const productItems = [
  {
    title: 'ZircoFuse™ Zirconia',
    desc: 'Hairey’s exclusive ZircoFuse™ Technology fuses proprietary 4Y-TZP and 5Y-TZP zirconia powders via colloidal processing for precise color and exceptional strength.',
    image: '/images/zirconia.png',
    href: '/product/zirconia',
    imageFit: 'cover' as const,
  },
  {
    title: 'PMMA',
    desc: 'Hairey multi-color resin adopts a unique layered design for temporary crowns and bridges, supporting efficient digital workflows and natural-looking results.',
    image: '/images/pmma.png',
    href: '/product/pmma',
    imageFit: 'contain' as const,
  },
  {
    title: 'Press',
    desc: 'Hairey Press delivers superior translucency, precise color reproduction, natural mimicry, excellent biocompatibility, and favorable bondability.',
    image: '/images/Press.png',
    href: '/product/press',
    imageFit: 'contain' as const,
  },
];

export const Products = () => {
  return (
    <section id="products" className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hairey Products
          </motion.h2>
          <motion.p
            className={styles.sectionDesc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From restorative materials to precision tooling, Hairey helps dental labs streamline workflows and achieve consistent, predictable restorations.
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
              <div className={styles.productVisual}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.productImage}
                  style={{ objectFit: item.imageFit }}
                  sizes="(max-width: 767px) 100vw, 42vw"
                />
              </div>
              <div className={styles.productCardBody}>
                <h3 className={styles.productTitle}>{item.title}</h3>
                <p className={styles.productDesc}>{item.desc}</p>
                <Link href={item.href} className={styles.productLink}>
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Pages.module.css';

export const ProductList = () => {
  const products = [
    {
      category: 'Biomaterials',
      title: 'ZircoFuse™ Zirconia',
      desc: 'Hairey’s exclusive ZircoFuse™ Technology fuses proprietary 4Y-TZP and 5Y-TZP zirconia powders via colloidal processing, … ',
      image: '/images/zirconia.png',
      href: '/product/zirconia',
      featured: true,
      imageFit: 'cover' as const,
      imagePosition: 'center'
    },
    {
      category: 'Biomaterials',
      title: 'PMMA',
      desc: 'Hairey multi-color resin adopts a unique layered design, which can not only be used for the production of temporary crowns and bridges, but also can be used to carve…',
      image: '/images/pmma.png',
      imageFit: 'contain' as const,
      imagePosition: 'center'
    },
    {
      category: 'Biomaterials',
      title: 'Press',
      desc: 'Hairey Press boasts superior translucency, precise color reproduction, high natural mimicry, excellent biocompatibility and favorable bondability…',
      image: '/images/Press.png',
      imageFit: 'contain' as const,
      imagePosition: 'center'
    },
    {
      category: 'Biomaterials',
      title: 'Glass Ceramic Blocks',
      desc: 'Hairey ceramic blocks deliver life-like translucency and precision color matching for all-ceramic restorations…',
      image: '/images/Glass.png',
      imageFit: 'contain' as const,
      imagePosition: 'center'
    },
    {
      category: 'Biomaterials',
      title: 'Milling Burs',
      desc: 'Our tungsten carbide milling burs, compatible with mainstream CAD/CAM machines or systems, are good choices for trimming zirconia, porcelain, PMMA,…',
      image: '/images/milling-burs-top-left.png',
      imageFit: 'contain' as const,
      imagePosition: 'center'
    }
  ];

  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.productIntro}>
          <span className={styles.sectionKicker}>Biomaterials</span>
          <h2 className={styles.sectionTitle}>Precision materials for digital dental production</h2>
          <p className={styles.sectionDesc}>
            From zirconia to milling burs, Hairey materials are selected for stable performance, natural aesthetics, and efficient chairside or laboratory workflows.
          </p>
        </div>

        <div className={styles.productShowcase}>
          {products.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${styles.productCard} ${item.featured ? styles.productCardFeatured : ''}`}
            >
              <div className={styles.productImage}>
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  style={{ objectFit: item.imageFit, objectPosition: item.imagePosition }}
                  sizes={item.featured ? '(max-width: 1024px) 100vw, 58vw' : '(max-width: 1024px) 100vw, 36vw'}
                />
              </div>
              <div className={styles.productContent}>
                <div>
                  <div className={styles.categoryTag}>{item.category}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
                {item.href ? (
                  <Link href={item.href} className={styles.productAction}>
                    View <ArrowRight size={18} />
                  </Link>
                ) : (
                  <button className={styles.productAction}>
                    View <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { Microscope, Activity, Cog, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Pages.module.css';

export const ProductList = () => {
  const products = [
    {
      category: 'Biomaterials',
      title: 'Hairey-Resin Gen 4',
      desc: 'Fourth-generation photosensitive resin designed for digital dentures, featuring excellent biocompatibility and hardness.',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1583912267550-d44d7a125e7e?q=80&w=2070&auto=format&fit=crop',
      colors: { bg: '#ecfdf5', text: '#059669' }
    },
    {
      category: 'Hardware',
      title: 'PrecisionScan X1',
      desc: 'Micron-level precision intraoral scanner enabling instant 3D modeling and seamless cloud design platform integration.',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop',
      colors: { bg: '#eff6ff', text: '#2563eb' }
    },
    {
      category: 'Software',
      title: 'HaireyOS Cloud',
      desc: 'AI-assisted restoration design system reducing design time from hours to minutes.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop',
      colors: { bg: '#faf5ff', text: '#9333ea' }
    },
    {
      category: 'Milling',
      title: 'AuraMill 5-Axis',
      desc: 'High-precision 5-axis milling center supporting multi-material processing including full zirconia and veneers.',
      icon: Cog,
      image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop',
      colors: { bg: '#fffbeb', text: '#d97706' }
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid2} style={{ gap: '4rem' }}>
          {products.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={styles.productCard}
            >
              <div className={styles.productImage} style={{ position: 'relative', overflow: 'hidden' }}>
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)' }} />
              </div>
              <div className={styles.productContent}>
                <div>
                  <div 
                    className={styles.categoryTag} 
                    style={{ backgroundColor: item.colors.bg, color: item.colors.text }}
                  >
                    {item.category}
                  </div>
                  <h3 className={styles.cardTitle} style={{ fontSize: '1.875rem', marginBottom: '1rem' }}>{item.title}</h3>
                  <p className={styles.cardDesc} style={{ marginBottom: '2rem' }}>{item.desc}</p>
                </div>
                <button style={{ display: 'flex', alignItems: 'center', fontWeight: 700, color: 'hsl(var(--secondary))', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  View Specs <ArrowRight size={20} style={{ marginLeft: '0.5rem', color: 'hsl(var(--primary))' }} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

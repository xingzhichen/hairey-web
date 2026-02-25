'use client';

import React from 'react';
import { Microscope, Activity, Cog, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Pages.module.css';

export const ProductList = () => {
  const products = [
    {
      category: '生物材料',
      title: 'Hairey-Resin Gen 4',
      desc: '专为数字化义齿设计的第四代光敏树脂，具有卓越的生物相容性和硬度。',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1583912267550-d44d7a125e7e?q=80&w=2070&auto=format&fit=crop',
      colors: { bg: '#ecfdf5', text: '#059669' }
    },
    {
      category: '硬件设备',
      title: 'PrecisionScan X1',
      desc: '微米级精度的口内扫描仪，实现瞬时 3D 建模，无缝对接云端设计平台。',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop',
      colors: { bg: '#eff6ff', text: '#2563eb' }
    },
    {
      category: '软件系统',
      title: 'HaireyOS Cloud',
      desc: 'AI 辅助修复设计系统，将设计时间从几小时缩短至几分钟。',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop',
      colors: { bg: '#faf5ff', text: '#9333ea' }
    },
    {
      category: '铣削加工',
      title: 'AuraMill 5-Axis',
      desc: '高精度五轴联动铣削中心，支持全锆、瓷贴面等多材料加工。',
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
                  查看技术参数 <ArrowRight size={20} style={{ marginLeft: '0.5rem', color: 'hsl(var(--primary))' }} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

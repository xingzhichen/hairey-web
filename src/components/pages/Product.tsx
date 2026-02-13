'use client';

/**
 * Product page showcasing Hairey's dental products.
 */
import React from 'react';
import { Microscope, Activity, Cog, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const Product = () => {
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
    <div className={styles.pageContainer}>
      {/* Page Header */}
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

      {/* Product List */}
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
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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

      {/* Innovation Banner */}
      <section style={{ paddingBottom: '8rem' }}>
        <div className={styles.container}>
          <div style={{ background: 'var(--gradient-tech)', borderRadius: '3rem', padding: '4rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '24rem', height: '24rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '9999px', filter: 'blur(64px)', transform: 'translate(5rem, -5rem)' }} />
            <div style={{ position: 'relative', zIndex: 10, maxWidth: '42rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>正在寻找定制化解决方案？</h2>
              <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem' }}>
                我们的 OEM/ODM 团队可以根据您的特定临床需求，定制高性能材料与软件接口。
              </p>
              <button style={{ backgroundColor: 'white', color: 'hsl(var(--primary))', padding: '1.25rem 2.5rem', borderRadius: '9999px', fontWeight: 900, fontSize: '1.125rem', border: 'none', cursor: 'pointer' }}>
                咨询合作机会
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

'use client';

/**
 * About Us page component describing company history and mission.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, Award, ChevronRight } from 'lucide-react';
import styles from '@/styles/Pages.module.css';

export const About = () => {
  const stats = [
    { label: '成立年份', value: '2015', icon: Globe },
    { label: '专利技术', value: '45+', icon: Award },
    { label: '合作诊所', value: '2,000+', icon: Users },
    { label: '研发占比', value: '35%', icon: Target },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgOverlay}>
          <img 
            src="https://images.unsplash.com/photo-1532187878403-219d9327042f?q=80&w=2070&auto=format&fit=crop" 
            className={styles.heroBgImage}
            alt="Scientific background"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.heroTitle}
            >
              关于 <span className={styles.textPrimary}>HAIREY</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={styles.heroSubtitle}
            >
              我们致力于打破生物科学与数字技术的边界，为牙科行业提供最具创新力的材料与系统解决方案。
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <h2 className={styles.sectionTitle}>我们的使命</h2>
              <p className={styles.sectionDesc}>
                在 Hairey，我们相信每位患者都值得拥有更精准、更快速、更美观的牙科修复。我们的团队由顶尖的生物工程师、牙科专家和软件开发人员组成，共同探索口腔健康的未来。
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {stats.map((item, i) => (
                  <div key={i} className={styles.statCard}>
                    <item.icon className={styles.textPrimary} size={24} style={{ marginBottom: '1rem' }} />
                    <div className={styles.statValue}>{item.value}</div>
                    <div className={styles.statLabel}>{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.relative}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Lab"
                className={styles.roundedImage}
              />
              <div className={styles.absoluteBg} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className={styles.sectionTitle}>我们的核心价值观</h2>
          <div style={{ width: '6rem', height: '0.25rem', backgroundColor: 'hsl(var(--primary))', margin: '1.5rem auto' }} />
        </div>
        <div className={styles.container}>
          <div className={styles.grid3}>
            {[
              { t: '极度精密', d: '对每一微米的执着，确保临床适配的完美。' },
              { t: '持续创新', d: '每年将收入的 35% 投入研发，探索未知领域。' },
              { t: '以人为本', d: '提升医生的效率，减轻患者的病痛感。' }
            ].map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={styles.card}
              >
                <div style={{ color: 'hsl(var(--primary))', fontWeight: 900, fontSize: '2.25rem', marginBottom: '1.5rem' }}>0{i+1}</div>
                <h3 className={styles.cardTitle}>{v.t}</h3>
                <p className={styles.cardDesc}>{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

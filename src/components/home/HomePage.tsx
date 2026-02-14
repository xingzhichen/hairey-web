'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Shield, Zap, Microscope, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div style={{ y: yHero }} className={styles.heroBackground}>
          <div className={styles.heroOverlay} />
          <Image 
            src="/images/new-banner.png" 
            alt="Dental Biotechnology"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
          />
        </motion.div>
        
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className={styles.heroContent}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={styles.badge}
            >
              <span className={styles.badgeDotContainer}>
                <span className={styles.badgePing}></span>
                <span className={styles.badgeDot}></span>
              </span>
              <span>Next-Gen Dental Biotechnology</span>
            </motion.div>
            <h1 className={styles.heroTitle}>
              We Design <br />
              <span className="text-gradient">Precision</span> <br />
              Dentistry
            </h1>
            <p className={styles.heroDescription}>
              Hairey 正在重新定义牙科数字化工作流。通过合成材料与精密工程的结合，我们为全球诊所提供高性能的数字化修复解决方案。
            </p>
            <div className={styles.buttonGroup}>
              <Link 
                href="/product" 
                className={styles.primaryButton}
              >
                开始探索 <ArrowRight className={styles.iconRight} size={20} />
              </Link>
              <Link 
                href="/about" 
                className={styles.secondaryButton}
              >
                了解我们的使命
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <div className={styles.floatingBlob1} />
        <div className={styles.floatingBlob2} />
      </section>

      {/* Trust & Stats Section */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.grid}
          >
            {[
              { icon: Microscope, title: '精密研发', desc: '基于分子生物学的牙科材料创新。', color: 'hsl(var(--primary))' },
              { icon: Zap, title: '极速交付', desc: '全数字化流程，缩短 50% 的诊疗周期。', color: 'hsl(var(--accent))' },
              { icon: Shield, title: '国际认证', desc: '符合最高标准的医疗器械安全验证。', color: 'hsl(217, 91%, 60%)' }, // blue-500
              { icon: Activity, title: '临床优化', desc: '专为提升患者舒适度与长期稳固性而设计。', color: 'hsl(158, 64%, 52%)' }, // emerald-500
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={styles.card}
              >
                <div className={styles.iconBox} style={{ color: item.color }}>
                  <item.icon size={32} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardLink}>
                  了解更多 <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Innovation Section */}
      <section className={styles.innovationSection}>
        <div className={styles.container}>
          <div className={styles.flexRow}>
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${styles.halfWidth} ${styles.relativeContainer}`}
            >
              <div className={styles.glowEffect} />
              <Image 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Dentistry"
                className={styles.featureImage}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className={styles.statCard}>
                <div className={styles.statNumber}>99.9%</div>
                <div className={styles.statLabel}>修复成功率</div>
                <div className={styles.statDesc}>基于全球 50,000+ 临床案例追踪。</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={styles.halfWidth}
            >
              <h2 className={styles.sectionTitle}>赋予牙科科学<br />无限可能</h2>
              <p className={styles.sectionDesc} style={{ margin: '2.5rem 0' }}>
                Hairey 不仅仅是一家材料供应商，我们是数字化转型的合伙人。我们通过专有的生物合成技术，开发出具有自然美学与极高耐磨性的新型材料。
              </p>
              
              <div className={styles.featureList}>
                {[
                  { t: '数字化扫描集成', d: '无缝对接主流口内扫描设备。' },
                  { t: '生物活性修复体', d: '促进软组织整合，减少炎症风险。' },
                  { t: '云端协同设计', d: '全球顶级牙技师实时在线协作。' }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className={styles.featureItem}
                  >
                    <div className={styles.featureIcon}>
                      <ChevronRight size={14} className="text-white" style={{ color: 'white' }} />
                    </div>
                    <div>
                      <h4 className={styles.featureTitle}>{feature.t}</h4>
                      <p className={styles.featureText}>{feature.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/service" className={styles.linkButton} style={{ marginTop: '2.5rem' }}>
                探索我们的服务流程 <ArrowRight className={styles.iconRight} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <div className={styles.ctaPattern} />
        
        <div className={`${styles.container} ${styles.ctaContent}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '56rem', margin: '0 auto' }}
          >
            <h2 className={styles.ctaTitle}>
              开启您的数字化<br /><span className={styles.highlight}>牙科实验室</span>之旅
            </h2>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                立即咨询专家
              </Link>
              <Link href="/product" className={styles.ctaSecondary}>
                产品手册下载
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

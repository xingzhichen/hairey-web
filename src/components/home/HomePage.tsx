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
              Hairey is redefining dental digital workflows. Through advanced synthetic materials and precision engineering, we deliver high-performance digital restoration solutions to clinics worldwide.
            </p>
            <div className={styles.buttonGroup}>
              <Link 
                href="/product" 
                className={styles.primaryButton}
              >
                Explore Now <ArrowRight className={styles.iconRight} size={20} />
              </Link>
              <Link 
                href="/about" 
                className={styles.secondaryButton}
              >
                Our Mission
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
              { icon: Microscope, title: 'Precision R&D', desc: 'Dental material innovation based on molecular biology.', color: 'hsl(var(--primary))' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Full digital workflow reduces treatment time by 50%.', color: 'hsl(var(--accent))' },
              { icon: Shield, title: 'International Certification', desc: 'Meeting the highest standards for medical device safety.', color: 'hsl(217, 91%, 60%)' },
              { icon: Activity, title: 'Clinical Optimization', desc: 'Designed for superior patient comfort and long-term stability.', color: 'hsl(158, 64%, 52%)' },
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
                  Learn More <ChevronRight size={16} />
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
                <div className={styles.statLabel}>Restoration Success Rate</div>
                <div className={styles.statDesc}>Based on 50,000+ global clinical cases tracked.</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={styles.halfWidth}
            >
              <h2 className={styles.sectionTitle}>Powering Dental<br />Science Forward</h2>
              <p className={styles.sectionDesc} style={{ margin: '2.5rem 0' }}>
                Hairey is more than a material supplier—we are your digital transformation partner. Through proprietary biosynthetic technology, we develop new materials with natural aesthetics and exceptional wear resistance.
              </p>
              
              <div className={styles.featureList}>
                {[
                  { t: 'Digital Scan Integration', d: 'Seamless integration with major intraoral scanners.' },
                  { t: 'Bioactive Restorations', d: 'Promotes soft tissue integration, reduces inflammation risk.' },
                  { t: 'Cloud Collaborative Design', d: 'Real-time collaboration with top dental technicians worldwide.' }
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
                Explore Our Service Flow <ArrowRight className={styles.iconRight} style={{ marginLeft: '0.5rem' }} />
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
              Start Your Digital<br /><span className={styles.highlight}>Dental Lab</span> Journey
            </h2>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Consult an Expert Now
              </Link>
              <Link href="/product" className={styles.ctaSecondary}>
                Download Product Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

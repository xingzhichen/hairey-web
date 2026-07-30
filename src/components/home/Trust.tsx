import React from 'react';
import { Activity, Shield, Zap, Microscope, ChevronRight } from 'lucide-react';
import styles from './HomePage.module.css';

const trustItems = [
  {
    icon: Microscope,
    title: 'Powerful R&D',
    desc: 'More than a decade of technical focus helps translate material science into dependable daily performance.',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Zap,
    title: 'Stable Supply',
    desc: 'Structured production and inventory planning support consistent quality and timely global fulfillment.',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Shield,
    title: 'Global Standards',
    desc: 'Quality control is designed to align with international expectations for modern dental material delivery.',
    color: 'hsl(217, 91%, 60%)',
  },
  {
    icon: Activity,
    title: 'Workflow Optimized',
    desc: 'Each product line is tuned for smoother milling, finishing, and shade management in real lab scenarios.',
    color: 'hsl(158, 64%, 52%)',
  },
];

export const Trust = () => {
  return (
    <section className={styles.trustSection}>
      <div className={styles.container}>
        <div className={styles.trustIntro}>
          <div className={styles.sectionHeadingCompact}>
            <h2 className={styles.sectionTitle}>Built to feel reliable at every stage of the workflow</h2>
            <p className={styles.sectionDesc}>
              We focus on the details labs care about most: material stability, delivery confidence, and repeatable restorative outcomes.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {trustItems.map((item) => (
            <div
              key={item.title}
              className={styles.card}
              style={{ '--card-accent': item.color } as React.CSSProperties}
            >
              <div className={styles.iconBox}>
                <item.icon size={32} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <div className={styles.cardLink}>
                Learn More <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

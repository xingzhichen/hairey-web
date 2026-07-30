import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import styles from './HomePage.module.css';

export const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBg} />
      <div className={styles.ctaPattern} />

      <div className={styles.ctaBlob1} />
      <div className={styles.ctaBlob2} />

      <div className={`${styles.container} ${styles.ctaContent}`}>
        <div className={styles.ctaPanel}>
          <h2 className={styles.ctaTitle}>
            Looking for a dental CAD/CAM manufacturing partner?
          </h2>
          <p className={styles.ctaDescription}>
            As a trusted manufacturer of zirconia and PMMA materials, Hairey supports OEM and private-label programs with consistent quality, flexible customization, and dependable production.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Talk to the Team <ArrowRight size={18} />
            </Link>
            <a
              href="/downloads/Hairey-Product-Brochure-2026.pdf"
              download
              className={styles.ctaSecondary}
            >
              Download Brochure <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

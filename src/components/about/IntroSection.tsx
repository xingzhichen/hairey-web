import React from 'react';
import styles from '@/styles/Pages.module.css';

export const IntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Placeholder Image */}
        <div className={styles.placeholderImageContainer}>
          <div className={styles.placeholderImage}>
            <span>Top Banner Placeholder</span>
          </div>
        </div>

        <div className={styles.introContent}>
          <p className={styles.introTextCentered}>
            Premium, stable and affordable CAD/CAM solutions for universal dental health.
          </p>
        </div>
      </div>
    </section>
  );
};

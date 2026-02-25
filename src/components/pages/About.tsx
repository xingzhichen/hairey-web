import React from 'react';
import styles from '@/styles/Pages.module.css';
import { IntroSection } from '../about/IntroSection';
import { GlobalReach } from '../about/GlobalReach';
import { Values } from '../about/Values';

export const About = () => {
  return (
    <div className={styles.pageContainer}>
      <IntroSection />
      <GlobalReach />
      <Values />
    </div>
  );
};

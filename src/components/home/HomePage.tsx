import React from 'react';
import styles from './HomePage.module.css';
import { Hero } from './Hero';
import { Products } from './Products';
import { Trust } from './Trust';
import { CTA } from './CTA';

export const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <Hero />
      <Products />
      <Trust />
      <CTA />
    </div>
  );
};

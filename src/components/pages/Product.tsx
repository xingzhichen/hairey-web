import React from 'react';
import styles from '@/styles/Pages.module.css';
import { ProductHeader } from '../product/ProductHeader';
import { ProductList } from '../product/ProductList';

export const Product = () => {
  return (
    <div className={styles.pageContainer}>
      <ProductHeader />
      <ProductList />
    </div>
  );
};

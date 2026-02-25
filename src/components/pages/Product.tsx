import React from 'react';
import styles from '@/styles/Pages.module.css';
import { ProductHeader } from '../product/ProductHeader';
import { ProductList } from '../product/ProductList';

export const Product = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Page Header */}
      <ProductHeader />

      {/* Product List */}
      <ProductList />

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

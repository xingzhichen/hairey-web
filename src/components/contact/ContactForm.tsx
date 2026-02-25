'use client';

import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const ContactForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={styles.card}
      style={{ padding: '3rem', borderRadius: '3rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
    >
      <h3 className={styles.cardTitle} style={{ fontSize: '1.875rem', marginBottom: '2.5rem' }}>发送在线咨询</h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className={styles.formGroup}>
            <label className={styles.label}>姓名</label>
            <input type="text" className={styles.input} placeholder="您的姓名" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>机构名称</label>
            <input type="text" className={styles.input} placeholder="诊所/医院名称" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>电子邮箱</label>
          <input type="email" className={styles.input} placeholder="email@example.com" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>咨询类别</label>
          <select className={styles.input}>
            <option>产品订购</option>
            <option>技术支持</option>
            <option>商务合作</option>
            <option>其他</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>咨询详情</label>
          <textarea rows={4} className={styles.input} placeholder="请描述您的具体需求..." />
        </div>
        <button className={styles.button}>
          <span>立即发送消息</span>
          <Send size={20} />
        </button>
      </form>
    </motion.div>
  );
};

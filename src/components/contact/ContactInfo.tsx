'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const ContactInfo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <h2 className={styles.sectionTitle}>快速联络方式</h2>
        <p className={styles.sectionDesc}>
          我们致力于在 24 小时内回复您的咨询。您可以直接拨打电话，或通过下方的在线表单发送信息。
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {[
          { icon: Mail, title: '技术支持邮箱', content: 'scarlett.guo@hairey.net', sub: '针对临床技术问题的专业解答' },
          { icon: MapPin, title: '全球总部', content: '深圳坪山高新区产学研基地', sub: '' },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ x: 10 }}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}
          >
            <div className={styles.iconBox} style={{ flexShrink: 0 }}>
              <item.icon size={24} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'hsl(var(--secondary))', marginBottom: '0.25rem' }}>{item.title}</h4>
              <p style={{ fontSize: '1.25rem', fontWeight: 900, color: 'hsl(var(--secondary))' }}>{item.content}</p>
              {item.sub && <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem' }}>{item.sub}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

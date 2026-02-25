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
          { icon: Phone, title: '全国咨询热线', content: '400-888-HAIREY (424739)', sub: '周一至周五 9:00 - 18:00' },
          { icon: Mail, title: '技术支持邮箱', content: 'support@hairey-dental.com', sub: '针对临床技术问题的专业解答' },
          { icon: MapPin, title: '全球总部', content: '上海市浦东新区张江高科技园区', sub: '创新研发中心' },
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
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem' }}>{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: '2rem', borderRadius: '2rem', backgroundColor: 'hsl(var(--accent) / 0.05)', border: '1px solid hsl(var(--accent) / 0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'hsl(var(--accent))', fontWeight: 900, marginBottom: '1rem' }}>
          <Clock size={20} />
          <span>服务承诺</span>
        </div>
        <p style={{ color: '#475569', lineHeight: 1.6 }}>
          作为您的数字化伙伴，我们深知临床工作的紧迫性。针对设备故障，我们承诺在主要城市实现 12 小时内上门修复服务。
        </p>
      </div>
    </div>
  );
};

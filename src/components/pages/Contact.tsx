'use client';

/**
 * Contact page with form and contact details.
 */
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const Contact = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <section className={styles.heroSectionLight}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '16rem', height: '16rem', border: '4px solid hsl(var(--primary))', borderRadius: '9999px' }} />
          <div style={{ position: 'absolute', bottom: '5rem', right: '5rem', width: '24rem', height: '24rem', border: '4px solid hsl(var(--primary))', borderRadius: '9999px' }} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.heroTitleLight}
            >
              联系 <span className={styles.textPrimary}>HAIREY</span>
            </motion.h1>
            <p className={styles.heroSubtitleLight}>
              无论是技术咨询、产品订购还是寻求合作，我们的专家团队都将为您提供即时响应。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Contact Info */}
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

            {/* Contact Form */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

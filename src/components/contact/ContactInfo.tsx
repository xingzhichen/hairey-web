'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '@/styles/Pages.module.css';

export const ContactInfo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <h2 className={styles.sectionTitle}>Contact Channels</h2>
        <p className={styles.sectionDesc}>
          We are committed to responding to your inquiries within 24 hours. You can call us directly or send a message via the online form below.
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {[
          { icon: Mail, title: 'Technical Support', content: 'scarlett.guo@hairey.net', sub: 'Professional answers for clinical technical questions' },
          { icon: MapPin, title: 'Global Headquarters', content: 'Shenzhen Pingshan High-tech Zone Industry-University-Research Base', sub: '' },
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

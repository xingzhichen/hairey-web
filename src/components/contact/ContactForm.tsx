'use client';

import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import styles from '@/styles/Pages.module.css';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    category: '产品订购',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `${formData.category} - ${formData.organization}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        organization: '',
        email: '',
        category: '产品订购',
        message: ''
      });
      toast.success('Message sent successfully! We will contact you shortly.');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      toast.error('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={styles.card}
      style={{ padding: '3rem', borderRadius: '3rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
    >
      <h3 className={styles.cardTitle} style={{ fontSize: '1.875rem', marginBottom: '2.5rem' }}>Send Us a Message</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input} 
              placeholder="Your Name" 
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Organization</label>
            <input 
              type="text" 
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className={styles.input} 
              placeholder="Clinic / Hospital Name" 
              required
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input} 
            placeholder="email@example.com" 
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Inquiry Type</label>
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.input}
          >
            <option value="Product Order">Product Order</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Business Partnership">Business Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Message</label>
          <textarea 
            rows={4} 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.input} 
            placeholder="How can we help you?" 
            required
          />
        </div>

        {status === 'error' && (
          <p style={{ color: 'red', fontSize: '0.875rem' }}>{errorMessage}</p>
        )}
        
        {status === 'success' && (
          <p style={{ color: 'green', fontSize: '0.875rem' }}>消息已发送，我们会尽快与您联系！</p>
        )}

        <button 
          type="submit" 
          className={styles.button}
          disabled={status === 'loading' || status === 'success'}
          style={{ opacity: status === 'loading' || status === 'success' ? 0.7 : 1 }}
        >
          {status === 'loading' ? (
            <>
              <span>Sending...</span>
              <Loader2 size={20} className="animate-spin" />
            </>
          ) : status === 'success' ? (
            <span>Sent</span>
          ) : (
            <>
              <span>Send Message Now</span>
              <Send size={20} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

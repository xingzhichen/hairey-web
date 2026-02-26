import React from 'react';
import styles from '@/styles/Pages.module.css';
import { ContactHeader } from '../contact/ContactHeader';
import { ContactInfo } from '../contact/ContactInfo';
import { ContactForm } from '../contact/ContactForm';

export const Contact = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <ContactHeader />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Contact Info */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

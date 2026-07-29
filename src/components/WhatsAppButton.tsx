import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

const WHATSAPP_NUMBER = '8613480877880';
const WHATSAPP_MESSAGE = 'Hello! I am interested in Hairey Dental products and services.';

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle 
        size={24} 
        className={styles.whatsappIcon}
        strokeWidth={2.5}
      />
      <span className={styles.whatsappText}>Hi! Need help? Chat with us on WhatsApp</span>
    </a>
  );
};

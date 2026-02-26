import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.column}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoBox}>
                <span className={styles.logoText}>H</span>
              </div>
              <span className={styles.brandText}>HAIREY</span>
            </Link>
            <p className={styles.description}>
              Empowering dental professionals worldwide with precision biomaterials and full digital workflows for perfect smiles.
            </p>
            <div className={styles.socialRow}>
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className={styles.socialIcon}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.linkItem}>About Us <ArrowUpRight size={14} style={{ marginLeft: '0.25rem' }} /></Link></li>
              <li><Link href="/product" className={styles.linkItem}>Products <ArrowUpRight size={14} style={{ marginLeft: '0.25rem' }} /></Link></li>
              <li><Link href="/contact" className={styles.linkItem}>Contact Us <ArrowUpRight size={14} style={{ marginLeft: '0.25rem' }} /></Link></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Info</h4>
            <ul className={styles.linkList}>
              <li className={styles.contactItem}>
                <MapPin size={20} className={styles.icon} />
                <span>Shenzhen Pingshan High-tech Zone Industry-University-Research Base</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={20} className={styles.icon} />
                <span>scarlett.guo@hairey.net</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Hairey Dental Technology Co., Ltd. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>ICP 12345678</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

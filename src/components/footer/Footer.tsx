import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/product" },
  { label: "Contact Us", href: "/contact" },
];

const supportItems = [
  "Global distributor collaboration",
  "Sampling and quote response",
  "Digital workflow consultation",
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Link href="/" className={styles.logoLink} aria-label="Hairey home">
              <Image
                src="/images/logo_footer.png"
                alt="Hairey"
                width={650}
                height={199}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.description}>
              Empowering dental professionals worldwide with precision biomaterials and dependable digital workflows.
            </p>
            <div className={styles.socialRow}>
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className={styles.socialIcon} aria-label="social link">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.linkItem}>
                    {item.label} <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Why Partner With Us</h4>
            <ul className={styles.linkList}>
              {supportItems.map((item) => (
                <li key={item} className={styles.supportItem}>{item}</li>
              ))}
            </ul>
          </div>

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

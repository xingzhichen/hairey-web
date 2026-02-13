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
              通过精密生物材料与全数字化工作流，赋能全球牙科专业人士，创造更完美的笑容。
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
            <h4 className={styles.columnTitle}>快速导航</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.linkItem}>关于我们 <ArrowUpRight size={14} style={{ marginLeft: '0.25rem' }} /></Link></li>
              <li><Link href="/product" className={styles.linkItem}>创新产品 <ArrowUpRight size={14} style={{ marginLeft: '0.25rem' }} /></Link></li>
              <li><Link href="/service" className={styles.linkItem}>专业服务 <ArrowUpRight size={14} style={{ marginLeft: '0.25rem' }} /></Link></li>
              <li><Link href="/contact" className={styles.linkItem}>联系我们 <ArrowUpRight size={14} style={{ marginLeft: '0.25rem' }} /></Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>解决方案</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.linkItem}>数字化种植修复</a></li>
              <li><a href="#" className={styles.linkItem}>美学贴面系统</a></li>
              <li><a href="#" className={styles.linkItem}>AI 辅助临床诊断</a></li>
              <li><a href="#" className={styles.linkItem}>材料定制开发</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>联络信息</h4>
            <ul className={styles.linkList}>
              <li className={styles.contactItem}>
                <MapPin size={20} className={styles.icon} />
                <span>上海市浦东新区张江高科<br />科苑路创新园</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={20} className={styles.icon} />
                <span>400-888-HAIREY</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={20} className={styles.icon} />
                <span>info@hairey-dental.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Hairey Dental Technology Co., Ltd. 保留所有权利。</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>隐私政策</a>
            <a href="#" className={styles.legalLink}>服务条款</a>
            <a href="#" className={styles.legalLink}>沪ICP备12345678号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

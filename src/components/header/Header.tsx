'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '创新产品', path: '/product' },
    { name: '专业服务', path: '/service' },
    { name: '联系我们', path: '/contact' },
  ];

  return (
    <header 
      className={`${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoBox}>
              <span className={styles.logoText}>H</span>
            </div>
            <span className={styles.brandText}>
              HAIREY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.navLink} ${
                  pathname === link.path ? styles.activeLink : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className={styles.actionGroup}>
              <button className={styles.iconBtn}>
                <Globe size={20} />
              </button>
              <Link 
                href="/contact" 
                className={styles.ctaBtn}
              >
                获取方案
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileContainer}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${styles.mobileLink} ${
                    pathname === link.path ? styles.mobileLinkActive : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className={styles.mobileCta}
              >
                立即联系
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

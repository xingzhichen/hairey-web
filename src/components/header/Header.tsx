'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Contact Us', path: '/contact' },
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
              <button
                className={styles.themeToggle}
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link 
                href="/contact" 
                className={styles.ctaBtn}
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className={styles.mobileActions}>
            <button 
              className={styles.mobileToggle}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
              <button
                className={styles.mobileThemeToggle}
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className={styles.mobileCta}
              >
                Contact Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
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
    { name: 'PRODUCTS', path: '/product' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header 
      className={`${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logo.png"
              alt="Hairey"
              width={650}
              height={199}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.navLink} ${
                  pathname === link.path || (link.path !== '/' && pathname.startsWith(`${link.path}/`)) ? styles.activeLink : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className={styles.actionGroup}>
              <label className={styles.searchBox}>
                <span>Search products</span>
                <input type="search" placeholder="Search products..." />
                <Search size={18} />
              </label>
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
                Request Quote
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
                    pathname === link.path || (link.path !== '/' && pathname.startsWith(`${link.path}/`)) ? styles.mobileLinkActive : ''
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

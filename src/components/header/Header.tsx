"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ArrowRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Contact Us", path: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = window.localStorage.getItem("hairey-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enableDark = savedTheme ? savedTheme === "dark" : prefersDark;

    root.classList.toggle("dark", enableDark);
    if (enableDark !== isDark) {
      window.setTimeout(() => setIsDark(enableDark), 0);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("hairey-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : styles.transparent].join(" ")}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.logoLink} aria-label="Hairey home">
            <Image
              src="/images/logo.png"
              alt="Hairey"
              width={650}
              height={199}
              priority
              className={styles.logoImage}
            />
          </Link>

          <div className={styles.desktopNav}>
            <div className={styles.navPill}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={[styles.navLink, pathname === link.path ? styles.activeLink : ""].join(" ")}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className={styles.actionGroup}>
              <label className={styles.searchBox}>
                <span className={styles.srOnly}>Search products</span>
                <Search className={styles.searchIcon} size={18} aria-hidden="true" />
                <input
                  className={styles.searchInput}
                  type="search"
                  placeholder="Search products"
                  aria-label="Search products"
                />
              </label>
              <button
                className={styles.themeToggle}
                onClick={() => setIsDark((value) => !value)}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                type="button"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link href="/contact" className={styles.ctaBtn}>
                Get Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.mobileActions}>
            <button
              className={styles.themeToggle}
              onClick={() => setIsDark((value) => !value)}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              type="button"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className={styles.mobileToggle}
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={styles.mobileMenuWrap}
          >
            <div className={styles.mobileMenu}>
              <div className={styles.mobileIntro}>
                <span className={styles.mobileEyebrow}>Precision material partner</span>
                <p>Explore our solutions for labs, distributors, and fast-moving digital workflows.</p>
              </div>

              <div className={styles.mobileLinks}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={[styles.mobileLink, pathname === link.path ? styles.mobileLinkActive : ""].join(" ")}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>

              <Link href="/contact" onClick={() => setIsOpen(false)} className={styles.mobileCta}>
                Contact Now <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

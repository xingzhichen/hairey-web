"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Search } from "lucide-react";
import styles from "./Header.module.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const productLinks = [
  { name: "Zirconia", path: "/product/zirconia" },
  { name: "PMMA", path: "/product/pmma" },
  { name: "Press", path: "/product/press" },
];

const productSearchTargets = [
  { terms: ["zirconia", "zirconia block", "zirconia disc", "4d promax", "3d promax", "st-m", "st-c", "ht"], path: "/product/zirconia/products" },
  { terms: ["pmma", "pmma solution", "temporary restoration"], path: "/product/pmma" },
  { terms: ["disilicate", "lithium disilicate", "press", "press ingot"], path: "/product/press" },
  { terms: ["bur", "burs", "milling bur", "milling burs"], path: "/#products" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return;

    const match = productSearchTargets.find(({ terms }) =>
      terms.some((term) => term.includes(normalizedQuery) || normalizedQuery.includes(term))
    );

    router.push(match?.path ?? `/#products`);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsProductsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

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
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={[styles.navLink, pathname === link.path ? styles.activeLink : ""].join(" ")}
                >
                  {link.name}
                </Link>
              ))}
              <div
                className={[styles.productMenu, isProductsOpen ? styles.productMenuOpen : ""].join(" ")}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setIsProductsOpen(false);
                }}
              >
                <button
                  type="button"
                  className={[styles.navLink, styles.productMenuTrigger, pathname.startsWith("/product/") ? styles.activeLink : ""].join(" ")}
                  aria-haspopup="true"
                  aria-expanded={isProductsOpen}
                  onClick={() => setIsProductsOpen((open) => !open)}
                >
                  Products <ChevronDown size={15} />
                </button>
                <div className={styles.productDropdown}>
                  {productLinks.map((product) => (
                    <Link key={product.path} href={product.path} className={styles.productDropdownLink} onClick={() => setIsProductsOpen(false)}>
                      {product.name} <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
              {navLinks.slice(2).map((link) => (
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
              <form className={styles.searchBox} role="search" onSubmit={handleSearch}>
                <span className={styles.srOnly}>Search products</span>
                <button className={styles.searchButton} type="submit" aria-label="Search products">
                  <Search className={styles.searchIcon} size={18} aria-hidden="true" />
                </button>
                <input
                  className={styles.searchInput}
                  type="search"
                  placeholder="Search products"
                  aria-label="Search products"
                  list="product-search-options"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
                <datalist id="product-search-options">
                  <option value="Zirconia" />
                  <option value="4D ProMax" />
                  <option value="3D ProMax" />
                  <option value="PMMA" />
                  <option value="Lithium Disilicate" />
                  <option value="Press Ingots" />
                  <option value="Milling Burs" />
                </datalist>
              </form>
              <Link href="/contact" className={styles.ctaBtn}>
                Get Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.mobileActions}>
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

      {isOpen && (
        <div className={styles.mobileMenuWrap}>
          <div className={styles.mobileMenu}>
            <div className={styles.mobileIntro}>
              <span className={styles.mobileEyebrow}>Precision material partner</span>
              <p>Explore our solutions for labs, distributors, and fast-moving digital workflows.</p>
            </div>

            <div className={styles.mobileLinks}>
              {navLinks.slice(0, 2).map((link) => (
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
              <div className={styles.mobileProductGroup}>
                <span className={styles.mobileProductLabel}>Products</span>
                {productLinks.map((product) => (
                  <Link
                    key={product.path}
                    href={product.path}
                    onClick={() => setIsOpen(false)}
                    className={styles.mobileProductLink}
                  >
                    {product.name} <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
              {navLinks.slice(2).map((link) => (
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
        </div>
      )}
    </header>
  );
};

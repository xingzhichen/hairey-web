import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span role="img" aria-label="tooth">🦷</span> Hairey
        </div>
        <div className={styles.navLinks}>
          <Link href="#" className={styles.navLink}>Home</Link>
          <Link href="#services" className={styles.navLink}>Services</Link>
          <Link href="#about" className={styles.navLink}>About Us</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </div>
        <button className={styles.bookBtn}>Book Appointment</button>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Your Smile is Our Top Priority</h1>
          <p className={styles.heroSubtitle}>
            Experience world-class dental care in a comfortable and relaxing environment. 
            We use the latest technology to ensure your smile stays healthy and beautiful.
          </p>
          <button className={styles.bookBtn} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Get Started Today
          </button>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImagePlaceholder} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionSubtitle}>
          Comprehensive dental solutions tailored to your unique needs.
        </p>
        
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>✨</span>
            <h3 className={styles.serviceTitle}>Cosmetic Dentistry</h3>
            <p className={styles.serviceDesc}>
              Transform your smile with whitening, veneers, and bonding. We design smiles that look natural and radiant.
            </p>
          </div>
          
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🛡️</span>
            <h3 className={styles.serviceTitle}>Preventive Care</h3>
            <p className={styles.serviceDesc}>
              Regular check-ups, cleanings, and x-rays to keep your teeth and gums healthy and prevent future issues.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🔧</span>
            <h3 className={styles.serviceTitle}>Restorative Dentistry</h3>
            <p className={styles.serviceDesc}>
              Implants, crowns, and bridges to restore function and aesthetics to your smile with durable materials.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>Hairey</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Dedicated to providing the highest quality dental care for patients of all ages.
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <Link href="#" className={styles.footerLink}>Home</Link>
            <Link href="#services" className={styles.footerLink}>Services</Link>
            <Link href="#about" className={styles.footerLink}>About Us</Link>
            <Link href="#contact" className={styles.footerLink}>Book Online</Link>
          </div>
          <div className={styles.footerColumn}>
            <h3>Contact Us</h3>
            <p className={styles.footerLink}>📍 123 Dental Street, City, Country</p>
            <p className={styles.footerLink}>📞 +1 (555) 123-4567</p>
            <p className={styles.footerLink}>✉️ info@hairey.com</p>
          </div>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Hairey Dental. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Download, Gem, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { zirconiaProducts } from '@/data/zirconiaProducts';
import { ProductSupportForm } from './ProductSupportForm';
import styles from '@/styles/Pages.module.css';

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Consistency',
    desc: 'High-quality zirconia from leading suppliers TOSOH and SINOCERA for smooth, uniform shade and consistent results.'
  },
  {
    icon: Gem,
    title: 'Durable Strength',
    desc: 'Optimized flexural strength supports long-lasting restorations across demanding clinical applications.'
  },
  {
    icon: Sparkles,
    title: 'Seamless Transparency',
    desc: 'Colloidal manufacturing allows different translucency grades to blend perfectly for a lifelike appearance.'
  }
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Countries' },
  { value: '200+', label: 'R&D Team Members' }
];

const shades = ['A1', 'A2', 'A3', 'B1', 'BL1', 'BL2', 'BL3'];

export const ZirconiaProduct = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scrollProducts = (direction: 'prev' | 'next') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>('[data-product-card]');
    const scrollDistance = firstCard ? firstCard.offsetWidth + 16 : carousel.clientWidth * 0.75;
    carousel.scrollBy({
      left: direction === 'next' ? scrollDistance : -scrollDistance,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.productDetailHero}>
        <div className={styles.container}>
          <div className={styles.productDetailHeroGrid}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.productDetailCopy}
            >
              <span className={styles.sectionKicker}>Biomaterials</span>
              <h1 className={styles.productDetailTitle}>ZircoFuse™ Zirconia</h1>
              <div className={styles.heroValueStack}>
                <strong>Precise Color Matching</strong>
                <strong>Natural Translucency</strong>
                <strong>Exceptional Strength</strong>
              </div>
              <p className={styles.productDetailLead}>
                Hairey’s exclusive ZircoFuse™ Technology fuses proprietary 4Y-TZP and 5Y-TZP zirconia powders via colloidal processing, with precise color matching and exceptional strength.
              </p>
              <div className={styles.heroActions}>
                <Link href="#product-support" className={styles.primaryAction}>
                  Request Sample <ArrowRight size={18} />
                </Link>
                <a
                  href="/downloads/Hairey-Product-Brochure-2026.pdf"
                  download
                  className={styles.secondaryAction}
                >
                  Download Brochure <Download size={17} />
                </a>
              </div>
              <div className={styles.heroTrustRow}>
                <span><ShieldCheck size={18} /> Trusted by Professionals</span>
                <span><Gem size={18} /> Engineered for Excellence</span>
                <span className={styles.consistentTrust}><CheckCircle2 size={18} /> <em>Consistent<br />Results</em></span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className={styles.productDetailVisual}
            >
              <Image
                src="/images/Zirconia_details.png"
                alt="ZircoFuse Zirconia layered strength details"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.productDetailSection}>
        <div className={styles.container}>
          <div className={styles.techPanel}>
            <div>
              <span className={styles.sectionKicker}>Engineered for Excellence</span>
              <h2 className={styles.sectionTitle}>Designed for the smile. Built for performance.</h2>
              <p className={styles.sectionDesc}>
                ZircoFuse™ Technology enables seamless, imperceptible fusion between zirconia powder layers, completely eliminating visible stratification.
              </p>
              <p className={styles.sectionDesc}>
                Even in the fabrication of ultra-thin dental veneers, this advanced technology delivers natural-looking aesthetic results that comply with stringent clinical criteria.
              </p>
            </div>
            <div className={styles.performanceImage}>
              <Image
                src="/images/Zirconia_performance.png"
                alt="ZircoFuse zirconia performance comparison"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          </div>

          <div className={styles.detailFeatureGrid}>
            {featureCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={styles.detailFeatureCard}
              >
                <div className={styles.detailIconBox}>
                  <item.icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.productDetailSectionMuted}>
        <div className={styles.container}>
          <div className={styles.qualityGrid}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.qualityCardStrong}
            >
              <span className={styles.sectionKicker}>Advanced Materials</span>
              <h2>Powder-level Quality Control</h2>
              <p>
                The humid oral environment poses long-term challenges for zirconia prosthetic blocks. Hairey uses high-quality zirconia powder from TOSOH and SINOCERA, with controlled particle size of 20-40 nm to ensure consistent performance.
              </p>
              <p>
                The fusion of raw materials and innovative colloidal technology creates stronger zirconia blocks with dependable CAD/CAM machinability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className={styles.qualityCard}
            >
              <div className={styles.qualityImage}>
                <Image
                  src="/images/zirconia_quality_control.png"
                  alt="Hairey zirconia powder-level quality control process"
                  fill
                  sizes="(max-width: 900px) 100vw, 34vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.productDetailSection}>
        <div className={styles.container}>
          <div className={styles.shadePanel}>
            <div>
              <span className={styles.sectionKicker}>Shade Control</span>
              <h2>No More Color Surprises</h2>
              <p>
                Hairey zirconia offers a range of pre-shaded blanks for consistent, predictable results. From natural whites to multilayered shades, every piece delivers lifelike aesthetics that match patient needs.
              </p>
            </div>
            <div className={styles.shadeChart}>
              <div className={styles.shadeChartHeader}>
                <strong>Available Shades</strong>
                <div className={styles.segmentedControl}>
                  <span>Gradient</span>
                  <span>Solid</span>
                </div>
              </div>
              <div className={styles.shadeDots}>
                {shades.map((shade, index) => (
                  <div key={shade} className={styles.shadeItem}>
                    <span>{shade}</span>
                    <i style={{ opacity: 1 - index * 0.075 }} />
                  </div>
                ))}
              </div>
              <div className={styles.translucencyBar}>
                <span>High</span>
                <div />
                <span>Low</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productDetailSection}>
        <div className={styles.container}>
          <div className={styles.successPanel}>
            <div>
              <span className={styles.sectionKicker}>Our Commitment</span>
              <h2>Reliable materials, responsive support, dependable service.</h2>
              <p>
                At Hairey, reliability goes beyond our products. Our experienced team is dedicated to providing consistent quality, responsive support, and dependable service, helping you succeed with confidence.
              </p>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((item) => (
                <div key={item.value} className={styles.detailStat}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productInquirySection}>
        <div className={styles.container}>
          <div className={styles.productFamilyHeader}>
            <div>
              <span className={styles.sectionKicker}>Product Family</span>
              <h2>Zirconia Products</h2>
            </div>
            <Link href="/product/zirconia/products">View all products <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.zirconiaCarouselWrap}>
            <button
              type="button"
              className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
              onClick={() => scrollProducts('prev')}
              aria-label="Previous zirconia products"
            >
              <ArrowLeft size={20} />
            </button>
            <div className={styles.zirconiaProductCarousel} ref={carouselRef}>
              {zirconiaProducts.map((item) => (
                <article key={item.slug} className={styles.zirconiaSkuCard} data-product-card>
                  <div className={styles.zirconiaSkuImage}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 82vw, (max-width: 1100px) 34vw, 18vw"
                    />
                  </div>
                  <h3>{item.name}</h3>
                  <p className={styles.zirconiaSkuTag}>{item.tag}</p>
                  <ul>
                    {item.cardSpecs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                  <Link href={`/product/zirconia/${item.slug}`}>View Details <ArrowRight size={16} /></Link>
                </article>
              ))}
            </div>
            <button
              type="button"
              className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
              onClick={() => scrollProducts('next')}
              aria-label="Next zirconia products"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <ProductSupportForm productName="Zirconia" />
    </div>
  );
};

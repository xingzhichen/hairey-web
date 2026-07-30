'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Headphones, Mail, PackageCheck, Send, ShieldCheck, Truck } from 'lucide-react';
import type { ZirconiaProduct } from '@/data/zirconiaProducts';
import styles from '@/styles/Pages.module.css';

type Props = {
  product: ZirconiaProduct;
};

const trustBadges = ['CE Certified', 'ISO 13485', 'Fast Sintering'];
const orderingSteps = [
  { icon: ClipboardCheck, title: 'Select Size' },
  { icon: Send, title: 'Request Quote' },
  { icon: PackageCheck, title: 'Sales Confirmation' },
  { icon: Truck, title: 'Shipping' },
];

export const ZirconiaProductDetail = ({ product }: Props) => {
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className={styles.pageContainer}>
      <section className={styles.skuHeroSection}>
        <div className={styles.container}>
          <Link href="/product/zirconia/products" className={styles.backLink}>
            <ArrowLeft size={18} />
            Zirconia Products
          </Link>

          <div className={styles.skuHeroGrid}>
            <div className={styles.skuGallery}>
              <div className={styles.skuMainImage}>
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
              </div>
              <div className={styles.skuThumbs}>
                <button
                  type="button"
                  className={styles.skuThumbActive}
                  onClick={() => setSelectedImage(product.gallery[0])}
                  aria-label={`View ${product.name} image`}
                >
                  <Image src={product.gallery[0]} alt="" fill sizes="96px" />
                </button>
              </div>
            </div>

            <div className={styles.skuSummaryPanel}>
              <span className={styles.sectionKicker}>Zirconia Disc</span>
              <h1>{product.name}</h1>
              <p className={styles.skuHeroSummary}>{product.summary}</p>
              <div className={styles.skuMeta}>
                <span>SKU: {product.sku}</span>
                <strong>Available upon request</strong>
              </div>
              <label className={styles.skuSelector}>
                Size
                <select value={selectedSize} onChange={(event) => setSelectedSize(event.target.value)}>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </label>
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}&size=${encodeURIComponent(selectedSize)}`}
                className={styles.skuQuoteButton}
              >
                Request Quote
              </Link>
              <div className={styles.skuTrustBadges}>
                {trustBadges.map((badge) => (
                  <span key={badge}>
                    <ShieldCheck size={16} />
                    {badge}
                  </span>
                ))}
              </div>
              <div className={styles.skuSalesLink}>
                <Headphones size={20} />
                <span>
                  Need assistance?
                  <Link href="/contact">Contact our sales team <ArrowRight size={14} /></Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skuSection}>
        <div className={styles.container}>
          <div className={styles.skuInfoGrid}>
            <div>
              <span className={styles.sectionKicker}>Overview</span>
              <h2>Overview</h2>
              <p>{product.summary}</p>
              <p>
                Designed for stable milling and distortion-free sintering, this zirconia disc supports reliable outcomes for high-precision dental workflows.
              </p>
              <div className={styles.skuHighlights}>
                {product.highlights.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className={styles.sectionKicker}>Specifications</span>
              <h2>Specifications</h2>
              <div className={styles.skuSpecsTable}>
                {product.specs.map((spec) => (
                  <div key={spec.label}>
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skuSection}>
        <div className={styles.container}>
          <div className={styles.skuSectionHeader}>
            <span className={styles.sectionKicker}>Ordering Guide</span>
            <h2>Ordering Guide</h2>
          </div>
          <div className={styles.orderingSteps}>
            {orderingSteps.map((step, index) => (
              <div key={step.title} className={styles.orderingStep}>
                <div>
                  <step.icon size={22} />
                </div>
                <span>{index + 1}</span>
                <strong>{step.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.skuCtaSection}>
        <div className={styles.container}>
          <div className={styles.shopBottomCta}>
            <div>
              <Headphones size={26} />
            </div>
            <div>
              <h2>Need help choosing the right material?</h2>
              <p>Our team is here to help you find the best solution for your lab or clinic.</p>
            </div>
            <Link href="/contact" className={styles.shopSecondaryButton}>
              <Mail size={16} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

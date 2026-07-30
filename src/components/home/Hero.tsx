import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HomePage.module.css";

const quickMetrics = [
  { value: "Reliable", label: "Smooth cutting, predictable results" },
  { value: "Trusted", label: "50+ countries served" },
  { value: "OEM / ODM", label: "Flexible collaboration model" },
];

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay} />
        <Image
          src="/images/new-banner.webp"
          alt="Dental Biotechnology"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Reshape Your <br />
              <span
                className={`text-gradient ${styles.heroGradientWord}`}
              >
                Smile
              </span>
            </h1>

            <p className={styles.heroDescription}>
              High-quality CAD/CAM materials engineered for dental labs and distributors, ensuring consistent, predictable performance.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="#products" className={styles.secondaryButton}>
                Browse products
              </Link>
            </div>

            <div className={styles.heroMetricStrip}>
              {quickMetrics.map((item) => (
                <div key={item.value} className={styles.heroMetricItem}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.floatingBlob1} />
      <div className={styles.floatingBlob2} />
    </section>
  );
};

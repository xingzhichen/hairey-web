import Image from "next/image";
import {
  Boxes,
  Drill,
  Gem,
  Globe2,
  Palette,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import styles from "./About.module.css";

const productFeatures = [
  {
    icon: Boxes,
    title: "Zirconia blocks and PMMA",
    description: "for daily production needs",
  },
  {
    icon: Drill,
    title: "High-compatibility milling burs",
    description: "for stable cutting performance",
  },
  {
    icon: Palette,
    title: "Wax materials",
    description: "for design and try-in workflows",
  },
  {
    icon: Gem,
    title: "Lithium disilicate solutions",
    description: "for aesthetic indications",
  },
];

const statistics = [
  {
    icon: Globe2,
    value: "10+",
    description: "Years in dental consumables manufacturing",
  },
  {
    icon: UsersRound,
    value: "50+",
    description: "Countries served through long-term partners",
  },
  {
    icon: ShieldCheck,
    value: "200+",
    description: "Team Members in R&D and customer support serving",
  },
];

const reasons = [
  {
    image: "/images/about-us/reliable-milling-crown.png",
    alt: "Natural zirconia restoration showing smooth milling performance",
    title: "Reliable Milling Performance",
    description: "Smooth cutting, fewer fractures, predictable results.",
  },
  {
    image: "/images/about-us/natural-aesthetic-crowns.png",
    alt: "Dental zirconia restorations with natural shade transitions",
    title: "Natural Aesthetic Outcomes",
    description: "Seamless shade transitions with no visible layer.",
  },
  {
    image: "/images/about-us/milled-zirconia-disc.png",
    alt: "Multilayer zirconia disc designed for efficient finishing",
    title: "Less Chairside & Lab-side Adjustment",
    description: "Designed to save time in staining, glazing, and finishing.",
  },
  {
    image: "/images/about-us/zirconia-powder.png",
    alt: "Premium zirconia powder quality and material supply chain",
    title: "Trusted Raw Materials",
    description: "Powered by premium zirconia powder from TOSOH (Japan) and SINOCERA (China).",
  },
];

export const About = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 id="about-title">About Hairey</h1>
            <p className={styles.heroSubtitle}>Your partner in dental CAD/CAM consumables</p>
            <p className={styles.heroDescription}>
              Founded in 2016, Hairey is a dental-focused manufacturer providing CAD/CAM
              consumables for dental labs and clinics worldwide.
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroGlow} aria-hidden="true" />
            <Image
              src="/images/about-us/milling-machine-hero.png"
              alt="Dental milling machine shaping restorations from a zirconia disc"
              width={1400}
              height={1284}
              priority
              className={styles.heroImage}
              sizes="(max-width: 767px) 92vw, (max-width: 1100px) 48vw, 600px"
            />
          </div>
        </div>
        <div className={styles.heroWave} aria-hidden="true" />
      </section>

      <section className={styles.provides} aria-labelledby="provides-title">
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h2 id="provides-title">What Hairey Provides</h2>
            <p>
              We provide CAD/CAM consumables that integrate seamlessly into existing lab workflows
              and deliver consistent, predictable results.
            </p>
          </header>

          <div className={styles.productGrid}>
            {productFeatures.map(({ icon: Icon, title, description }) => (
              <article className={styles.productItem} key={title}>
                <div className={styles.iconCircle} aria-hidden="true">
                  <Icon size={28} strokeWidth={1.7} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trusted} aria-labelledby="trusted-title">
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h2 id="trusted-title">Trusted Worldwide</h2>
          </header>

          <div className={styles.statsGrid}>
            {statistics.map(({ icon: Icon, value, description }) => (
              <article className={styles.statItem} key={value}>
                <Icon className={styles.statIcon} size={38} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <strong>{value}</strong>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reasons} aria-labelledby="reasons-title">
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h2 id="reasons-title">Why Choose Hairey</h2>
          </header>

          <div className={styles.reasonGrid}>
            {reasons.map(({ image, alt, title, description }) => (
              <article className={styles.reasonCard} key={title}>
                <div className={styles.reasonImageWrap}>
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className={styles.reasonImage}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 44vw, 240px"
                  />
                </div>
                <div className={styles.reasonCopy}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

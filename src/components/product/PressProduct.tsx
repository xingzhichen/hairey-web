import Image from "next/image";
import Link from "next/link";
import { CircleCheck, Gem, ShieldCheck, Sparkles } from "lucide-react";
import { PressInquiryForm } from "./PressInquiryForm";
import styles from "./PressProduct.module.css";

const applications = [
  "Ultra-thin veneers",
  "Veneers",
  "Inlays",
  "Onlays",
  "Anterior crowns",
  "Posterior full crowns",
];

const comparison = [
  ["Material", "Glass ceramic (Lithium Disilicate)", "Polycrystalline zirconia"],
  ["Raw Material Form", "Cylindrical Press Ingot", "Disc / Puck"],
  ["Manufacturing", "Heat pressing", "CAD/CAM milling + sintering"],
  ["Flexural Strength", "~400–500MPa", "~800–1,500MPa"],
  ["Translucency", "Excellent", "Good to excellent"],
  ["Esthetics", "★★★★★", "★★★★☆"],
  ["Fracture Resistance", "Good", "Excellent"],
  ["Best Indications", "Veneers, anterior crowns, esthetic restorations", "Posterior crowns, bridges, high-load restorations"],
  ["Digital Workflow", "Traditional press workflow", "Fully digital CAD/CAM workflow"],
];

export const PressProduct = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroVisual}>
            <Image
              src="/images/press/hairey-press-ingots.png"
              alt="Hairey Press lithium disilicate ceramic ingots"
              width={1999}
              height={1046}
              priority
              className={styles.heroImage}
              sizes="(max-width: 820px) 94vw, 54vw"
            />
          </div>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Lithium disilicate press ceramic</p>
            <h1>Hairey Press</h1>
            <p className={styles.tagline}>460MPa of Pure Confidence.</p>
            <Link href="#expert" className={styles.primaryButton}>
              Purchase Today <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.narrowContainer}>
          <p>
            Hairey Press boasts superior translucency, precise color reproduction, high natural
            mimicry, excellent biocompatibility and favorable bondability. The all-ceramic
            restorations fabricated via die-casting can exhibit more remarkable natural aesthetics.
          </p>
          <div className={styles.highlights}>
            <div><Sparkles size={22} /> Lifelike translucency</div>
            <div><Gem size={22} /> Precise color reproduction</div>
            <div><ShieldCheck size={22} /> Clinical reliability</div>
          </div>
        </div>
      </section>

      <section className={styles.strength}>
        <div className={`${styles.container} ${styles.splitGrid}`}>
          <div className={styles.sectionCopy}>
            <p className={styles.kicker}>Strength without compromise</p>
            <h2>460MPa of Pure Confidence.</h2>
            <p>
              With a formidable 460MPa biaxial flexural strength, Hairey Press doesn&apos;t just meet
              industry benchmarks—it exceeds them. Engineered for both anterior and posterior
              single-unit restorations, it provides the ultimate balance of high-end aesthetics and
              long-term clinical reliability.
            </p>
          </div>
          <div className={styles.strengthGraphic}>
            <Image
              src="/images/press/press-460mpa.png"
              alt="Hairey Press 460MPa biaxial bending strength compared with the dental ceramic standard"
              width={1031}
              height={375}
              className={styles.containImage}
              sizes="(max-width: 820px) 94vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.applications}>
        <div className={`${styles.container} ${styles.splitGrid}`}>
          <div className={styles.applicationVisual}>
            <Image
              src="/images/press/press-applications.png"
              alt="Press ceramic applications including veneers, inlays, onlays, and crowns"
              width={872}
              height={558}
              className={styles.containImage}
              sizes="(max-width: 820px) 94vw, 50vw"
            />
          </div>
          <div className={styles.sectionCopy}>
            <p className={styles.kicker}>Versatile indications</p>
            <h2>Applications</h2>
            <div className={styles.applicationGrid}>
              {applications.map((item) => (
                <div key={item}><CircleCheck size={18} /> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aesthetics}>
        <div className={`${styles.container} ${styles.aestheticGrid}`}>
          <div className={styles.sectionCopy}>
            <p className={styles.kicker}>Natural optical performance</p>
            <h2>Engineered for Aesthetic Perfection</h2>
            <p>
              Hairey Press delivers the homogeneity needed for ultra-thin veneers with unrivaled
              confidence. Achieve flawless texture, lifelike translucency, and zero-impurity
              perfection. Every restoration, a masterpiece.
            </p>
          </div>
          <div className={styles.aestheticImageWrap}>
            <Image
              src="/images/press/press-aesthetic-case.png"
              alt="Four natural-looking anterior restorations made with Hairey Press"
              width={470}
              height={470}
              className={styles.aestheticImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.comparison}>
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>Material comparison</p>
            <h2>Press Ceramic vs. Zirconia</h2>
          </header>
          <div className={styles.tableScroll} tabIndex={0} aria-label="Scrollable material comparison table">
            <table>
              <thead><tr><th>Feature</th><th>Press Ceramic</th><th>Zirconia</th></tr></thead>
              <tbody>
                {comparison.map(([feature, press, zirconia]) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    <td>{press}</td>
                    <td>{zirconia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.expert} id="expert">
        <div className={`${styles.container} ${styles.expertGrid}`}>
          <div>
            <p className={styles.kicker}>Product support</p>
            <h2>Talk to Our Expert</h2>
            <p>Request the Hairey product brochure and discuss the right Press solution for your laboratory.</p>
          </div>
          <PressInquiryForm />
        </div>
      </section>
    </div>
  );
};

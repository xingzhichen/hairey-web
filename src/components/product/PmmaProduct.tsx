import Image from "next/image";
import Link from "next/link";
import { Cpu, Gauge, Layers3, Sparkles } from "lucide-react";
import styles from "./PmmaProduct.module.css";
import { ProductSupportForm } from "./ProductSupportForm";

const benefits = [
  { icon: Gauge, label: "Consistency" },
  { icon: Layers3, label: "Easy Processing" },
  { icon: Sparkles, label: "Natural Beauty" },
  { icon: Cpu, label: "CAD/CAM Ready" },
];

const parameters = [
  ["Type", "Monolayer & Multilayer PMMA"],
  ["Color", "VITA 16 A1–D4 Colors, Clear & Bleach"],
  ["Thickness", "10mm–35mm"],
  ["Flexural Strength", "> 100MPa"],
  ["Elasticity Modulus", "> 2200MPa"],
  ["Water Absorption", "< 20μg/mm³"],
  ["Water Solubility", "< 0.8μg/mm³"],
  ["Composition", "PMMA 99.7%; Pigments < 0.5%"],
  ["Residual Monomer", "< 1%"],
];

const guidance = [
  ["Temporary Crown", "★★★★★", "★★★★", "★★★★★", "✖", "★★"],
  ["Temporary Bridge", "★★★★★", "★★★", "★★★★", "✖", "★★"],
  ["Long-term Provisionals", "★★★★★", "★★", "★★★", "✖", "★★★"],
  ["Complete Denture Base", "★★★★★", "★★★", "✖", "✖", "★★"],
  ["Definitive Crown", "✖", "✖", "✖", "★★★★★", "★★★"],
  ["Implant Restoration", "★★", "✖", "✖", "★★★★★", "★★★★★"],
  ["Removable Partial Denture Framework", "★★", "✖", "✖", "★★", "★★★★★"],
];

export const PmmaProduct = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Dental CAD/CAM Material</p>
              <h1>PMMA Dental</h1>
              <p className={styles.heroTagline}>Engineered for Purity. Built to Last.</p>
              <Link className={styles.primaryButton} href="#expert">
                Purchase Today <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="/images/pmma/pmma-hero-pages-v2.png"
                alt="Monolayer and multilayer dental PMMA discs"
                width={1257}
                height={375}
                priority
                className={styles.heroImage}
                sizes="(max-width: 760px) 94vw, 52vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className={styles.narrowContainer}>
          <p className={styles.lead}>
            PMMA (Polymethyl Methacrylate) is a type of acrylic resin widely used in dentistry for
            fabricating temporary restorations, denture bases, and CAD/CAM dental prosthetics.
          </p>
          <p>
            It is a thermoplastic polymer formed through the polymerization of MMA (methyl
            methacrylate) monomers. Due to its combination of esthetics, biocompatibility, ease of
            processing, and cost-effectiveness, PMMA has become one of the most commonly used dental
            polymers.
          </p>
        </div>
      </section>

      <section className={styles.workflow}>
        <div className={`${styles.container} ${styles.splitGrid}`}>
          <div className={styles.workflowImageWrap}>
            <Image
              src="/images/pmma/pmma-product-range-pages-v2.png"
              alt="Hairey PMMA materials for digital denture and restoration workflows"
              fill
              className={styles.coverImage}
              sizes="(max-width: 800px) 94vw, 48vw"
            />
          </div>
          <div className={styles.sectionCopy}>
            <p className={styles.kicker}>Digital denture solutions</p>
            <h2>Revolutionize Digital Denture Workflow.</h2>
            <p>
              Hairey multi-color resin adopts a unique layered design, which can not only be used
              for the production of temporary crowns and bridges, but also can be used to carve and
              make full dentitions, thus helping you realize the production of digital full dentures.
            </p>
            <div className={styles.benefitGrid}>
              {benefits.map(({ icon: Icon, label }) => (
                <div className={styles.benefit} key={label}>
                  <Icon size={21} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.performance}>
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>Material integrity</p>
            <h2>Why Hairey PMMA Outperforms the Rest?</h2>
            <p className={styles.subheading}>Look closer. The microstructure tells the story.</p>
            <p>
              While other brands cut corners with low-grade industrial materials—risking patient
              toxicity and structural failure—Hairey sets a new standard. Our high-purity raw
              materials create a dense, stain-resistant shield that looks natural and stays strong.
            </p>
          </header>
          <div className={styles.microstructureCard}>
            <Image
              src="/images/pmma/pmma-microstructure-pages-v2.png"
              alt="Microscope surface comparison between other brands and Hairey PMMA"
              width={1012}
              height={402}
              className={styles.microstructureImage}
              sizes="(max-width: 1200px) 94vw, 1120px"
            />
          </div>
        </div>
      </section>

      <section className={styles.specifications}>
        <div className={styles.container}>
          <div className={styles.specGrid}>
            <div>
              <p className={styles.kicker}>Technical data</p>
              <h2>Parameters</h2>
              <p className={styles.specIntro}>
                A complete shade and thickness range engineered for dependable digital production.
              </p>
            </div>
            <dl className={styles.parameterList}>
              {parameters.map(([term, value]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.guidance}>
        <div className={styles.container}>
          <header className={styles.tableHeader}>
            <p className={styles.kicker}>Material comparison</p>
            <h2>Selection Guidance</h2>
            <p>Compare common restorative materials by their recommended clinical applications.</p>
          </header>
          <div className={styles.tableScroll} tabIndex={0} aria-label="Scrollable material selection table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Application</th>
                  <th scope="col">PMMA</th>
                  <th scope="col">PEMA</th>
                  <th scope="col">Bis-acryl</th>
                  <th scope="col">Zirconia</th>
                  <th scope="col">PEEK</th>
                </tr>
              </thead>
              <tbody>
                {guidance.map(([application, ...ratings]) => (
                  <tr key={application}>
                    <th scope="row">{application}</th>
                    {ratings.map((rating, index) => (
                      <td className={index === 0 ? styles.pmmaCell : undefined} key={`${application}-${index}`}>
                        <span aria-label={rating === "✖" ? "Not recommended" : `${rating.length} out of 5 stars`}>
                          {rating}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ProductSupportForm productName="PMMA" />
    </div>
  );
};

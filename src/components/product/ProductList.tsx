import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Pages.module.css';

export const ProductList = () => {
  const products = [
    {
      title: 'ZircoFuse™ Zirconia',
      desc: 'Hairey’s exclusive ZircoFuse™ Technology fuses proprietary 4Y-TZP and 5Y-TZP zirconia powders via colloidal processing, … ',
      image: '/images/zirconia.webp',
      href: '/product/zirconia',
      featured: true,
      imageFit: 'cover' as const,
      imagePosition: 'center'
    },
    {
      title: 'PMMA',
      desc: 'Hairey multi-color resin adopts a unique layered design, which can not only be used for the production of temporary crowns and bridges, but also can be used to carve…',
      image: '/images/pmma.webp',
      href: '/product/pmma',
      imageFit: 'contain' as const,
      imagePosition: 'center'
    },
    {
      title: 'Press',
      desc: 'Hairey Press boasts superior translucency, precise color reproduction, high natural mimicry, excellent biocompatibility and favorable bondability…',
      image: '/images/Press.webp',
      href: '/product/press',
      imageFit: 'contain' as const,
      imagePosition: 'center'
    }
  ];

  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.productShowcase}>
          {products.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.productCard} ${item.featured ? styles.productCardFeatured : ''}`}
            >
              <div className={styles.productImage}>
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  style={{ objectFit: item.imageFit, objectPosition: item.imagePosition }}
                  sizes={item.featured ? '(max-width: 1024px) 100vw, 58vw' : '(max-width: 1024px) 100vw, 36vw'}
                />
              </div>
              <div className={styles.productContent}>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
                {item.href ? (
                  <Link href={item.href} className={styles.productAction}>
                    View <ArrowRight size={18} />
                  </Link>
                ) : (
                  <button className={styles.productAction}>
                    View <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Headphones, Mail } from 'lucide-react';
import { zirconiaProducts, type ZirconiaProduct } from '@/data/zirconiaProducts';
import styles from '@/styles/Pages.module.css';

const badgeByIndex = ['New', 'Hot', '', '', '', ''];

const ProductCard = ({ product, badge }: { product: ZirconiaProduct; badge?: string }) => (
  <article className={styles.shopProductCard}>
    <Link href={`/product/zirconia/${product.slug}`} className={styles.shopProductImage}>
      {badge && <span>{badge}</span>}
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
      />
    </Link>
    <div className={styles.shopProductContent}>
      <h2>{product.name}</h2>
      <p>{product.tag}</p>
      <small>{product.cardSpecs.join(' | ')}</small>
      <Link href={`/product/zirconia/${product.slug}`}>
        View Details <ArrowRight size={16} />
      </Link>
    </div>
  </article>
);

const ProductGrid = ({ products }: { products: ZirconiaProduct[] }) => (
  <div className={styles.shopProductGrid}>
    {products.map((product, index) => (
      <ProductCard key={product.slug} product={product} badge={badgeByIndex[index]} />
    ))}
  </div>
);

const BottomCTA = () => (
  <section className={styles.shopBottomCta}>
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
  </section>
);

export const ZirconiaProductsCategory = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.shopCategoryPage}>
        <div className={styles.container}>
          <main className={styles.shopMain}>
            <div className={styles.shopBreadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/product/zirconia">Zirconia</Link>
              <span>/</span>
              <strong>Product List</strong>
            </div>
            <div className={styles.shopTitleRow}>
              <div>
                <h1>Zirconia</h1>
                <span>{zirconiaProducts.length} products</span>
              </div>
            </div>
            <ProductGrid products={zirconiaProducts} />
            <BottomCTA />
          </main>
        </div>
      </section>
    </div>
  );
};

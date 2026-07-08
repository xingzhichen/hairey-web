'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Headphones, Mail, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { zirconiaProducts, type ZirconiaProduct } from '@/data/zirconiaProducts';
import styles from '@/styles/Pages.module.css';

const categories = ['All Products', 'Zirconia', 'PMMA', 'Milling Burs', 'Dental Wax'];
const filterGroups = [
  { title: 'Price', items: ['$14', '$78'] },
  { title: 'Size', items: ['98mm', '95mm', '92mm'] },
  { title: 'Material', items: ['Zirconia'] },
  { title: 'System Compatibility', items: ['Open System', 'Zirkonzahn', 'Amann Girrbach', 'Sirona'] },
];

const badgeByIndex = ['New', 'Hot', '', '', '', ''];

const CategorySidebar = () => (
  <aside className={styles.shopSidebar}>
    <h2>Categories</h2>
    <nav>
      {categories.map((category) => (
        <Link
          key={category}
          href={category === 'Zirconia' ? '/product/zirconia/products' : '/product'}
          className={category === 'Zirconia' ? styles.shopCategoryActive : ''}
        >
          {category}
        </Link>
      ))}
    </nav>
    <FilterPanel />
  </aside>
);

const FilterPanel = () => (
  <div className={styles.filterPanel}>
    <h3>Filter by</h3>
    {filterGroups.map((group) => (
      <section key={group.title}>
        <button type="button">
          {group.title}
          <ChevronDown size={16} />
        </button>
        <div className={group.title === 'Price' ? styles.priceFilter : styles.checkboxFilter}>
          {group.items.map((item, index) => (
            group.title === 'Price'
              ? <span key={item}>{item}</span>
              : (
                <label key={item}>
                  <i />
                  {item}
                  <small>{index === 0 ? 6 : Math.max(2, 6 - index)}</small>
                </label>
              )
          ))}
        </div>
      </section>
    ))}
    <button type="button" className={styles.clearFilterButton}>
      <RotateCcw size={16} />
      Clear all filters
    </button>
  </div>
);

type SortValue = 'recommended' | 'price-low' | 'price-high';

const getPriceValue = (price: string) => {
  const match = price.match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
};

const SortDropdown = ({ value, onChange }: { value: SortValue; onChange: (value: SortValue) => void }) => (
  <label className={styles.sortDropdown}>
    Sort by:
    <select value={value} onChange={(event) => onChange(event.target.value as SortValue)}>
      <option value="recommended">Recommended</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
  </label>
);

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
      <strong>{product.price}</strong>
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
    <Link href="/contact" className={styles.shopPrimaryButton}>
      Request Quote
    </Link>
  </section>
);

export const ZirconiaProductsCategory = () => {
  const [sortValue, setSortValue] = React.useState<SortValue>('recommended');

  const sortedProducts = React.useMemo(() => {
    const products = [...zirconiaProducts];

    if (sortValue === 'price-low') {
      return products.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
    }

    if (sortValue === 'price-high') {
      return products.sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price));
    }

    return products;
  }, [sortValue]);

  return (
    <div className={styles.pageContainer}>
      <section className={styles.shopCategoryPage}>
        <div className={styles.container}>
          <div className={styles.mobileFilterBar}>
            <button type="button">
              <SlidersHorizontal size={18} />
              Filter / Sort
            </button>
          </div>
          <div className={styles.shopLayout}>
            <CategorySidebar />
            <main className={styles.shopMain}>
              <div className={styles.shopBreadcrumb}>
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/product">Products</Link>
                <span>/</span>
                <strong>Zirconia</strong>
              </div>
              <div className={styles.shopTitleRow}>
                <div>
                  <h1>Zirconia</h1>
                  <p>High-quality multilayer zirconia discs for labs and clinics.</p>
                  <span>{sortedProducts.length} products</span>
                </div>
                <SortDropdown value={sortValue} onChange={setSortValue} />
              </div>
              <ProductGrid products={sortedProducts} />
              <BottomCTA />
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

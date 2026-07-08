import type { Metadata } from 'next';
import { ZirconiaProductsCategory } from '@/components/product/ZirconiaProductsCategory';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Zirconia Products',
  description: 'Browse Hairey zirconia discs and request quotes for dental laboratory workflows.',
};

export default function Page() {
  return <ZirconiaProductsCategory />;
}

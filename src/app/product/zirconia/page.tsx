import type { Metadata } from 'next';
import { ZirconiaProduct } from '@/components/product/ZirconiaProduct';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'ZircoFuse™ Zirconia',
  description: 'ZircoFuse Zirconia biomaterials by Hairey, designed for precise color, natural translucency, and exceptional strength.',
};

export default function Page() {
  return <ZirconiaProduct />;
}

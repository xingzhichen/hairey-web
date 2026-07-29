import type { Metadata } from 'next';
import { About } from '@/components/pages/About';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Hairey, a dental-focused manufacturer providing dependable CAD/CAM consumables to labs and clinics worldwide.',
};

export default function Page() {
  return <About />;
}

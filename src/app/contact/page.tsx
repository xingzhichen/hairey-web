import type { Metadata } from 'next';
import { Contact } from '@/components/pages/Contact';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Hairey for dental CAD/CAM product inquiries, order support, and partnership opportunities.',
};

export default function Page() {
  return <Contact />;
}

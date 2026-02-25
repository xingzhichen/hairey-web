import { Product } from '@/components/pages/Product';

export const revalidate = 3600;

export default function Page() {
  return <Product />;
}

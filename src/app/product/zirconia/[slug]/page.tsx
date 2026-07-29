import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ZirconiaProductDetail } from '@/components/product/ZirconiaProductDetail';
import { getZirconiaProduct, zirconiaProducts } from '@/data/zirconiaProducts';

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export const generateStaticParams = () => zirconiaProducts.map((product) => ({ slug: product.slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const product = getZirconiaProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.summary,
  };
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = getZirconiaProduct(slug);

  if (!product) {
    notFound();
  }

  return <ZirconiaProductDetail product={product} />;
}

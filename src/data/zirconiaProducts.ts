export type ZirconiaProductSpec = {
  label: string;
  value: string;
};

export type ZirconiaProduct = {
  slug: string;
  name: string;
  sku: string;
  price: string;
  image: string;
  gallery: string[];
  sizes: string[];
  tag: string;
  cardSpecs: string[];
  summary: string;
  highlights: string[];
  specs: ZirconiaProductSpec[];
};

const commonSizes = ['98 x 10mm', '98 x 12mm', '98 x 14mm', '98 x 16mm', '98 x 18mm', '98 x 20mm', '98 x 22mm', '98 x 25mm'];
const commonColors = 'Vita 16 + BL1-BL4';
const commonSystems = 'Open / Zirkonzahn / Amann Girrbach / Sirona';
const commonCertification = 'CE, ISO 13485';

export const zirconiaProducts: ZirconiaProduct[] = [
  {
    slug: '4d-promax-zirconia-disc',
    name: '4D ProMax Zirconia Disc',
    sku: '01050',
    price: 'From $78.00',
    image: '/images/zirconia-products/4d-promax-hairey-2026.png',
    gallery: ['/images/zirconia-products/4d-promax-hairey-2026.png', '/images/Zirconia_details.png', '/images/zirconia.png'],
    sizes: commonSizes,
    tag: 'All-in-one / Fast Sintering',
    cardSpecs: ['800-1200 MPa', '46-49% Translucency'],
    summary: 'Hairey 4D ProMax applies true 8-layer zirconia powder with ZircoFuse™ technology to produce natural restorations with no visible layer lines.',
    highlights: ['8-layer gradient', 'Fast 2-hour sintering', 'Excellent esthetics', 'Full clinical applications'],
    specs: [
      { label: 'Flexural Strength', value: '800-1200 MPa' },
      { label: 'Translucency', value: '46-49%' },
      { label: 'Density', value: '6.10 g/cm3' },
      { label: 'Colors', value: commonColors },
      { label: 'Systems', value: commonSystems },
      { label: 'Certification', value: commonCertification },
    ],
  },
  {
    slug: '3d-promax-6-layer-multilayer-zirconia-disc',
    name: '3D ProMax 6-Layer Multilayer Zirconia Disc',
    sku: '01051',
    price: 'From $62.00',
    image: '/images/zirconia-products/3d-promax-hairey-2026.png',
    gallery: ['/images/zirconia-products/3d-promax-hairey-2026.png', '/images/zirconia_quality_control.png'],
    sizes: commonSizes,
    tag: 'Balanced Strength & Esthetics',
    cardSpecs: ['800-1200 MPa', '43-49% Translucency'],
    summary: '3D ProMax combines premium zirconia powder with a 6-layer gradient structure for strength, esthetics, and flexible clinical use.',
    highlights: ['6-layer gradient', 'Up to 1200 MPa', 'Anterior and posterior use', 'Full-arch restorations'],
    specs: [
      { label: 'Flexural Strength', value: '800-1200 MPa' },
      { label: 'Translucency', value: '43-49%' },
      { label: 'Density', value: '6.10 g/cm3' },
      { label: 'Colors', value: commonColors },
      { label: 'Systems', value: commonSystems },
      { label: 'Certification', value: commonCertification },
    ],
  },
  {
    slug: 'st-m-super-translucent-4-layer-zirconia-disc',
    name: 'ST-M Super Translucent 4-Layer Multilayer Zirconia Disc',
    sku: '01052',
    price: 'From $29.00',
    image: '/images/zirconia-products/st-m-hairey-2026.png',
    gallery: ['/images/zirconia-products/st-m-hairey-2026.png', '/images/Zirconia_performance.png'],
    sizes: commonSizes,
    tag: 'Esthetic Multilayer',
    cardSpecs: ['1200 MPa', '43% Translucency'],
    summary: 'ST-M is a super translucent multilayer zirconia disc with integrated shade and translucency for natural-looking restorations.',
    highlights: ['4-layer multilayer', 'Super translucent', 'No staining required', 'Crowns and bridges'],
    specs: [
      { label: 'Flexural Strength', value: '1200 MPa' },
      { label: 'Translucency', value: '43%' },
      { label: 'Density', value: '6.10 g/cm3' },
      { label: 'Colors', value: commonColors },
      { label: 'Systems', value: commonSystems },
      { label: 'Certification', value: commonCertification },
    ],
  },
  {
    slug: 'st-c-super-translucent-colored-zirconia-disc',
    name: 'ST-C Super Translucent Colored Multilayer Zirconia Disc',
    sku: '01053',
    price: 'From $19.00',
    image: '/images/zirconia-products/st-c-hairey-2026.png',
    gallery: ['/images/zirconia-products/st-c-hairey-2026.png', '/images/Zirconia_performance.png'],
    sizes: commonSizes,
    tag: 'Pre-shaded Esthetics',
    cardSpecs: ['1200 MPa', '43% Translucency'],
    summary: 'ST-C offers integrated color and translucency for efficient esthetic restorations without complex staining workflows.',
    highlights: ['Pre-colored multilayer', '43% translucency', 'Simple lab workflow', 'Implant and framework use'],
    specs: [
      { label: 'Flexural Strength', value: '1200 MPa' },
      { label: 'Translucency', value: '43%' },
      { label: 'Density', value: '6.06 g/cm3' },
      { label: 'Colors', value: commonColors },
      { label: 'Systems', value: commonSystems },
      { label: 'Certification', value: commonCertification },
    ],
  },
  {
    slug: 'st-super-translucent-multilayer-zirconia-disc',
    name: 'ST Super Translucent Multilayer Zirconia Disc',
    sku: '01054',
    price: 'From $18.00',
    image: '/images/zirconia-products/st-hairey-2026.png',
    gallery: ['/images/zirconia-products/st-hairey-2026.png', '/images/Zirconia_performance.png'],
    sizes: commonSizes,
    tag: 'Classic Translucent Option',
    cardSpecs: ['1200 MPa', '43% Translucency'],
    summary: 'ST zirconia provides a natural translucent gradient that simulates enamel, dentine, and cervical shades.',
    highlights: ['Natural gradient', 'Super translucent', 'Coping and crown use', 'Bridge applications'],
    specs: [
      { label: 'Flexural Strength', value: '1200 MPa' },
      { label: 'Translucency', value: '43%' },
      { label: 'Density', value: '6.10 g/cm3' },
      { label: 'Colors', value: commonColors },
      { label: 'Systems', value: commonSystems },
      { label: 'Certification', value: commonCertification },
    ],
  },
  {
    slug: 'ht-high-strength-zirconia-disc',
    name: 'HT High Strength Zirconia Disc',
    sku: '01055',
    price: 'From $14.00',
    image: '/images/zirconia-products/ht-hairey-2026.png',
    gallery: ['/images/zirconia-products/ht-hairey-2026.png', '/images/zirconia_quality_control.png'],
    sizes: commonSizes,
    tag: 'Maximum Strength',
    cardSpecs: ['1500 MPa', '38% Translucency'],
    summary: 'HT is a high-strength zirconia disc for durable, individualized restorations with reliable esthetic translucency.',
    highlights: ['1500 MPa strength', 'High durability', 'Full-contour zirconia', 'PFZ solutions'],
    specs: [
      { label: 'Flexural Strength', value: '1500 MPa' },
      { label: 'Translucency', value: '38%' },
      { label: 'Density', value: '3.2 g/cm3' },
      { label: 'Colors', value: commonColors },
      { label: 'Systems', value: commonSystems },
      { label: 'Certification', value: commonCertification },
    ],
  },
];

export const getZirconiaProduct = (slug: string) => zirconiaProducts.find((product) => product.slug === slug);

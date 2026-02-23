'use client';

import React from 'react';

export const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Hairey Dental Technology Co., Ltd.",
    "alternateName": "Hairey",
    "description": "Hairey - Next-Gen Dental Biotechnology. Delivering high-performance digital restoration solutions to clinics worldwide through advanced materials and precision engineering.",
    "url": "https://www.hairey.net",
    "logo": "https://www.hairey.net/images/logo.png",
    "sameAs": [
      "https://twitter.com/haireydental",
      "https://www.linkedin.com/company/haireydental"
    ],
    "medicalSpecialty": [
      "Dentistry",
      "Prosthodontics"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shanghai",
      "addressRegion": "Pudong New Area",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-21-xxxx-xxxx",
      "contactType": "customer service"
    },
    "priceRange": "$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

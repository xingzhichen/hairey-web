'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import styles from '@/styles/Pages.module.css';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  postCode: '',
  country: '',
};

export const ProductSupportForm = ({ productName }: { productName: string }) => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          subject: `${productName} product support inquiry`,
          message: [
            `Product: ${productName}`,
            `Organization: ${form.organization || 'Not provided'}`,
            `Post code: ${form.postCode || 'Not provided'}`,
            `Country: ${form.country || 'Not provided'}`,
          ].join('\n'),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to send inquiry');

      setForm(initialForm);
      toast.success('Thank you. Our product support team will contact you shortly.');
    } catch (error) {
      console.error('Product support inquiry error:', error);
      toast.error('Your inquiry could not be sent. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.productInquirySection} id="product-support">
      <div className={styles.container}>
        <div className={styles.inquiryPanel}>
          <div className={styles.inquiryCopy}>
            <span className={styles.sectionKicker}>Product Support</span>
            <h2>Would like to learn more about our products?</h2>
            <p>Connect with our expert for product details, samples, partnership opportunities, and technical guidance.</p>
          </div>
          <form className={styles.productInquiryForm} onSubmit={handleSubmit}>
            <input aria-label="First name" autoComplete="given-name" placeholder="First name" required value={form.firstName} onChange={(event) => updateField('firstName', event.target.value)} />
            <input aria-label="Last name" autoComplete="family-name" placeholder="Last name" required value={form.lastName} onChange={(event) => updateField('lastName', event.target.value)} />
            <input aria-label="Email" autoComplete="email" placeholder="Email" required type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} />
            <input aria-label="Organization" autoComplete="organization" placeholder="Organization" value={form.organization} onChange={(event) => updateField('organization', event.target.value)} />
            <input aria-label="Post code" autoComplete="postal-code" placeholder="Post code" value={form.postCode} onChange={(event) => updateField('postCode', event.target.value)} />
            <input aria-label="Country" autoComplete="country-name" placeholder="Country" value={form.country} onChange={(event) => updateField('country', event.target.value)} />
            <button type="submit" disabled={loading}>
              {loading ? <>Sending <Loader2 className={styles.inquirySpinner} size={18} /></> : <>Connect With Us <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

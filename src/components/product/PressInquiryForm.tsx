"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import styles from "./PressProduct.module.css";

const initialForm = { name: "", email: "", organization: "", message: "" };

export const PressInquiryForm = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Hairey Press inquiry — ${form.organization}`,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send inquiry");

      setForm(initialForm);
      toast.success("Your Press inquiry has been sent.");
    } catch (error) {
      console.error("Press inquiry error:", error);
      toast.error("Your inquiry could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.inquiryForm} onSubmit={submit}>
      <label>
        <span>Name *</span>
        <input
          autoComplete="name"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          required
        />
      </label>
      <label>
        <span>Email *</span>
        <input
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          required
        />
      </label>
      <label className={styles.organizationField}>
        <span>Organization *</span>
        <input
          autoComplete="organization"
          value={form.organization}
          onChange={(event) => setForm((current) => ({ ...current, organization: event.target.value }))}
          required
        />
      </label>
      <label className={styles.messageField}>
        <span>Tell us about your needs *</span>
        <textarea
          rows={3}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? (
          <>Sending <Loader2 className={styles.spinner} size={18} /></>
        ) : (
          <>Request Brochure &amp; Product Information <ArrowRight size={18} /></>
        )}
      </button>
    </form>
  );
};

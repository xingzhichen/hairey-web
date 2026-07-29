"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import styles from "./PmmaProduct.module.css";

const initialForm = { name: "", email: "", message: "" };

export const PmmaInquiryForm = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: "PMMA product inquiry",
          message: form.message,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send inquiry");

      setForm(initialForm);
      toast.success("Your PMMA inquiry has been sent.");
    } catch (error) {
      console.error("PMMA inquiry error:", error);
      toast.error("Your inquiry could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.expertForm} onSubmit={handleSubmit}>
      <label>
        <span>Name *</span>
        <input
          name="name"
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
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          required
        />
      </label>
      <label className={styles.expertMessage}>
        <span>How can we help? *</span>
        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? (
          <>
            Sending <Loader2 className={styles.spinner} size={18} />
          </>
        ) : (
          <>
            Send Inquiry <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
};

"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import styles from "../pages/Contact.module.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormData(initialForm);
      setStatus("success");
      toast.success("Message sent successfully! We will contact you shortly.");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label className={styles.field}>
          <span>First Name *</span>
          <input
            name="firstName"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            required
          />
        </label>

        <label className={styles.field}>
          <span>Last Name *</span>
          <input
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            required
          />
        </label>

        <label className={styles.field}>
          <span>Email *</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
          />
        </label>

        <label className={styles.field}>
          <span>Subject</span>
          <input
            name="subject"
            value={formData.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            required
          />
        </label>

        <label className={`${styles.field} ${styles.messageField}`}>
          <span>Leave us a message...</span>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            required
          />
        </label>
      </div>

      <div className={styles.formFooter}>
        <p className={styles.formStatus} role="status" aria-live="polite">
          {status === "success" && "Thank you. Your message has been sent."}
          {status === "error" && "Your message could not be sent. Please try again."}
        </p>
        <button className={styles.submitButton} type="submit" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              Sending <Loader2 size={17} className={styles.spinner} />
            </>
          ) : (
            <>
              Submit <ArrowRight size={17} />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

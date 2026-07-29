import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "../contact/ContactForm";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.page}>
      <section className={styles.contactSection} aria-labelledby="contact-title">
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <p>Hairey support</p>
            <h1 id="contact-title">Get in Touch</h1>
            <span aria-hidden="true" />
          </header>

          <div className={styles.contactLayout}>
            <aside className={styles.contactDetails} aria-labelledby="contact-details-title">
              <div>
                <h2 id="contact-details-title">Contact us</h2>
                <p className={styles.intro}>
                  If you have any question or need any assistance, please contact us by WhatsApp.
                </p>
              </div>

              <a
                className={styles.contactMethod}
                href="https://wa.me/8613480877880"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.methodIcon} aria-hidden="true">
                  <MessageCircle size={23} strokeWidth={1.8} />
                </span>
                <span>
                  <strong>WhatsApp</strong>
                  <b>+86 134 8087 7880</b>
                </span>
              </a>

              <p className={styles.responseCopy}>
                You can send messages to us regarding your order requests or questions. We will get
                back to you within 12 hours.
              </p>

              <a className={styles.contactMethod} href="mailto:scarlett.guo@hairey.net">
                <span className={styles.methodIcon} aria-hidden="true">
                  <Mail size={23} strokeWidth={1.8} />
                </span>
                <span>
                  <strong>Email</strong>
                  <b>scarlett.guo@hairey.net</b>
                </span>
              </a>
            </aside>

            <div className={styles.formColumn}>
              <div className={styles.formIntro}>
                <h2>We&apos;re here to help!</h2>
                <p>Fill out the form with any query on your mind and we&apos;ll get back to you soon!</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

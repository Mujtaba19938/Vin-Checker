import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Have questions? We're here to help. Send us a message and we'll get back to you as soon as possible.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Contact Form */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Send us a Message</h2>
            </div>
            <div className={styles.formContent}>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    required
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send Message
                  <Send className={styles.icon} style={{ width: '1rem', height: '1rem' }} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.contactHeader}>
              <h2 className={styles.contactTitle}>Get in Touch</h2>
              <p className={styles.contactDescription}>
                Have questions about our VIN check services? Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail className={styles.icon} />
                </div>
                <div>
                  <h3 className={styles.contactLabel}>Email Us</h3>
                  <p className={styles.contactText}>support@vinchecker.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Phone className={styles.icon} />
                </div>
                <div>
                  <h3 className={styles.contactLabel}>Call Us</h3>
                  <p className={styles.contactText}>+1 (555) 123-4567</p>
                  <p className={styles.contactSmallText}>Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MapPin className={styles.icon} />
                </div>
                <div>
                  <h3 className={styles.contactLabel}>Visit Us</h3>
                  <p className={styles.contactText}>
                    123 Auto Check Lane<br />
                    Detroit, MI 48226<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                Map View
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

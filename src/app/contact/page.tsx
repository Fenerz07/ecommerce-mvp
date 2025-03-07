import styles from '../../styles/links/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contactez-nous</h1>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Envoyer</button>
      </form>
    </div>
  );
}
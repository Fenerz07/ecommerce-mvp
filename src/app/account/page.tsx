import styles from '../../styles/links/account.module.css';

export default function Login() {
  return (
    <>
      <div className={styles.video}>
        <video autoPlay loop muted>
          <source src="/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    
        <div className={styles.loginContainer}>
        <form className={styles.loginForm}>
            <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className={styles.loginButton}>Connexion</button>
        </form>
        </div>
    </>
  );
}
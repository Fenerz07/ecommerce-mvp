import styles from "../styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                    <div className={styles.footerLink}><a href="#">FAQ</a></div>
                    <div className={styles.footerLink}><a href="#">Politique d&apos;Echange et de Retour</a></div>
                    <div className={styles.footerLink}><a href="#">Politique d&apos;Achat</a></div>
                    <div className={styles.footerLink}><a href="#">Politique de Confidentialité</a></div>
            </div>
            <div className={styles.footerBottom}>
                <a href="https://www.instagram.com/lambdastory/" className={styles.footerIcon}>
                    <Image src="/svg/instagram.svg" alt="Instagram" width={50} height={50} />
                </a>
                <p className={styles.footerCopyright}>
                    &copy; {new Date().getFullYear()} Lambda Story. All rights reserved.
                </p>
                
            </div>
        </footer>
    );
}

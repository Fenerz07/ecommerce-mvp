import styles from '../../../styles/links/products/letterbag.module.css';
import Image from 'next/image';

export default function LetterBag() {
  return (
    <div className={styles.productContainer}>
      <h1>LetterBag</h1>
      <div className={styles.productDetails}>
        <Image src="/bag.png" alt="LetterBag" width={500} height={500} className={styles.productImage} />
        <div className={styles.productInfo}>
          <p className={styles.productDescription}>
            LetterBag est un sac élégant et pratique, parfait pour transporter vos affaires quotidiennes. Fabriqué avec des matériaux de haute qualité, ce sac est durable et stylé.
          </p>
          <p className={styles.productPrice}>Prix: 29.99€</p>
          <button className={styles.addToCartButton}>Ajouter au Panier</button>
        </div>
      </div>
    </div>
  );
}
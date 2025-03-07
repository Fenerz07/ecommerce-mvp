import styles from '../../../styles/links/products/bloomtoy.module.css';
import Image from 'next/image';

export default function BloomToy() {
  return (
    <div className={styles.productContainer}>
      <h1>BloomToy</h1>
      <div className={styles.productDetails}>
        <Image src="/toy.png" alt="BloomToy" width={500} height={500} className={styles.productImage} />
        <div className={styles.productInfo}>
          <p className={styles.productDescription}>
            BloomToy est un jouet fantastique qui apporte de la joie et de l&apos;amusement à tous les enfants. Fabriqué avec des matériaux de haute qualité, ce jouet est sûr et durable.
          </p>
          <p className={styles.productPrice}>Prix: 49.99€</p>
          <button className={styles.addToCartButton}>Ajouter au Panier</button>
        </div>
      </div>
    </div>
  );
}
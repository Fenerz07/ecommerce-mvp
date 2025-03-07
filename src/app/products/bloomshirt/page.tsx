import styles from '../../../styles/links/products/bloomshirt.module.css';
import Image from 'next/image';

export default function BloomShirt() {
  return (
    <div className={styles.productContainer}>
      <h1>BloomShirt</h1>
      <div className={styles.productDetails}>
        <Image src="/tshirt.png" alt="BloomShirt" width={500} height={500} className={styles.productImage} />
        <div className={styles.productInfo}>
          <p className={styles.productDescription}>
            BloomShirt est un t-shirt confortable et stylé, parfait pour toutes les occasions. Fabriqué avec des matériaux de haute qualité, ce t-shirt est doux et durable.
          </p>
          <p className={styles.productPrice}>Prix: 19.99€</p>
          <button className={styles.addToCartButton}>Ajouter au Panier</button>
        </div>
      </div>
    </div>
  );
}
import styles from '../../styles/links/products.module.css';
import Image from 'next/image';

const products = [
  { id: 1, name: 'LetterBag', price: 29.99, image: '/bag.jpg' },
  { id: 2, name: 'BloomToy', price: 49.99, image: '/toy.jpg' },
  { id: 3, name: 'BloomShirt', price: 19.99, image: '/tshirt.jpg' },
];

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image src={product.image} alt={product.name} width={300} height={300} className={styles.productImage} />
            <h2>{product.name}</h2>
            <p>Price: {product.price.toFixed(2)}€</p>
            <button className={styles.addToCartButton}>Ajouter au Panier</button>
          </div>
        ))}
      </div>
    </div>
  );
}
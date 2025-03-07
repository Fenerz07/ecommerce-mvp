'use client';

import { useCart } from '../../../context/cartContext';
import styles from '../../../styles/links/products/bloomshirt.module.css';
import Image from 'next/image';
import products from '../../../data/products.json';

export default function BloomShirt() {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === 3);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    addToCart(item);
  };

  return (
    <div className={styles.productContainer}>
      <h1>{product.name}</h1>
      <div className={styles.productDetails}>
        <Image src={product.image} alt={product.name} width={500} height={500} className={styles.productImage} />
        <div className={styles.productInfo}>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>Prix: {product.price.toFixed(2)}€</p>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>Ajouter au Panier</button>
        </div>
      </div>
    </div>
  );
}
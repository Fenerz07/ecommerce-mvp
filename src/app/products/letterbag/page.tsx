'use client';

import { useCart } from '../../../context/cartContext';
import styles from '../../../styles/links/products/letterbag.module.css';
//import Image from 'next/image';
import products from '../../../data/products.json';

export default function LetterBag() {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === 1);

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
      <video autoPlay loop muted className={styles.video}>
        <source src="/letterbag.mp4" type="video/mp4" />
      </video>
      <div className={styles.productDetails}>
        <div className={styles.productInfo}>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>ACCEDER</button>
        </div>
      </div>
    </div>
  );
}
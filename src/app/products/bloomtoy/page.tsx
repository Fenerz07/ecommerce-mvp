'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../../../context/cartContext';
import styles from '../../../styles/links/products/bloomtoy.module.css';
import Image from 'next/image';
import products from '../../../data/products.json';

export default function BloomToy() {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === 2);

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

  const [imagePositions, setImagePositions] = useState([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      return Array.from({ length: 10 }, () => ({
        top: `${Math.random() * 90}%`,  // Étend la plage sur presque toute la hauteur
        left: `${Math.random() * 90}%`, // Étend la plage sur presque toute la largeur
      }));
    };    
    setImagePositions(generateRandomPositions());
  }, []);

  return (
    <div className={styles.productContainer}>
      <div className={styles.productDetails}>
        {imagePositions.map((pos, index) => (
          <div key={index} className={styles.imageWrapper} style={{ top: pos.top, left: pos.left }}>
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className={styles.productImage}
            />
          </div>
        ))}
        <div className={styles.productInfo}>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>ACCEDER</button>
        </div>
      </div>
    </div>
  );
}

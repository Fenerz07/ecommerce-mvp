'use client';

import styles from '../../styles/links/cart.module.css';
import Image from 'next/image';
import { useCart } from '../../context/cartContext';

export default function Cart() {
    const { cartItems } = useCart();
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <div className={styles.video}>
                <video autoPlay loop muted>
                    <source src="/file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={styles.cartContainer}>
                <div className={styles.cartItems}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <Image src={item.image} alt={item.name} className={styles.itemImage} width={100} height={100} />
                            <div className={styles.itemDetails}>
                                <h2>{item.name}</h2>
                                <p>Prix: {item.price.toFixed(2)}€</p>
                                <p>Quantité: {item.quantity}</p>
                            </div>
                            <div className={styles.itemTotal}>
                                <p>Total: {(item.price * item.quantity).toFixed(2)}€</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.cartTotal}>
                    <h2>Prix Total: {totalPrice.toFixed(2)}€</h2>
                    <button className={styles.checkoutButton}>Payer</button>
                </div>
            </div>
        </>
    );
}
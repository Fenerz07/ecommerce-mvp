'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/header.module.css';
import Links from 'next/link';
import { useCart } from '../context/cartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItemCount } = useCart();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <Image src="/svg/menu.svg" alt="Burger Menu" width={30} height={30} />
            </div>
            <div className={styles.logo}>
                <Links href="/" passHref>
                    <Image src="/logo.avif" alt="Logo" width={150} height={100} />
                </Links>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <Links href="/" passHref className={styles.navLink} onClick={closeMenu}>
                    Accueil
                </Links>
                <Links href="/about" passHref className={styles.navLink} onClick={closeMenu}>
                    Nous
                </Links>
                <Links href="/products" passHref className={styles.navLink} onClick={closeMenu}>
                    Produits
                </Links>
                <Links href="/contact" passHref className={styles.navLink} onClick={closeMenu}>
                    Contacter
                </Links>
            </nav>
            <div className={styles.cartAndConnect}>
                <div className={styles.cart}>
                    <Links href="/cart" passHref>
                        <Image src="svg/cart.svg" alt="Cart" width={100} height={30} />
                    </Links>
                    <p>panier ({cartItemCount})</p>
                </div>
                <div className={styles.connect}>
                    <Links href="/account" passHref>
                        <Image src="/svg/login.svg" alt="Connect" width={30} height={30} />
                    </Links>
                </div>
            </div>
        </header>
    );
}
import Image from 'next/image';
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.burgerMenu}>
                <Image src="/svg/menu.svg" alt="Burger Menu" width={30} height={30} />
            </div>
            <div className={styles.logo}>
                <Image src="/logo.avif" alt="Logo" width={100} height={100} />
            </div>
            <div className={styles.cartAndConnect}>
                <div className={styles.cart}>
                    <Image src="svg/cart.svg" alt="Cart" width={100} height={30} />
                    <p>panier (--)</p>
                </div>
                <div className={styles.connect}>
                    <Image src="/svg/login.svg" alt="Connect" width={30} height={30} />
                </div>
            </div>
        </header>
    ); 
}
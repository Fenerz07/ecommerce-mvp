import Image from 'next/image';
import styles from '../styles/header.module.css';
import Links from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.burgerMenu}>
                    <Image src="/svg/menu.svg" alt="Burger Menu" width={30} height={30} />
            </div>
            <div className={styles.logo}>
                <Links href="/" passHref>
                    <Image src="/logo.avif" alt="Logo" width={150} height={100} />
                </Links>
            </div>
            <div className={styles.cartAndConnect}>
                <div className={styles.cart}>
                    <Links href="/cart" passHref>
                        <Image src="svg/cart.svg" alt="Cart" width={100} height={30} />
                    </Links>
                    <p>panier (--)</p>
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
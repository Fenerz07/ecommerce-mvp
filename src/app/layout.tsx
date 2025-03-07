import React from 'react';
import  '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { CartProvider } from '../context/cartContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

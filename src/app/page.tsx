import styles from '../styles/home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { src: '/toy.png', alt: 'Product1', title: 'BloomToy', price: 'PRIX' },
  { src: '/bag.png', alt: 'Product2', title: 'LetterBag', price: 'PRIX' },
  { src: '/tshirt.png', alt: 'Product3', title: 'BloomShirt', price: 'PRIX' },
];

const nouveautes = [
  {
    id: 1,
    title: "Le Certificat d'Authenticité",
    description:
      "Pour vous remercier d'acheter un produit de notre gamme luxe 'Fait Main', la marque vous offre maintenant un certificat qui prouve que votre article est authentique, unique et original.",
    video: "/file3.mp4",
  },
  {
    id: 2,
    title: "L'Encyclopédie",
    description:
      "Fonctionnant comme un 'Pokedex', ce bestiaire nommé 'Encyclopédie' référence tous les personnages et créatures de l'histoire et sera régulièrement mis à jour en fonction de l'avancée de l'histoire.",
    video: "/file3.mp4",
  },
  {
    id: 3,
    title: "Les Cartes de Récit",
    description:
      "Pour tout achat d'un tee-shirt ou d'un article de la rubrique 'Boutique', vous recevrez une petite carte de Bienvenue afin de vous plonger dans notre histoire...",
    video: "/file3.mp4",
  },
];

export default function Home() {
  return (
    <>
      <div className={styles.video}>
        <video autoPlay loop muted>
          <source src="/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.about}>
        <video autoPlay loop muted>
          <source src="/file2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>Lambda Story</h1>
        <p>
          Lambda Story - &quot;Pas Seulement une marque de vêtement.. Mais un monde de Fantaisie et de Mystère, venez, installez-vous et profitez du voyage car BloomBoy arrive&quot;
        </p>
      </div>
      <div className={styles.products}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <Link href={`/products/${product.title.toLowerCase()}`} passHref>
              <Image src={product.src} alt={product.alt} width={300} height={300} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
      <section className={styles.nouveautes}>
        <h2 className={styles.title}>Les Nouveautés</h2>
        <div className={styles.container}>
          {nouveautes.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.number}>{item.id}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              {item.video && (
                <video className={styles.video} autoPlay muted loop width="50" height="50">
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
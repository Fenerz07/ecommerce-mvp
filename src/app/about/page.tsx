import styles from '../../styles/links/about.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.banner}>
                <Image src="/about_logo.avif" alt="Banner Image" width={900} height={340.5} />
            </div>
            <div className={styles.aboutContent}>
                <p>
                    LambdaStory vous pr&eacute;sente une histoire fantastique dont le personnage principal est BloomBoy.
                </p>
                <p>
                    A l&apos;avenir vous allez d&eacute;couvrir un monde riche en couleurs et en valeurs. Avec plein de personnages et de r&eacute;f&eacute;rences.
                </p>
                <p>
                    LambdaStory, c&apos;est l&apos;histoire d&apos;un petit gar&ccedil;on nomm&eacute; BloomBoy qui traverse un monde magique sans aucun souvenir de son pass&eacute; ici.
                </p>
                <p>
                    Accompagn&eacute; d&apos;un gros lapin blanc magique, Bloom Boy semble &ecirc;tre choisi pour prot&eacute;ger ce monde et le d&eacute;couvrir.
                </p>
                <p>
                    Entre recherche d&apos;identit&eacute; et exploration, venez profiter d&apos;un voyage hors du commun et d&eacute;couvrir de nouveaux horizons.
                </p>
            </div>
        </div>
    );
}
import Image from "next/image";
import styles from "./promoCard.module.scss";

export default function PromoCard({ id, src, alt, title, text }) {
  return (
    <div key={id} className={styles.promoCard}>
      <Image src={src} alt={alt} />
      <div className={styles.promoCardTypoContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

import Faq from "components/Faq";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Faq />
    </section>
  );
}

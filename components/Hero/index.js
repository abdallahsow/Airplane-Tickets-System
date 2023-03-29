import Promotions from "components/Promotions";
import Faq from "components/Faq";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Promotions />
      <Faq />
    </section>
  );
}

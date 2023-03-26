import { faqData } from "utils/data/hero";
import FaqCard from "./FaqCard";
import styles from "./faq.module.scss";

export default function Faq() {
  return (
    <section className={styles.faq}>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      {faqData.map(({ id, question, answer }) => (
        <div key={id} className={styles.faqCardContainer}>
          <FaqCard question={question} answer={answer} />
        </div>
      ))}
    </section>
  );
}

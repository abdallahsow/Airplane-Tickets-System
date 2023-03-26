import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import UpArrow from "public/images/hero/up-arrow.svg";
import DownArrow from "public/images/hero/down-arrow.svg";
import styles from "./faqCard.module.scss";

const FaqCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      onClick={() => setShowAnswer(!showAnswer)}
      className={classNames(styles.faqCard, { [styles.showAnswer]: showAnswer })}
    >
      <div className={styles.questionContainer}>
        <h3 className={styles.question}>{question}</h3>
        <Image src={showAnswer ? UpArrow : DownArrow} alt="down-icon" />
      </div>
      <p className={styles.answer}>{answer}</p>
    </div>
  );
};

export default FaqCard;

import { promoCardData } from "utils/data/hero";
import PromoCard from "./PromoCard";
import styles from "./promotions.module.scss";

const Promotions = () => {
  return (
    <div className={styles.promotions}>
      {promoCardData.map((item) => (
        <PromoCard {...item} />
      ))}
    </div>
  );
};

export default Promotions;

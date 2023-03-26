import Image from "next/image";
import { footerData, paymentMethods } from "utils/data/footer";
import FollowUs from "components/FollowUs";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className={styles.footer}>
      <FollowUs />
      <section className={styles.footerSectionTwo}>
        <div className={styles.footerDataContainer}>
          {footerData.map(({ id, title, listItems }) => (
            <div key={id} className={styles.footerData}>
              <h3 className={styles.footerDataTitle}>{title}</h3>
              <ul className={styles.footerDataList}>
                {listItems.map(({ id, text }) => (
                  <li key={id} className={styles.footerDataListItem}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footerExtraDetails}>
          <div className={styles.paymentMethods}>
            {paymentMethods.map(({ id, src, alt }) => (
              <div key={id}>
                <Image src={src} alt={alt} />
              </div>
            ))}
          </div>
          <p className={styles.footerExtraDetailsText}>
            Copyright &copy; {year} Ticket Airways
          </p>
        </div>
      </section>
    </section>
  );
}

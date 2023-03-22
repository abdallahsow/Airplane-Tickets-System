import Image from "next/image";
import DERMX360 from "images/derm-logo.png";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.headerContainer}>
        <Image src={DERMX360} alt="DERMX360" />
        <div className={styles.navItemsContainer}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>Plan & Book</li>
            <li className={styles.navItem}>Discover</li>
            <li className={styles.navItem}>Help</li>
            <li className={styles.navItem}>Sign Up</li>
            <li className={styles.navItem}>Sign In</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

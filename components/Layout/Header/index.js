import Image from "next/image";
import DERMX360 from "images/derm-logo.png";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image src={DERMX360} alt="DERMX360" width={100} height={100} />
      <div>
        <ul>
          <li>Plan & Book</li>
          <li>Discover</li>
          <li>Help</li>
          <li>Sign Up</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
}

import { useState } from "react";
import Image from "next/image";
import DERMX360 from "images/derm-logo.png";
import styles from "./header.module.scss";
import classNames from "classnames";

export default function Header() {
  const [tabId, setTabId] = useState(false);
  const navigationData = [
    {
      id: 1,
      name: "Plan & Book",
    },
    {
      id: 2,
      name: "Discover",
    },
    {
      id: 3,
      name: "Help",
    },
    {
      id: 4,
      name: "Sign Up",
    },
    {
      id: 5,
      name: "Sign In",
    },
  ];

  const handleActiveTab = (id) => {
    setTabId(id);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.headerContainer}>
        <Image src={DERMX360} alt="DERMX360" />
        <div className={styles.navItemsContainer}>
          <ul className={styles.navItems}>
            {navigationData.map((item) => (
              <li
                key={item.id}
                onClick={() => handleActiveTab(item.id)}
                className={classNames(styles.navItem, {
                  [styles.active]: tabId === item.id,
                })}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

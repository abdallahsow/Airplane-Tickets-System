import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import LandingPlane from "public/images/flightBooking/landing-plane.jpg";
import styles from "./bookFlight.module.scss";

export default function BookFlight() {
  const [activeTabId, setActiveTabId] = useState(1);

  const backgroundImgs = {
    backgroundImage: `url(${LandingPlane})`,
  };

  const tabs = [
    {
      id: 1,
      title: "Flight",
    },
    {
      id: 2,
      title: "Check-in / Manage booking",
    },
    {
      id: 3,
      title: "Flight Status",
    },
  ];

  return (
    <div style={backgroundImgs} className={styles.bookFlightBoxContainer}>
      <div className={styles.bookFlightBox}>
        <div className={styles.tabsContainer}>
          {tabs.map(({ id, title }) => (
            <h3
              key={id}
              onClick={() => setActiveTabId(id)}
              className={classNames(styles.tab, {
                [styles.selectedTab]: id === activeTabId,
              })}
            >
              {title}
            </h3>
          ))}
        </div>
        <div className={styles.temporary}>Hello</div>
      </div>
    </div>
  );
}

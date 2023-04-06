import { useState, useEffect } from "react";
import { Radio } from "antd";
import classNames from "classnames";
import RoundTrip from "./RoundTrip";
import { tabs } from "utils/data/hero";
import { fetchData } from "utils/fetchData";
import LandingPlane from "public/images/flightBooking/landing-plane.jpg";
import styles from "./bookFlight.module.scss";

export default function BookFlight() {
  const [activeTabId, setActiveTabId] = useState(1);
  const [radioValue, setRadioValue] = useState(1);
  const [countries, setCountries] = useState([]);
  const [showDropList, setShowDropList] = useState(false);

  const backgroundImgs = {
    backgroundImage: `url(${LandingPlane})`,
  };

  const handleOnChange = (e) => {
    setRadioValue(e.target.value);
  };

  useEffect(() => {
    fetchData("https://restcountries.com/v3.1/all").then((data) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  let component;
  switch (component) {
    case 1:
      radioValue === 2;
      component = <OneWay options={countries} />;
      break;
    case 2:
      radioValue === 3;
      component = <MultiCity options={countries} />;
      break;
    default:
      radioValue === 1;
      component = (
        <RoundTrip
          showDropList={showDropList}
          setShowDropList={setShowDropList}
          options={countries}
        />
      );
      break;
  }

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
        <div className={styles.bookFlightContent}>
          <Radio.Group
            onChange={handleOnChange}
            value={radioValue}
            className={styles.radioGroup}
          >
            <Radio value={1}>Round Trip </Radio>
            <Radio value={2}>One Way</Radio>
            <Radio value={3}>Multi City</Radio>
          </Radio.Group>
          {component}
        </div>
      </div>
    </div>
  );
}

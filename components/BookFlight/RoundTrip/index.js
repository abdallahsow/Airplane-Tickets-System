import { useState, useEffect, useRef } from "react";
import { Input } from "antd";
import classNames from "classnames";
import styles from "./roundTrip.module.scss";

export default function RoundTrip({ options, showDropList, setShowDropList }) {
  const [isClicked, setIsClicked] = useState(false);
  const droplistRef = useRef(null);

  const handleClickOutside = (e) => {
    if (droplistRef.current && !droplistRef.current.contains(e.target)) {
      setShowDropList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDestinationClick = () => {
    setIsClicked(true);
    setShowDropList(true);
  };

  const handleFromClick = () => {
    setIsClicked(false);
    setShowDropList(true);
  };

  return (
    <section className={styles.roundtrip}>
      <div className={styles.inputBoxContainer}>
        <Input onClick={handleFromClick} placeholder="From" />
        <Input onClick={handleDestinationClick} placeholder="To" />
      </div>
      <div
        className={classNames({
          [styles.dropListContainer]: showDropList,
          [styles.destination]: isClicked,
        })}
        ref={droplistRef}
      >
        {showDropList && (
          <div className={styles.dropList}>
            {options.map((option) => (
              <div key={option} className={styles.option}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import React from "react";
import styles from "./rainbowBoxStyles.css";

const RainbowBox = () => {
  return (
    <div>
      <div className={styles.firstBox} />
      <div className={styles.secondBox} />
    </div>
  );
};

export default RainbowBox;

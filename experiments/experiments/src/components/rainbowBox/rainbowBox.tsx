import React from "react";
import styles from "./rainbowBoxStyles.module.css";

const RainbowBox = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className={styles.firstBox} />
    </div>
  );
};

export default RainbowBox;

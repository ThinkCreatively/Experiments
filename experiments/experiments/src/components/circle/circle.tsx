import React from "react";
import styles from "./circleStyles.module.css";

const circle = () => {
  return (
    <div className={styles.circleContainer}>
      <div className={styles.circle} />
      <div className={styles.blackoutCircle} />
    </div>
  );
};

export default circle;

import styles from "./titleBox.module.css";
import React from "react";

const TitleBox = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.innerContainer}>
        <div>Name</div>
        <div>Button Text</div>
      </div>
    </div>
  );
};

export default TitleBox;

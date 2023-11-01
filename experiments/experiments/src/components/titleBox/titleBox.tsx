import { Button } from "@nextui-org/react";
import styles from "./titleBox.module.css";
import React from "react";

const TitleBox = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>Content</div>
        <Button className={styles.button}>Go </Button>
      </div>
    </div>
  );
};

export default TitleBox;

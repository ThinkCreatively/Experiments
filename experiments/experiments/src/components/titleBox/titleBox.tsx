import { Button } from "@nextui-org/react";
import { Inter } from "next/font/google";
import styles from "./titleBox.module.css";
import React from "react";

const cinzel = Inter({ subsets: ["latin"] });

const TitleBox = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.innerContainer}>
        <div className={cinzel.className}>Content</div>
        <Button className={styles.button}>Go</Button>
      </div>
    </div>
  );
};

export default TitleBox;

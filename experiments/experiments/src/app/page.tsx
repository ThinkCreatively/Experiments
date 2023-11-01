"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./page.module.css";
import { Button } from "@nextui-org/react";

const Home = () => {
  return (
    <NextUIProvider>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.innerContainer}>Experiments</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.textContainer}>Content</div>
            <Button className={styles.button}>Go </Button>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
};

export default Home;

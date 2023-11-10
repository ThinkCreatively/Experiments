"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./page.module.css";
import TitleBox from "../components/titleBox/titleBox";

const Home = () => {
  return (
    <NextUIProvider>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.titleText}>Playground</div>
        </div>
        <TitleBox />
      </main>
    </NextUIProvider>
  );
};

export default Home;

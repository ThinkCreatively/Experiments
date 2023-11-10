"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Cinzel } from "next/font/google";
import styles from "./page.module.css";
import TitleBox from "../components/titleBox/titleBox";

const cinzel = Cinzel({ subsets: ["latin"] });

const Home = () => {
  return (
    <NextUIProvider>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={cinzel.className} style={{ fontSize: "5rem" }}>
            Playground
          </div>
        </div>
        <TitleBox />
      </main>
    </NextUIProvider>
  );
};

export default Home;

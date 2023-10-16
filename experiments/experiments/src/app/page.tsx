import styles from "./page.module.css";
import RainbowBox from "../components/rainbowBox/rainbowBox";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <RainbowBox />
        <div className={styles.circle} />
      </div>
    </main>
  );
}

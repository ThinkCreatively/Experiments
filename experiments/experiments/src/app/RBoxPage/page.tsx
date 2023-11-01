import styles from "../page.module.css";
import RainbowBox from "../../components/rainbowBox/rainbowBox";
import Circle from "../../components/circle/circle";

const RBoxPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.outterContainer}>
        <RainbowBox />
        <Circle />
      </div>
    </main>
  );
};

export default RBoxPage;

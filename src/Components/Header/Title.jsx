import styles from "./Title.module.css";
import ironIcon from "../../assets/IronIcon.svg";

export default function Title() {
  return (
    <div className={styles.title}>
      <img alt="icon" src={ironIcon} className={styles.icon} />
      <h1>Kelsier's Board</h1>
    </div>
  );
}

import styles from "./Header.module.css";
import Title from "../Components/Header/Title";

export default function Header() {
  return (
    <div className={styles.header}>
      <Title />
      <p className={styles.headerText}>
        A task manager. Create projects and divide them into smaller, individual
        tasks.
      </p>
    </div>
  );
}

import styles from "./TaskList.module.css";

export default function Tasklist({ children }) {
  return <div className={styles.tasklist}>{children}</div>;
}

import styles from "../../assets/TaskFrame.module.css";
import Button from "../Button";
export default function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <div className={styles.taskItem}>
      <Button icon={"cancel"} onClick={() => onDeleteTask(task.id)} />
      {/* <Button icon={"edit"} /> */}
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={() => onToggleTask(task.id)}
      />
      <span>{task.task}</span>
    </div>
  );
}

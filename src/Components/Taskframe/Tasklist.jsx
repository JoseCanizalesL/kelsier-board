import TaskItem from "./TaskItem";
export default function Tasklist({
  styles,
  selectedProject,
  onDeleteTask,
  onToggleTask,
}) {
  return (
    <div className={styles.tasklist}>
      {selectedProject.taskList.map((task) => (
        <TaskItem
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
          key={task.id}
        />
      ))}
    </div>
  );
}

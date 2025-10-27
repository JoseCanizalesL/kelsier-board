import styles from "../../assets/Taskframe.module.css";
import Form from "../Form";
import Tasklist from "./Tasklist";

export default function Taskframe({
  selectedProjectId,
  projectList,
  onEditProject,
}) {
  const selectedProjectBody = projectList.find(
    (curr) => curr.id === selectedProjectId
  );
  function handleAddTask(task) {
    if (!selectedProjectBody) return;
    const updatedProject = {
      ...selectedProjectBody,
      taskList: [
        ...selectedProjectBody.taskList,
        { id: crypto.randomUUID(), task: task.trim(), isComplete: false },
      ],
    };
    onEditProject(updatedProject);
  }
  function handleDeleteTask(taskId) {
    if (!selectedProjectBody) return;
    const updatedProject = {
      ...selectedProjectBody,
      taskList: selectedProjectBody.taskList.filter(
        (task) => task.id !== taskId
      ),
    };
    onEditProject(updatedProject);
  }
  function handleToggleTask(taskId) {
    if (!selectedProjectBody) return;
    const updatedProject = {
      ...selectedProjectBody,
      taskList: selectedProjectBody.taskList.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      ),
    };
    onEditProject(updatedProject);
  }
  return (
    <div className={styles.taskframe}>
      {!selectedProjectId ? (
        <h2>Please select a project from the sidebar</h2>
      ) : (
        <>
          <h2>{selectedProjectBody.title}</h2>
          <Form styles={styles} onSubmit={handleAddTask} />
        </>
      )}
      {selectedProjectBody && (
        <Tasklist
          styles={styles}
          selectedProject={selectedProjectBody}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
        />
      )}
    </div>
  );
}

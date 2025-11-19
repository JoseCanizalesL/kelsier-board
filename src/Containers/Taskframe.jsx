import styles from "./Taskframe.module.css";

import { useProjects } from "../Context/ProjectProvider";

import Form from "../Components/Form";
import Tasklist from "../Components/Taskframe/Tasklist";
import TaskItem from "../Components/Taskframe/TaskItem";

export default function Taskframe() {
  const { selectedProjectId, projectList, onEditProject } = useProjects();

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
          <Form onSubmit={handleAddTask} />
        </>
      )}
      {selectedProjectBody && (
        <Tasklist>
          {selectedProjectBody.taskList.map((task) => (
            <TaskItem
              task={task}
              onDeleteTask={handleDeleteTask}
              onToggleTask={handleToggleTask}
              key={task.id}
            />
          ))}
        </Tasklist>
      )}
    </div>
  );
}

import styles from "./Sidebar.module.css";
import ProjectList from "../Components/Sidebar/ProjectList";
import Form from "../Components/Form";
import { useProjects } from "../Context/ProjectProvider";

export default function Sidebar() {
  const { projectList, onAddProject } = useProjects();
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Your Projects</h2>
      <Form onSubmit={onAddProject} />
      {projectList.length > 0 ? (
        <ProjectList />
      ) : (
        <h3>Start by adding a project with the input above!</h3>
      )}
    </div>
  );
}

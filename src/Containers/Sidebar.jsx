import styles from "../assets/Sidebar.module.css";
import ProjectList from "../Components/Sidebar/ProjectList";
import Form from "../Components/Form";

export default function Sidebar({
  projecList,
  onAddProject,
  onDeleteProject,
  onSelectProject,
}) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Your Projects</h2>
      <Form styles={styles} onSubmit={onAddProject} />
      {projecList.length > 0 ? (
        <ProjectList
          styles={styles}
          projectList={projecList}
          onDeleteProject={onDeleteProject}
          onSelectProject={onSelectProject}
        />
      ) : (
        <h3>Start by adding a project with the input above!</h3>
      )}
    </div>
  );
}

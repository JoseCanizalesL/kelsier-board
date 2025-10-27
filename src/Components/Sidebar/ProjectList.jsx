import ProjectItem from "./ProjectItem";

export default function ProjectList({
  styles,
  projectList,
  onDeleteProject,
  onSelectProject,
}) {
  return (
    <div className={`${styles.projectList}`}>
      {projectList.map((project) => (
        <ProjectItem
          styles={styles}
          project={project}
          onDeleteProject={onDeleteProject}
          onSelectProject={onSelectProject}
          key={project.id}
        />
      ))}
    </div>
  );
}

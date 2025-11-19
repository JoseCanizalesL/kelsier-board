import { useProjects } from "../../Context/ProjectProvider";
import ProjectItem from "./ProjectItem";

import styles from "./ProjectList.module.css";

export default function ProjectList() {
  const { projectList } = useProjects();
  return (
    <div className={`${styles.projectList}`}>
      {projectList.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

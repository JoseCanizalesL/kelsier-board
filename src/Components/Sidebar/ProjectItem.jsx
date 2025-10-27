import Button from "../Button";
export default function ProjectItem({
  styles,
  project,
  onDeleteProject,
  onSelectProject,
}) {
  const isFinished =
    project.taskList.length > 0
      ? project.taskList.reduce(
          (status, current) => status && current.isComplete,
          true
        )
      : false;
  return (
    <div className={`${styles.projectItem}`}>
      <Button icon={"cancel"} onClick={() => onDeleteProject(project.id)} />
      {/* <Button icon={"edit"} onClick={() => alert("Editado")} /> */}
      <input type="checkbox" disabled checked={isFinished} />
      <span
        className={`${styles.projectItemContent}`}
        onClick={() => onSelectProject(project.id)}
      >
        <span>{isFinished ? <s>{project.title}</s> : project.title}</span>
      </span>
    </div>
  );
}

/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const initialProyects = [
  {
    id: "1",
    title: "Defeat the lord ruler",
    taskList: [
      { id: "1", task: "Train Vin", isComplete: true },
      { id: "2", task: "Recruit an army", isComplete: true },
      {
        id: "3",
        task: "Learn how to use the eleventh metal",
        isComplete: true,
      },
    ],
  },
  {
    id: "2",
    title: "Terminate the Final Empire",
    taskList: [
      {
        id: "1",
        task: "Make the nobles go to war against each other.",
        isComplete: false,
      },
      {
        id: "2",
        task: "Gather information about the Lord Ruler's atium deposit",
        isComplete: false,
      },
    ],
  },
];

const ProjectContext = createContext();

function ProjectProvider({ children }) {
  const [projectList, setProjectList] = useState(initialProyects);
  function handleAddProject(title) {
    const newTitle = String(title).trim();
    if (!newTitle) {
      alert("Project cannot be empty");
      return;
    }
    setProjectList((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: newTitle, taskList: [] },
    ]);
  }
  function handleDeleteProject(id) {
    setSelectedProjectId((prev) => (prev && prev === id ? null : prev));
    setProjectList((prev) => prev.filter((project) => project.id != id));
  }
  function handleEditProject(editedProject) {
    setProjectList((prev) =>
      prev.map((project) =>
        project.id === editedProject.id ? editedProject : project
      )
    );
  }

  const [selectedProjectId, setSelectedProjectId] = useState(null);
  function handleSelectProject(id) {
    setSelectedProjectId((prev) => (prev === id ? null : id));
  }

  return (
    <ProjectContext.Provider
      value={{
        projectList,
        onAddProject: handleAddProject,
        onDeleteProject: handleDeleteProject,
        onEditProject: handleEditProject,
        selectedProjectId,
        onSelectProject: handleSelectProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) throw new Error("Context used outside provider");
  return context;
}

export { ProjectProvider, useProjects };

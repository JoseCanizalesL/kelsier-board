import "./assets/index.css";
import Header from "./Containers/Header";
import Sidebar from "./Containers/Sidebar";
import Taskframe from "./Components/Taskframe/Taskframe";
import { useState } from "react";

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

function App() {
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
    setSelectedProjectId((prev) => (prev && id === id ? null : prev));
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
    setSelectedProjectId(id);
  }

  return (
    <>
      <Header />
      <div className="content">
        <Sidebar
          projecList={projectList}
          onAddProject={handleAddProject}
          onDeleteProject={handleDeleteProject}
          onSelectProject={handleSelectProject}
        />
        <Taskframe
          selectedProjectId={selectedProjectId}
          projectList={projectList}
          onEditProject={handleEditProject}
        />
      </div>
    </>
  );
}

export default App;

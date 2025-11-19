import "./assets/index.css";

import { ProjectProvider } from "./Context/ProjectProvider";

import Header from "./Containers/Header";
import Sidebar from "./Containers/Sidebar";
import Taskframe from "./Containers/Taskframe";
import BodyLayout from "./Containers/BodyLayout";

function App() {
  return (
    <>
      <Header />
      <ProjectProvider>
        <BodyLayout>
          <Sidebar />
          <Taskframe />
        </BodyLayout>
      </ProjectProvider>
    </>
  );
}

export default App;

import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import MyCourses from "./pages/MyCourses/MyCourses";
import Explore from "./pages/Explore/Explore";
import Roadmap from "./pages/Roadmap/Roadmap";
import Profile from "./pages/Profile/Profile";
import Animate from "./components/Animate/Animate";

function App() {
  const [view, setView] = useState("home");
  const views = {
    home: <Home />,
    explore: <Explore />,
    roadmaps: <Roadmap />,
    myCourses: <MyCourses />,
    profile: <Profile />,
  };
  return (
    <div className="flex h-screen">
      <div className="grow-1 max-w-xs">
        <Sidebar setView={setView} view={view} />
      </div>
      <main className="grow-4 pt-20 pb-6 pl-16 overflow-y-auto overflow-x-hidden">
        <Animate id={view}>{views[view]}</Animate>
      </main>
    </div>
  );
}

export default App;

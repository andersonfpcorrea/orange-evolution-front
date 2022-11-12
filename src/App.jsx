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
    <div className="flex flex-col-reverse min-[960px]:flex-row min-[960px]:h-screen">
      <div>
        <Sidebar setView={setView} view={view} />
      </div>
      <main className="pt-14 pb-36 min-[960px]:py-20 px-8 min-[960px]:px-16 overflow-y-auto w-full">
        <Animate id={view}>{views[view]}</Animate>
      </main>
    </div>
  );
}

export default App;

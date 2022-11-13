import { useState } from "react";
import MyCourses from "./pages/MyCourses/MyCourses";
import Profile from "./pages/Profile/Profile";
import Animate from "./components/Animate/Animate";
import SidebarRaw from "./components/SidebarRaw/SidebarRaw";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserTests from "./pages/UserTests/UserTests";

function AppWelcome() {
  const [view, setView] = useState("login");
  const views = {
    login: <Login callback={() => setView("signup")} />,
    signup: <Signup callback={() => setView("userTests")} />,
    userTests: <UserTests />,
    myCourses: <MyCourses />,
    profile: <Profile />,
  };
  return (
    <div className="flex flex-col-reverse min-[960px]:flex-row min-[960px]:h-screen">
      <div>
        <SidebarRaw setView={setView} view={view} />
      </div>
      <main className="overflow-y-auto w-full pt-14 pb-36 px-6 min-[960px]:py-20 min-[960px]:px-16 ">
        <Animate id={view}>{views[view]}</Animate>
      </main>
    </div>
  );
}

export default AppWelcome;

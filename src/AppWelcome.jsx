import { Outlet, useLocation } from "react-router-dom";
import Animate from "./components/Animate/Animate";
import SidebarRaw from "./components/SidebarRaw/SidebarRaw";

function AppWelcome() {
  const { key } = useLocation();
  return (
    <div className="flex flex-col-reverse min-[960px]:flex-row h-screen">
      <div className="max-[1069px]:hidden">
        <SidebarRaw />
      </div>
      <main className="max-[1069px]:grid max-[1069px]:place-items-center overflow-y-auto w-full pt-14 pb-36 px-6 min-[960px]:py-20 min-[960px]:px-32 ">
        <Animate id={key} className="h-full">
          <Outlet />
        </Animate>
      </main>
    </div>
  );
}

export default AppWelcome;

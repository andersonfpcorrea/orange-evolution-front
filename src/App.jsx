import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Animate from "./components/Animate/Animate";

function App() {
  const { key } = useLocation();
  return (
    <div className="flex flex-col-reverse min-[960px]:flex-row min-[960px]:h-screen">
      <div>
        <Sidebar />
      </div>
      <main className="overflow-y-auto w-full pt-14 pb-36 px-6 min-[960px]:py-20 min-[960px]:px-16 ">
        <Animate id={key}>
          <Outlet />
        </Animate>
      </main>
    </div>
  );
}

export default App;

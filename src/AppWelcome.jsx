import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./context/context";
import Animate from "./components/Animate/Animate";
import SidebarRaw from "./components/SidebarRaw/SidebarRaw";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserTests from "./pages/UserTests/UserTests";

function AppWelcome() {
  const [view, setView] = useState("login");

  const {
    quiz: { questions, options },
    result,
    setResult,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const views = {
    login: <Login callback={() => setView("signup")} />,
    signup: <Signup callback={() => setView("userTests")} />,
    userTests: (
      <UserTests
        callback={() => navigate("/testResult")}
        setResult={setResult}
        result={result}
        quiz={{ questions, options }}
      />
    ),
  };
  return (
    <div className="flex flex-col-reverse min-[960px]:flex-row min-[960px]:h-screen">
      <div className="max-[1069px]:hidden">
        <SidebarRaw setView={setView} view={view} />
      </div>
      <main className="max-[1069px]:grid max-[1069px]:place-items-center overflow-y-auto w-full pt-14 pb-36 px-6 min-[960px]:py-20 min-[960px]:px-16 ">
        <Animate id={view} className="h-full">
          {views[view]}
        </Animate>
      </main>
    </div>
  );
}

export default AppWelcome;

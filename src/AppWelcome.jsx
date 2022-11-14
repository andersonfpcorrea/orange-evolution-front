import { useContext, useState } from "react";
import AppContext from "./context/context";
import Animate from "./components/Animate/Animate";
import SidebarRaw from "./components/SidebarRaw/SidebarRaw";
import TestResult from "./components/TestResult/TestResult";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserTests from "./pages/UserTests/UserTests";

function AppWelcome() {
  const [view, setView] = useState("login");
  const [result, setResult] = useState(0);
  const {
    quiz: { questions, options },
  } = useContext(AppContext);
  const views = {
    login: <Login callback={() => setView("signup")} />,
    signup: <Signup callback={() => setView("userTests")} />,
    userTests: (
      <UserTests
        callback={() => setView("testResult")}
        setResult={setResult}
        result={result}
        quiz={{ questions, options }}
      />
    ),
    testResult: (
      <TestResult
        correctAnswers={result}
        totalOfQuestions={Object.keys(questions).length}
      />
    ),
  };
  return (
    <div className="flex flex-col-reverse min-[960px]:flex-row min-[960px]:h-screen">
      <div>
        <SidebarRaw setView={setView} view={view} />
      </div>
      <main className="overflow-y-auto w-full pt-14 pb-36 px-6 min-[960px]:py-20 min-[960px]:px-16 ">
        <Animate id={view} className="h-full">
          {views[view]}
        </Animate>
      </main>
    </div>
  );
}

export default AppWelcome;

import { useState, useContext } from "react";
import AppContext from "./context/context";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import MyCourses from "./pages/MyCourses/MyCourses";
import Explore from "./pages/Explore/Explore";
import Roadmap from "./pages/Roadmap/Roadmap";
import Profile from "./pages/Profile/Profile";
import Animate from "./components/Animate/Animate";
import TestResult from "./components/TestResult/TestResult";

function App({ defaultView = "home" }) {
  const [view, setView] = useState(defaultView);
  const {
    result,
    quiz: { questions },
  } = useContext(AppContext);
  const views = {
    home: <Home />,
    explore: <Explore />,
    roadmaps: <Roadmap />,
    myCourses: <MyCourses />,
    profile: <Profile />,
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
        <Sidebar setView={setView} view={view} />
      </div>
      <main className="overflow-y-auto w-full pt-14 pb-36 px-6 min-[960px]:py-20 min-[960px]:px-16 ">
        <Animate id={view}>{views[view]}</Animate>
      </main>
    </div>
  );
}

export default App;

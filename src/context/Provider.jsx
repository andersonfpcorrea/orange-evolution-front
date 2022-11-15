import { useState, useMemo } from "react";
import AppContext from "./context";
import {
  user,
  progress,
  currentRoadmapCourses,
  currentRoadmapVideos,
  roadmaps,
  quiz,
} from "../mockUserData";

function AppProvider({ children }) {
  const qtyOfQuestions = Object.keys(quiz.questions).length;
  const [result, setResult] = useState(0);
  const [totalQuestions] = useState(qtyOfQuestions);

  const store = useMemo(
    () => ({
      user,
      progress,
      currentRoadmapCourses,
      currentRoadmapVideos,
      roadmaps,
      quiz,
      result,
      setResult,
      totalQuestions,
    }),
    [result]
  );

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default AppProvider;

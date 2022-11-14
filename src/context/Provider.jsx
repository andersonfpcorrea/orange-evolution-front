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
  const [result, setResult] = useState(0);

  const data = {
    user,
    progress,
    currentRoadmapCourses,
    currentRoadmapVideos,
    roadmaps,
    quiz,
  };

  const store = useMemo(
    () => ({
      ...data,
      result,
      setResult,
    }),
    [result]
  );

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default AppProvider;

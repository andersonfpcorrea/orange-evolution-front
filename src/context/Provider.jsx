import AppContext from "./context";
import {
  user,
  progress,
  currentRoadmapCourses,
  currentRoadmapVideos,
  roadmaps,
  quiz,
} from "../mockUserData";

const store = {
  user,
  progress,
  currentRoadmapCourses,
  currentRoadmapVideos,
  roadmaps,
  quiz,
};

function AppProvider({ children }) {
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default AppProvider;

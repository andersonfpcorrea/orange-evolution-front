import AppContext from './context';
import {
  user,
  progress,
  currentRoadmapCourses,
  currentRoadmapVideos,
  roadmaps,
} from '../mockUserData';

const store = {
  user,
  progress,
  currentRoadmapCourses,
  currentRoadmapVideos,
  roadmaps,
};

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppProvider;

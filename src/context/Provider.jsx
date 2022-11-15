import { useState, useMemo, useEffect } from "react";
import AppContext from "./context";
import {
  quiz,
  userMock,
  currentRoadmapCoursesMock,
  currentRoadmapVideosMock,
  roadmapsMock,
} from "../mockUserData";

function AppProvider({ children }) {
  const qtyOfQuestions = Object.keys(quiz.questions).length;
  const [result, setResult] = useState(0);
  const [totalQuestions] = useState(qtyOfQuestions);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(userMock);
  const [roadmaps, setRoadmaps] = useState(roadmapsMock);
  const [currentRoadmapCourses, setCurrentRoadmapCourses] = useState(
    currentRoadmapCoursesMock
  );
  const [currentRoadmapVideos, setCurrentRoadmapVideos] = useState(
    currentRoadmapVideosMock
  );

  const { REACT_APP_PROTOCOL, REACT_APP_URL } = process.env;

  // Loads right away updated roadmap info:
  useEffect(() => {
    fetch(`${REACT_APP_PROTOCOL}://${REACT_APP_URL}/roadmaps`)
      .then((res) => res.json())
      .then((data) => {
        setRoadmaps(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // After the user identifies himself, fetch courses of his roadmap:
  useEffect(() => {
    const roadmapString = user.currentRoadmap?.split(" ")[1];
    fetch(
      `${REACT_APP_PROTOCOL}://${REACT_APP_URL}/courses?roadmap=${roadmapString}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentRoadmapCourses(data))
      .catch((err) => console.error(err));
  }, [user.currentRoadmap]);

  // After the user identifies himself, fetch video courses related to the roadmap, to be rendered in the app:
  useEffect(() => {
    const roadmapString = user.currentRoadmap?.split(" ")[1];
    fetch(
      `${REACT_APP_PROTOCOL}://${REACT_APP_URL}/courses?roadmap=${roadmapString}&type=Video`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentRoadmapVideos(data);
      })
      .catch((err) => console.error(err));
  }, [user.currentRoadmap]);

  const store = useMemo(
    () => ({
      user,
      setUser,
      currentRoadmapCourses,
      setCurrentRoadmapCourses,
      currentRoadmapVideos,
      roadmaps,
      quiz,
      result,
      setResult,
      totalQuestions,
      token,
      setToken,
    }),
    [
      result,
      setResult,
      token,
      setToken,
      user,
      setUser,
      roadmaps,
      currentRoadmapVideos,
      currentRoadmapCourses,
    ]
  );

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default AppProvider;

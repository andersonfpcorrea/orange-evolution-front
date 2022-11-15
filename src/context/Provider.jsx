import { useState, useMemo, useEffect } from "react";
import AppContext from "./context";
import { quiz } from "../mockUserData";

function AppProvider({ children }) {
  const qtyOfQuestions = Object.keys(quiz.questions).length;
  const [result, setResult] = useState(0);
  const [totalQuestions] = useState(qtyOfQuestions);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    id: 1,
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    currentRoadmap: "",
    progress: 0,
  });
  const [roadmaps, setRoadmaps] = useState({ quantity: null, roadmaps: [] });
  const [currentRoadmapCourses, setCurrentRoadmapCourses] = useState({
    quantity: null,
    courses: [],
  });
  const [currentRoadmapVideos, setCurrentRoadmapVideos] = useState({
    quantity: null,
    courses: [],
  });

  const { REACT_APP_PROTOCOL, REACT_APP_URL } = process.env;

  useEffect(() => {
    fetch(`${REACT_APP_PROTOCOL}://${REACT_APP_URL}/roadmaps`)
      .then((res) => res.json())
      .then((data) => {
        setRoadmaps(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const roadmapString = user.currentRoadmap?.split(" ")[1];
    fetch(
      `${REACT_APP_PROTOCOL}://${REACT_APP_URL}/courses?roadmap=${roadmapString}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentRoadmapCourses(data))
      .catch((err) => console.error(err));
  }, [user.currentRoadmap]);

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
      currentRoadmapVideos,
      roadmaps,
      quiz,
      result,
      setResult,
      totalQuestions,
      token,
      setToken,
    }),
    [result, token, user, roadmaps, currentRoadmapVideos, currentRoadmapCourses]
  );

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default AppProvider;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AppWelcome from "../AppWelcome";
import TestResult from "../components/TestResult/TestResult";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Explore from "../pages/Explore/Explore";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCourses from "../pages/MyCourses/MyCourses";
import Profile from "../pages/Profile/Profile";
import Roadmap from "../pages/Roadmap/Roadmap";
import Signup from "../pages/Signup/Signup";
import UserTests from "../pages/UserTests/UserTests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWelcome />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "test",
        element: <UserTests />,
      },
    ],
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "roadmaps",
        element: <Roadmap />,
      },
      {
        path: "courses",
        element: <MyCourses />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "result",
        element: <TestResult />,
      },
    ],
  },
]);

export default router;

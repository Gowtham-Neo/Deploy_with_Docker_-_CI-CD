import React from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = React.lazy(() => import("../pages/Home"));
const Signin = React.lazy(() => import("../pages/Signin"));
const Signup = React.lazy(() => import("../pages/Signup"));
const Logout = React.lazy(() => import("../pages/Logout"));
const ChangePassword = React.lazy(() => import("../pages/ChangePassword"));
import NotFoundPage from "../pages/NotFoundPage";
import PlayerList from "../pages/PlayerList";
import AddPlayer from "../pages/AddPlayer";

const router = createBrowserRouter([
  {
    path: "/",  
    element: <Home/>
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/change-password",
    element: <ChangePassword />
  },
  {
    path: "/PlayersList",
    element: <PlayerList />
  },
  {
    path: "/AddPlayers",
    element: <AddPlayer />
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
  
]);
export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Login from "../auth/Login";
import Register from "../auth/Register";
import AvailableCamp from "../Page/AvailableCamp";
import CampDetails from "../Components/campDetails";
import WelcomeDashboard from "../Components/Dashboard/WelcomeDashboard";
import OrganizerProfile from "../Page/Dashboard/OrganizerProfile";
import UserProfile from "../Page/Dashboard/UserProfile";
import PrivateRoute from "./PrivateRoute";
import AddCamp from "../Page/Dashboard/AddCamp";
import { ManageCamps } from "../Page/Dashboard/ManageCamps";
import ManageRegisteredCamps from "../Page/Dashboard/ManageRegisteredCamps";
import Analytics from "../Page/Dashboard/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableCamp",
        element: <AvailableCamp />,
      },
      {
        path: "/campsDetails/:id",
        element: <CampDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <WelcomeDashboard />
          </PrivateRoute>
        ),
      },

      // organizer related
      {
        path: "organizerProfile",
        element: (
          <PrivateRoute>
            <OrganizerProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "add-camp",
        element: (
          <PrivateRoute>
            <AddCamp />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-camps",
        element: (
          <PrivateRoute>
            <ManageCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-registered-camps",
        element: (
          <PrivateRoute>
            <ManageRegisteredCamps />
          </PrivateRoute>
        ),
      },

      // participant related
      {
        path: "userProfile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <PrivateRoute>
            <Analytics />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;

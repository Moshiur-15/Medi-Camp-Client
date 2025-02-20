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
import Profile from "../Page/Dashboard/Profile";
import UserProfile from "../Page/Dashboard/UserProfile";
import PrivateRoute from "./PrivateRoute";
import AddCamp from "../Page/Dashboard/AddCamp";
import { ManageCamps } from "../Page/Dashboard/ManageCamps";
import ManageRegisteredCamps from "../Page/Dashboard/ManageRegisteredCamps";
import Analytics from "../Page/Dashboard/Analytics";
import PaymentHistory from "../Page/Dashboard/PaymentHistory";
import RegisteredCamps from "../Page/Dashboard/RegisteredCamps";
import OrganizerRoute from "./OrganizerRoute";
import ParticipantRoute from "./ParticipantRoute";
import Gallery from "../Components/Gallery";
import AboutUs from "../Components/AboutUs";

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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/campsDetails/:id",
        element: <CampDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
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

      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      // organizer related
      {
        path: "add-camp",
        element: (
          <PrivateRoute>
            <OrganizerRoute>
              <AddCamp />
            </OrganizerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-camps",
        element: (
          <PrivateRoute>
            <OrganizerRoute>
              <ManageCamps />
            </OrganizerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-registered-camps",
        element: (
          <PrivateRoute>
            <OrganizerRoute>
              <ManageRegisteredCamps />
            </OrganizerRoute>
          </PrivateRoute>
        ),
      },

      // participant related
      {
        path: "analytics",
        element: (
          <PrivateRoute>
            <ParticipantRoute>
              <Analytics />
            </ParticipantRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "registered-camps",
        element: (
          <PrivateRoute>
            <ParticipantRoute>
              <RegisteredCamps />
            </ParticipantRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <ParticipantRoute>
              <PaymentHistory />
            </ParticipantRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;

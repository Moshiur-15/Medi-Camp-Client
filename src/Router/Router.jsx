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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/availableCamp',
        element:<AvailableCamp/>
      },
      {
        path:'/campsDetails/:id',
        element:<CampDetails/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <WelcomeDashboard/>
      },
      {
        path: 'organizerProfile',
        element: <OrganizerProfile/>
      },
      {
        path: 'userProfile',
        element: <UserProfile/>
      },
      {
        path: 'add-camp',
        element: <AddCamp/>
      },
    ]
  }
]);
export default router
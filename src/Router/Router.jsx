import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Login from "../auth/Login";
import Register from "../auth/Register";
import AvailableCamp from "../Page/AvailableCamp";


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
    element: <Dashboard/>,
    children: [
      {
        path: '/dashboard',
        element: <div>Dashboard</div>
      }
    ]
  }
]);
export default router
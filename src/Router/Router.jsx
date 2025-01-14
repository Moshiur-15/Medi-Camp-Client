import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
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
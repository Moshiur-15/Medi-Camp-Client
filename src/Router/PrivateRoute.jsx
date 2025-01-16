import React from "react";
import useAuth from "../Hook/useAuth";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <LoadingSpinner/>;
  if (user) return children;
  return <Navigate state={location?.pathname} to="/login" />;
};

export default PrivateRoute;
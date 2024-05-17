import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Home = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // if (!isAuthenticated) return <Navigate to={"/Login"} />;
  return <div>Home</div>;
};

export default Home;

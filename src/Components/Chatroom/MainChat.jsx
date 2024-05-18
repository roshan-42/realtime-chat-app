import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Inbox from "./Inbox";
import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";

// Main screen for chat
const MainChat = () => {
  const navigate = useNavigate();
  // Get state from redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const receiverId = useSelector((state) => state.chat.receiverId);

  // If not authenticated redirect to login
  if (!isAuthenticated) return <Navigate to={"/login"} />;

  // Function to logout the users
  const logoutUser = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      localStorage.removeItem("userinfo");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen rounded-lg shadow-lg w-full flex flex-col md:flex-row ">
      <button
        onClick={logoutUser}
        className="bg-orange-500 absolute right-5 mt-2 px-3 rounded-md text-white"
      >
        Logout
      </button>
      <Sidebar />
      <div className="flex flex-col w-full ">
        {receiverId ? <Inbox /> : <div>Start a conversation</div>}
      </div>
    </div>
  );
};

export default MainChat;

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SendMessage from "./SendMessage";
import Inbox from "./Inbox";
import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";

const MainChat = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // if (!isAuthenticated) return <Navigate to={"/Login"} />;
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) return <Navigate to={"/login"} />;
  // ==============Handle my messages=================
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const receiverId = useSelector((state) => state.chat.receiverId);
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      localStorage.removeItem("userinfo");
    } catch (error) {
      console.error(error);
    }
  };
  const check = useSelector((state) => state.auth);
  console.log("check_________", check);
  return (
    <div className="relative min-h-screen rounded-lg shadow-lg w-full flex flex-col md:flex-row ">
      <button
        onClick={logoutUser}
        className="bg-orange-500 absolute right-5 mt-2 px-3 rounded-md text-white"
      >
        Logout
      </button>
      {/* Users list */}
      <Sidebar />
      <div className="flex flex-col w-full ">
        {receiverId ? <Inbox /> : <div>Start a conversation</div>}
      </div>
    </div>
  );
};

export default MainChat;

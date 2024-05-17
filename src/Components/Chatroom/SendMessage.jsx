import React, { useState } from "react";
import { auth, db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";

const SendMessage = () => {
  const receiverId = useSelector((state) => state.chat.receiverId);
  const userId = useSelector((state) => state.auth.userInfo.uid);

  const [message, setMessage] = useState("");

  // const senderInfo = localStorage.getItem("userinfo");
  // const parsedInfo = senderInfo ? JSON.parse(senderInfo) : null;
  // console.log("userinfo__________________", parsedInfo.uid);
  // const Sender = parsedInfo.uid;

  // ===============To set message to database===================

  const SendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Enter Valid Message");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        senderId: userId,
        receiverId: receiverId,
        createdAt: new Date().toISOString(),
      });
      setMessage("");
      console.log("Message Sent ");
    } catch (error) {
      console.error("Error sending message", error);
    }
  };
  return (
    <div className="flex items-center mt-4">
      <form
        className="w-full flex"
        onSubmit={(e) => {
          SendMessage(e);
        }}
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
          placeholder="Type your message"
          className="w-full flex-grow border border-gray-300 rounded-lg  py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;

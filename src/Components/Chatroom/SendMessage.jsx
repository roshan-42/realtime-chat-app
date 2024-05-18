import React, { useState } from "react";
import { auth, db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";

const SendMessage = () => {
  // Get state from redux
  const receiverId = useSelector((state) => state.chat.receiverId);
  const userId = useSelector((state) => state.auth.userInfo.uid);

  // States for messages
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Store messages in firestore
  const SendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Enter Valid Message");
      return;
    }
    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
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
          disabled={isLoading}
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default SendMessage;

import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import SendMessage from "./SendMessage";
import Sent from "./messages/Sent";
import Received from "./messages/Received";
const Inbox = () => {
  const { userInfoList, receiverId } = useSelector((state) => state.chat);
  const userinfo = userInfoList.find((user) => user.userId == receiverId);
  const userId = useSelector((state) => state.auth.userInfo.uid);
  const x = useSelector((state) => state.auth.userInfo);
  console.log("userinfocheckxxxxxxxxxxxxxxxxxxxxx", x);
  const [messages, setMessages] = useState([]);
  console.log("Messages_____________________", messages);

  console.log("userInfolis___________", userInfoList);
  console.log("receiverID___________", receiverId);
  useEffect(() => {
    console.log("chaliraacha_________");
    console.log("receiverID__________", receiverId);
    console.log("userID__________", userId);
    const fetchPost = async () => {
      let messagesRef = collection(db, "messages");
      console.log("__________message", messagesRef);
      let messagesQuery = query(
        messagesRef,
        where("senderId", "in", [userId, receiverId]),
        where("receiverId", "in", [userId, receiverId])
      );
      console.log("messagesQuery___________");
      onSnapshot(messagesQuery, (querySnapshot) => {
        let messageList = [];
        querySnapshot.forEach((doc) => {
          let message = doc.data();
          messageList.push(message);
        });
        messageList.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(a.createdAt) - new Date(b.createdAt);
        });
        setMessages([...messageList]);
      });
      // await getDocs(collection(db, "messages")).then((querySnapshot) => {
      //   const newData = querySnapshot.docs.map((doc) => ({
      //     ...doc.data(),
      //     id: doc.id,
      //   }));
      //   console.log("message_________________", newData);
      // });
    };
    fetchPost();
  }, [receiverId]);

  const mappedMessages = messages.map((item) => {
    return item.senderId == userId ? (
      <Sent message={item.text} />
    ) : (
      <Received message={item.text} />
    );
  });
  return (
    <>
      <div className=" w-full h-screen p-4">
        <h2 className="text-lg font-semibold mb-4">
          Messages <span /> {userinfo.fullname}
        </h2>
        {/* Sample messages list */}
        <div className="w-full flex flex-col justify-between  h-[95%]  ">
          <div className="overflow-y-auto max-h-80">
            {mappedMessages.length > 0 ? mappedMessages : "Start conversation"}
          </div>
          <SendMessage />
        </div>
      </div>
    </>
  );
};

export default Inbox;

import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, changeReceiver } from "../../../Store/Slices/ChatSlice";

const Sidebar = () => {
  const userEmail = useSelector((state) => state.auth.userInfo.email);
  const userslist = useSelector((state) => state.chat.userInfoList);
  const receiver = useSelector((state) => state.chat.receiverId);
  console.log("userinfo to shown", userEmail);

  const dispatch = useDispatch();
  // const [activeReceiverId, setActiveReceiverId] = useState(0);
  // const [userslist, setUserslist] = useState([]);
  const getUsers = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const userlist = querySnapshot.docs.map((doc) => ({
        userId: doc.data().userId,
        fullname: doc.data().fullname,
        id: doc.id,
      }));
      // setUserslist([...userlist]);
      dispatch(loadUsers([...userlist]));
      console.log("userListtobedisplayed:", userlist);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className=" bg-purple-800  p-4 md:border-r md:border-gray-300 text-white">
      <div className="mt-5 md:mt-0 flex items-center sm:gap-10 justify-between">
        <h2 className="text-lg font-semibold ">Users</h2>
        <h2>{userEmail} </h2>
      </div>
      <div className=" border-t flex flex-col items-start gap-3 mt-5">
        {userslist.map((item) => (
          <button
            onClick={() => dispatch(changeReceiver(item.userId))}
            className={` ${
              receiver === item.userId ? "bg-orange-500" : ""
            } mt-2  px-5 w-full rounded-md text-start transition-all`}
          >
            {" "}
            {item.fullname}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

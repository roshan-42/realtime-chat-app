import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, changeReceiver } from "../../../Store/Slices/ChatSlice";

const Sidebar = () => {
  const userslist = useSelector((state) => state.chat.userInfoList);
  const receiver = useSelector((state) => state.chat.receiverId);
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
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-purple-800 md:w-1/3 p-4 md:border-r md:border-gray-300 text-white">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <div className=" flex flex-col items-start gap-3">
        {userslist.map((item) => (
          <button
            onClick={() => dispatch(changeReceiver(item.userId))}
            className={` ${
              receiver === item.userId ? "bg-orange-500" : ""
            }  px-5 w-full rounded-md text-start transition-all`}
          >
            {" "}
            {item.fullname}{" "}
          </button>
        ))}
      </div>
      {/* Add more content if needed */}
    </div>
  );
};

export default Sidebar;

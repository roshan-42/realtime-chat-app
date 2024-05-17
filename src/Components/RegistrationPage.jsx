import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  //   registerUser("dhunganaaashutosh@gmail.com", "Helloworld@123");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   ===========Handle Form=======================

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // ========================================

  const registeredUsers = async (email, id) => {
    try {
      await addDoc(collection(db, "users"), {
        userId: id,
        email: email,
        fullname: fullName,

        createdAt: serverTimestamp(),
      });
      setMessage("");

      alert("database updated");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  // =================User registration============================

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      registeredUsers(userCredential.user.email, userCredential.user.uid);
      alert("Registration Success");
      navigate("/");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-500">
            Create an account
          </h2>
        </div>
        <form
          onSubmit={registerUser}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm ">
            <div>
              <input
                onChange={handleFullName}
                id="user-name"
                value={fullName}
                name="user-name"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            {/* ================Email address====================== */}

            <div>
              <input
                onChange={handleEmail}
                id="email-address"
                value={email}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              {/* =============Password======================= */}
              <input
                onChange={handlePassword}
                id="password"
                name="password"
                type="password"
                value={password}
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
          <div className="text-sm text-center">
            <Link
              to="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Already have an account ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

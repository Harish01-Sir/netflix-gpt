import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // i only want to call this api once thats why we use this with useEffect

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // when user sign in
        console.log(user, "onauthstatechange called");
        const { uid, email, displayName} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;

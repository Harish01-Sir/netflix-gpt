import React, { useRef, useState } from "react";
import Header from "./Header";
import backgroundImg from "../assets/background_banner.jpg";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(navigate);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleValidation = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = validateData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up form logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // console.log(userCredential);
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR ,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName,photoURL } = auth.currentUser;
              // console.log(auth,"updated user");
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          // console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode, errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // sign in form logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode, errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-cover bg-center brightness-30 overflow-hidden">
        <img src={backgroundImg} alt="" className="scale-120" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-neutral-950/75 w-3/10 text-white px-16 py-12 my-36 mx-auto right-0 left-0"
      >
        <h1 className="text-neutral-100 font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="text-white w-full p-3 rounded-md border border-neutral-300 bg-[#29313F]/45 mt-4"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="text-white w-full p-3 rounded-md border border-neutral-300 bg-[#29313F]/45 my-4"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-white w-full p-3 rounded-md border border-neutral-300 bg-[#29313F]/50"
        />
        <p className="text-red-700 font-bold text-md mt-5">{errorMessage}</p>
        <button
          onClick={handleValidation}
          className="w-full bg-[#C11119] rounded-md my-10 py-2.5"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          <span className="text-neutral-400 text-[16px]">
            {isSignInForm ? "New to Netflix?" : "Already a User?"}
          </span>
          <span
            className="font-bold text-[16px] cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In"}
          </span>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;

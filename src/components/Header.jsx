import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser,removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  // console.log(user, "user from store");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error")
        // An error happened.
      });
  };

  // i only want to call this api once thats why we use this with useEffect

  useEffect(() => {
    //firebase gives an unsubscribe method to us in onauthstatechanged 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // when user sign in
        // console.log(user, "onauthstatechange called");
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        
      }
    });

    // here we are unsubscribing when the component unmounts
    return () => unsubscribe()
  }, []);

  // console.log(user);
  

  return (
    <>
      <div className="absolute px-8 top-5 z-30 flex justify-between items-center w-screen">
        <img src={logo} alt="" className="w-30" />
        {user && (
          <div className="flex">
            <img src={user?.photoURL} alt="" className="w-10" />
            <button
              className="px-4 cursor-pointer text-white font-medium"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import removeUser from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  console.log(user, "user from store");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
        // Sign-out successful.
      })
      .catch((error) => {
        // navigate("/error")
        console.log(error);

        // An error happened.
      });
  };

  return (
    <>
      <div className="absolute px-8 top-5 z-30 flex justify-between items-center w-screen">
        <img src={logo} alt="" className="w-38" />
        {user && (
          <div className="flex ">
            <img src={user?.photoURL} alt="" className="w-10" />
            <button className="px-4 cursor-pointer font-medium" onClick={handleSignOut}>Sign out</button>
          </div>  
        )}
      </div>
    </>
  );
};

export default Header;

import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../Utils/userSclice";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(adduser({
          uid: uid,
          email : email,
          displayName : displayName
        }));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
      }
    });
  },[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
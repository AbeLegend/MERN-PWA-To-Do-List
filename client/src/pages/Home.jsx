import React from "react";
import { useSelector } from "react-redux";

const Home = ({ history }) => {
  // use
  const { auth } = useSelector((state) => ({ ...state }));

  React.useEffect(() => {
    if (auth !== null) {
      if (auth.token) {
        history.push("/todo");
      }
    }
  }, [auth, history]);

  return (
    <div className="flex flex-col font-primary h-screen bg-blue-primary text-white items-center justify-center">
      <h1 className="text-3xl sm:text-5xl font-bold">MERN-PWA-To Do List</h1>
      <div className="flex justify-around w-screen">
        <button
          className="p-3 bg-white text-black font-semibold rounded-sm mt-10 hover:text-blue-primary"
          onClick={() => history.push("/login")}
        >
          Login
        </button>
        <button
          className="p-3 bg-white text-black font-semibold rounded-sm mt-10 hover:text-blue-primary"
          onClick={() => history.push("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;

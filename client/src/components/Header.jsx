import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = () => {
  // use
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    auth: {
      user: { name },
    },
  } = useSelector((state) => ({ ...state }));

  // logout
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div className="h-14 py-3 bg-blue-primary flex items-center px-5 justify-between text-white">
      <h1 className="font-bold text-xl">{name}</h1>
      <button className="font-bold text-xl hover:text-black" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;

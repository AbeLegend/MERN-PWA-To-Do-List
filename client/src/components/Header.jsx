import React from "react";

const Header = () => {
  const logout = () => {};
  return (
    <div className="h-14 py-3 bg-blue-primary flex items-center px-5 justify-between text-white">
      <h1 className="font-bold text-xl">Name</h1>
      <button className="font-bold text-xl hover:text-black" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;

import React from "react";
import { CheckOutlined } from "@ant-design/icons";

const TodoList = () => {
  return (
    <div className="flex justify-between items-center w-11/12 md:w-9/12 bg-blue-primary p-2 md:p-3.5">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-white text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        accusamus earum voluptate placeat, molestiae similique?
      </h1>
      <button className="bg-white flex p-3 rounded-md shadow-xl transform hover:-translate-y-1.5 transition hover:bg-green-primary hover:text-white text-base md:text-2xl xl:text-3xl ml-2">
        <CheckOutlined />
      </button>
    </div>
  );
};

export default TodoList;

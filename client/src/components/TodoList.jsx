// lib
import { CheckOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// local
import { completeTodo } from "../actions/todoAction";

const TodoList = ({ todo }) => {
  // use
  const {
    auth: { token },
  } = useSelector((state) => ({ ...state }));

  // complete
  const complete = async () => {
    try {
      const { data } = await completeTodo(token, todo._id);
      toast.success(`Success complete ${data.todo}`);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  return (
    <div className="flex justify-between items-center w-11/12 md:w-9/12 bg-blue-primary p-2 md:p-3.5">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-white text-justify">
        {todo.todo}
      </h1>
      <button
        className="bg-white flex p-3 rounded-md shadow-xl transform hover:-translate-y-1.5 transition hover:bg-green-primary hover:text-white text-base md:text-2xl xl:text-3xl ml-2"
        onClick={complete}
      >
        <CheckOutlined />
      </button>
    </div>
  );
};

export default TodoList;

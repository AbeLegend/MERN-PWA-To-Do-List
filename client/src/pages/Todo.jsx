// lib
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// local
import { addTodo, getTodo } from "../actions/todoAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Todo = () => {
  // use
  const {
    auth: { token },
  } = useSelector((state) => ({ ...state }));

  // state
  const [form, setForm] = React.useState({ todo: "" });
  const [myTodo, setMyTodo] = React.useState([]);

  // handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addTodo(form, token);
      toast.success(`Success add ${data.todo}.`);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  // getTodo
  const getTodos = async (token) => {
    try {
      const { data } = await getTodo(token);
      setMyTodo(data.todo);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  // useEffect
  React.useEffect(() => {
    getTodos(token);
  }, [token]);

  return (
    <div className="flex flex-col h-screen justify-between font-primary">
      <Header />
      <main className="mb-auto flex flex-col items-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-10">To Do List</h1>
        <form
          className="space-x-3 flex items-center"
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <input
            type="text"
            name="todo"
            className="rounded-md md:h-14 xl:h-16 md:w-96 md:text-lg xl:text-xl"
          />
          <button className="p-2.5 md:p-3.5 xl:p-4 bg-blue-primary text-white font-medium rounded-sm hover:bg-blue-light md:text-xl xl:text-2xl">
            Add
          </button>
        </form>
        {myTodo && myTodo.map((t) => <TodoList key={t._id} todo={t} />)}
      </main>
      <Footer />
    </div>
  );
};

export default Todo;

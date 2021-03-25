import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [form, setForm] = React.useState({ todo: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
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
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
};

export default Todo;

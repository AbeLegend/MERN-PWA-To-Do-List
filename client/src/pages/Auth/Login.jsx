// lib
import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// local
import { login } from "../../actions/authAction";

const Login = ({ history }) => {
  // use
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  // state
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  // handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      // save user and token to localstorage
      window.localStorage.setItem("auth", JSON.stringify(res.data));
      // sace user and token to redux
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
      history.push("/todo");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  // useEffect
  React.useEffect(() => {
    if (auth !== null) {
      if (auth.token) {
        history.push("/todo");
      }
    }
  }, [auth, history]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-primary font-primary">
      <div className="flex items-center">
        <ArrowLeftOutlined
          className="mr-5 text-2xl cursor-pointer hover:text-white"
          onClick={() => history.push("/")}
        />
        <h1 className="font-bold text-5xl mb-6 text-white border-b-2 border-blue-light rounded-md">
          Login
        </h1>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-5">
        <form
          className="space-y-3 mx-2"
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-md"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-primary text-white p-3 rounded-sm hover:bg-blue-secondary"
            >
              Login
            </button>
          </div>
          <p>
            Don't have an account ?{" "}
            <span
              onClick={() => history.push("/register")}
              className="cursor-pointer hover:text-blue-primary underline"
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";

import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import logo from "../assets/images/seetu-logo.png";

const Login = () => {
  const submitHandler = () => {
    console.log("Login");
  };
  const changeEventHandler = () => {
    console.log("change event handle");
  };
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="flex justify-center">
      <div className="h-90 w-90">
        <div className="flex flex-col items-center top-div text-center ">
          <Link to="/" className="mb-2 size-5/12">
            <img src={logo} alt="logo" />
          </Link>

          <h1 className="font-bold text-2xl">Welcome Back</h1>
          <p className="text-sm text-[#616977] leading-none font-md">
            Login to your account
          </p>
        </div>
        <div className="form-div mt-4">
          <form action="" className="flex flex-col gap-3">
            <div className="border-slate-300 bg-transparent flex p-2 gap-2 border rounded-md">
              <Mail className="text-slate-500" />
              <input
                type="text"
                className="placeholder:text-slate-400 outline-none"
                placeholder="Email"
              />
            </div>

            <div className="border-slate-300 bg-transparent flex p-2 gap-2 border rounded-md">
              <Lock className="text-slate-500" />
              <input
                type="password"
                className="placeholder:text-slate-400 outline-none"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-end mr-4">
              <Link to="/forgot" className="text-blue-600 font-medium">
                Forgot Password?
              </Link>
            </div>

            <button
              className="rounded-sm bg-blue-600 px-4 py-2 text-ms font-medium text-white hover:bg-blue-700"
              onClick={submitHandler}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-end mr-4 mt-3">
          <h4 className="text-slate-500 text-md ">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-medium">
              Sign up
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;

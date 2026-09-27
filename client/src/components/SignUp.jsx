import Navbar from "./Navbar";
import logo from "../assets/images/seetu-logo.png";
import { GraduationCap, Mail, User, UserShield } from "lucide-react";
import { useState } from "react";

const SignUp = () => {
  const [role, setRole] = useState("student");
  const submitHandler = () => {
    console.log("submit");
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="h-90 w-90">
          <div className="flex flex-col items-center top-div text-center ">
            <img src={logo} alt="logo" className="mb-2 size-5/12" />
            <h1 className="font-bold text-2xl">Create Account</h1>
            <p className="text-sm text-[#616977] leading-none font-md">
              Join us and get started
            </p>
          </div>
          <div className="form-div mt-4">
            <form action="" className="flex flex-col gap-3">
              <div className="border-slate-300 bg-transparent flex p-2 gap-2 border rounded-md">
                <User className="text-slate-500" />
                <input
                  type="text"
                  className="placeholder:text-slate-400 outline-none"
                  placeholder="Full Name"
                />
              </div>
              <div className="border-slate-300 bg-transparent flex p-2 gap-2 border rounded-md">
                <Mail className="text-slate-500" />
                <input
                  type="text"
                  className="placeholder:text-slate-400 outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="border-slate-300 bg-transparent flex p-2 gap-2 border rounded-md">
                <Mail className="text-slate-500" />
                <input
                  type="number"
                  className="placeholder:text-slate-400 outline-none"
                  placeholder="Phone No"
                />
              </div>
              <div className="border-slate-300 bg-transparent flex p-2 gap-2 border rounded-md">
                <Mail className="text-slate-500" />
                <input
                  type="password"
                  className="placeholder:text-slate-400 outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="border-slate-300 bg-transparent flex p-2 gap-2 border rounded-md">
                <Mail className="text-slate-500" />
                <input
                  type="password"
                  className="placeholder:text-slate-400 outline-none"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="grid grid-cols-2 gap-6 px-10">
                <div className="border-slate-300 w-30 bg-transparent flex flex-col text-center justify-center items-center p-2 border rounded-md">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={role === "student"}
                    onChange={(e) => setRole(e.target.value)}
                    className="placeholder:text-slate-400 mb-2 outline-none"
                    placeholder="Confirm Password"
                  />
                  <GraduationCap />
                  Student
                </div>
                <div className="border-slate-300 w-30 bg-transparent flex flex-col text-center justify-center items-center p-2 border rounded-md">
                  <input
                    type="radio"
                    name="role"
                    value="teacher"
                    checked={role === "teacher"}
                    onChange={(e) => setRole(e.target.value)}
                    className="placeholder:text-slate-400 mb-2 outline-none"
                    placeholder="Confirm Password"
                  />
                  <UserShield />
                  Teacher
                </div>
              </div>

              <button
                className="mt-4 rounded-sm bg-blue-600 px-4 py-2 text-ms font-medium text-white hover:bg-blue-700"
                onClick={submitHandler}
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

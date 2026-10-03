import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import logo from "../assets/images/seetu-logo.png";
import forgot from "../assets/images/forgot_upd.png";

const ForgotPassword = () => {
  const submitHandler = () => {
    console.log("Login");
  };
  return (
    <div className="flex justify-center">
      <div className="h-90 w-90 mt-30">
        <div className="flex flex-col items-center top-div text-center ">
          <Link to="/" className="mb-2 size-5/12">
            <img src={logo} alt="logo" />
          </Link>
          <h1 className="font-bold text-2xl">Forgot Password</h1>
          <p className="text-sm text-[#616977] leading-none font-md mt-3 font-bold">
            No worries! Enter your email and we'll send you a link to reset your
            password
          </p>
          <img src={forgot} alt="Mail-Icon" />
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

            <button
              className="rounded-sm bg-blue-600 px-4 py-2 text-ms font-medium text-white hover:bg-blue-700"
              onClick={submitHandler}
            >
              Send Reset Link
            </button>
          </form>
        </div>
        <div className="flex justify-center mt-3">
          <ArrowLeft size={28} color="#155dfc" />
          <Link to="/login" className="text-blue-600 font-medium">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

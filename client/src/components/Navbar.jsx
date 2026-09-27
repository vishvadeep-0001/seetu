import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import logo from "../assets/images/seetu-logo.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("handleSearch");
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-app-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" className="shrink-0" />
        </Link>

        <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <Link to="/">Home</Link>
            <Link to="/colleges" className="">
              Colleges
            </Link>
            <Link to="/carrier" className="text-app-orange">
              Courses
            </Link>
            <Link to="/carrier" className="text-app-orange ">
              Compare
            </Link>
            <Link to="/carrier" className="text-app-orange ">
              Careers
            </Link>
            <Link to="/carrier" className="text-app-orange ">
              Blog
            </Link>
            <Link to="/carrier" className="text-app-orange ">
              Resources
            </Link>
            <Link to="/search" className="text-app-orange ">
              <SearchIcon />
            </Link>
          </div>

          <div className="flex gap-3">
            <Link to="/login">
              <button className="rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 sm:block hover:bg-blue-50">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

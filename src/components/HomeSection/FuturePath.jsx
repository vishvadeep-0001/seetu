import { Link } from "react-router-dom";
import student from "../../assets/images/student.png";

const FuturePath = () => {
  return (
    <div className="ml-15">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-div mt-10">
          <h1 className="text-3xl font-bold text-left mb-1">
            Find the Best Path.
          </h1>
          <h1 className="font-bold text-3xl">
            <span className="text-3xl font-bold text-blue-700">
              Plan Your Future.
            </span>
            Achieve Your Dreams.
          </h1>

          <p className="text-md font-medium mt-5">
            Get Personlised carrer recommendations based on your interst marks,
            strenths and goals. Discover the best paths for your future and make
            confident decisions.
          </p>
          <div className="flex mt-5 gap-4">
            <Link to="/assesment">
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Find My Future Path
              </button>
            </Link>
            <Link to="/carrers">
              <button className="rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 sm:block hover:bg-blue-50">
                Explore Carrers
              </button>
            </Link>
          </div>
        </div>
        <div className="img-div">
          <img src={student} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FuturePath;

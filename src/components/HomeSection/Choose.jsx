import {
  BookOpenText,
  BuildingComplex,
  ClockFading,
  Target,
} from "lucide-react";

const Choose = () => {
  return (
    <div className="m-5">
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-slate-800  text-center">
          Why Choose FuturePath?
        </h1>
      </div>
      <div className="grid grid-cols-4 items-center justify-center">
        <div className="flex gap-2">
          <div className="bg-slate-200 h-15 w-15 flex justify-center items-center rounded-full">
            <BookOpenText size={28} color="#092cb9" />
          </div>
          <div>
            <h4 className="text-slate-900 text-md font-semibold">
              Trusted Information
            </h4>
            <p className="text-gray-700 text-sm font-semibold">
              100% verified data from official sources
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-200 h-15 w-15 flex justify-center items-center rounded-full">
            {" "}
            <BuildingComplex size={28} color="purple" />
          </div>
          <div>
            <h4 className="text-slate-900 text-md font-semibold">
              All in One Platform
            </h4>
            <p className="text-gray-700 text-sm font-semibold">
              carrers, exams, colleges, fees & more at one place
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-200 h-15 w-15 flex justify-center items-center rounded-full">
            <Target size={28} color="green" />
          </div>
          <div>
            <h4 className="text-slate-900 text-md font-semibold">
              Personalized Guidance
            </h4>
            <p className="text-gray-700 text-sm font-semibold">
              Get recommendations that match your profile
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-200 h-15 w-15 flex justify-center items-center rounded-full">
            {" "}
            <ClockFading size={28} color="red" />
          </div>
          <div>
            <h4 className="text-slate-900 text-md font-semibold">
              Save Time & Effort
            </h4>
            <p className="text-gray-700 text-sm font-semibold">
              All the information you need, simple and easy to access
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-5 border p-5 border-gray-200">
        <div className="flex flex-col items-center border-r border-gray-300">
          <h1 className="text-blue-700 font-bold text-2xl">5000+</h1>
          <p className="text-slate-700 font-semibold">College Listed</p>
        </div>
        <div className="flex flex-col items-center border-r border-gray-300">
          <h1 className="text-blue-700 font-bold text-2xl">200+</h1>
          <p className="text-slate-700 font-semibold">Entrance Exams</p>
        </div>
        <div className="flex flex-col items-center border-r border-gray-300">
          <h1 className="text-blue-700 font-bold text-2xl">1000+</h1>
          <p className="text-slate-700 font-semibold">Courses Availabel</p>
        </div>
        <div
          className="flex flex-col items-center 
        "
        >
          <h1 className="text-blue-700 font-bold text-2xl">50K+</h1>
          <p className="text-slate-700 font-semibold">Happy Students</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;

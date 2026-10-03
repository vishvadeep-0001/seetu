import { Flag, Landmark, MoveRight, Target, User } from "lucide-react";
import test from "../../assets/images/test.png";

const Journey = () => {
  return (
    <div className="p-15">
      <div className="grid grid-cols-2">
        <div className="flex">
          <div className="w-[60%]">
            <h4 className="font-bold leading-3">Not Sure What to Choose?</h4>
            <h4 className="font-bold mb-1">We'll Guide You!</h4>
            <p className="text-slate-700 leading-4 text-sm w-[75%] text-left">
              Take our smart carrer quiz and get personalized carrer
              recommendations based on your intersts and strenghts.
            </p>
            <button className="mt-2 rounded-sm bg-blue-600 px-5 flex gap-2 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Start Carrer Quiz <MoveRight size={20} color="white" />
            </button>
          </div>
          <div>
            <img src={test} alt="test-image" />
          </div>
        </div>
        <div className="">
          <div className="mb-3">
            <h4 className="font-bold leading-3">Your Journey Starts Here</h4>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-30 flex flex-col items-center">
              <div className="flex flex-col justify-center items-center bg-slate-200 w-12 h-12 rounded-full">
                <User size={30} color="#155dfc" />
              </div>
              <div className="flex flex-col text-center mt-2">
                <h6 className="text-gray-900 font-bold text-sm leading-4">
                  Tell Us About Yourself
                </h6>
                <p className="text-slate-500 text-sm leading-4">
                  Share your stream, interst & goals
                </p>
              </div>
            </div>
            <p className="text-center text-slate-500">-------</p>
            <div className="w-30 flex flex-col items-center">
              <div className="flex flex-col justify-center items-center bg-slate-200 w-12 h-12 rounded-full">
                <Target size={30} color="#9c128b" />
              </div>
              <div className="flex flex-col text-center mt-2">
                <h6 className="text-gray-900 font-bold text-sm leading-4">
                  Get Best Carrer Matches
                </h6>
                <p className="text-slate-500 text-sm leading-4">
                  We analyse ad suggest the best options
                </p>
              </div>
            </div>
            <p className="text-center text-slate-500">-------</p>
            <div className="w-30 flex flex-col items-center">
              <div className="flex flex-col justify-center items-center bg-slate-200 w-12 h-12 rounded-full">
                <Landmark size={30} color="#50bc89" />
              </div>
              <div className="flex flex-col text-center mt-2">
                <h6 className="text-gray-900 font-bold text-sm leading-4">
                  Explore Courses, Exams & Colleges
                </h6>
                <p className="text-slate-500 text-sm leading-4">
                  Find exams, top colleges and fees details
                </p>
              </div>
            </div>
            <p className="text-center text-slate-500">-------</p>
            <div className="w-30 flex flex-col items-center">
              <div className="flex flex-col justify-center items-center bg-slate-200 w-12 h-12 rounded-full">
                <Flag size={30} color="#f2120e" />
              </div>
              <div className="flex flex-col text-center mt-2">
                <h6 className="text-gray-900 font-bold text-sm leading-4">
                  Plan & Achieve Your Dream
                </h6>
                <p className="text-slate-500 text-sm leading-4">
                  Take the right steps towards your future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;

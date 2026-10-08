import {
  ChartNoAxesCombined,
  HourglassCog,
  Lightbulb,
  MoveRight,
  NotebookPen,
  Target,
  Trophy,
} from "lucide-react";
import Navbar from "../components/Navbar";
import quge from "../assets/images/quge.png";

const Quiz = () => {
  return (
    <div>
      <Navbar />
      <div className=" p-15">
        {/* Upper section with image */}
        <div className="grid grid-cols-2">
          <div>
            <div className="flex gap-2">
              <div>
                <Target size={88} color="#0360ec" />
              </div>

              <div>
                <h4 className="font-bold text-slate-800  text-3xl">
                  Carrer Quiz
                </h4>
                <p className="font-semibold text-slate-700">
                  Answer a few sample questions and predict the best carrer path
                  based on your intersts, strengths and preferences.
                </p>
              </div>
            </div>
            {/* Icons Card  */}
            <div className="grid grid-cols-4 mt-13">
              <div className="flex gap-1">
                <div>
                  <Lightbulb size={38} color="#0360ec" />
                </div>
                <div>
                  <p className="font-bold text-slate-800  text-sm">
                    Personalised Carrer Selection
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <div>
                  <ChartNoAxesCombined size={38} color="#0360ec" />
                </div>
                <div>
                  <p className="font-bold text-slate-800  text-sm">
                    Based on the Carrer test
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <div>
                  <HourglassCog size={28} color="#9e41d0" />
                </div>
                <div>
                  <p className="font-bold text-slate-800  text-sm">
                    Based on the Carrer test
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <div>
                  <Trophy size={28} color="#9e41d0" />
                </div>
                <div>
                  <p className="font-bold text-slate-800  text-sm">
                    Based on the Carrer test
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="flex flex-row-reverse">
            <img src={quge} alt="" />
          </div>
        </div>
        {/* Lower Button */}
        <div className="grid grid-cols-2 gap-2">
          {/* left div */}
          <div className="flex flex-col items-center h-50 w-130 py-5 px-20 rounded-md bg-[#e4eeeb] text-blue-600 font-semibold text-sm">
            <div className="">
              <h4 className="text-slate-800 font-bold mb-2 text-2xl">
                Ready to find your ideal Carrer?
              </h4>
              <p className="text-slate-700 font-semibold ">
                Solve the quiz and get Personalised recommendations for your
                future.
              </p>
              <button className="flex items-center justify-center mt-3 w-full cursor-pointer rounded-sm bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Start Quiz <MoveRight size={20} color="#ffffff" />
              </button>
            </div>
          </div>
          {/* right div */}
          <div
            className="flex flex-col rounded-md
              bg-[#e4eeeb] w-80 py-10 px-5"
          >
            <div className="">
              <div className="flex gap-2">
                <NotebookPen size={28} color="#9f44d0" />

                <h4 className="text-blue-600 font-bold mb-2 text-2xl">
                  Question Paper Fee
                </h4>
              </div>

              <span className="font-bold text-2xl text-slate-800">₹19</span>

              <p className="text-slate-700 font-semibold ">
                Get access to the carrer quiz with detailed question paper and
                result analysis.
              </p>
              <button className="flex items-center justify-center mt-3 cursor-pointer rounded-sm bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

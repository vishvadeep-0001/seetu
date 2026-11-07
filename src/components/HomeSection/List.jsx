import { Flower2, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="p-15">
      <div className="grid grid-cols-2 gap-3">
        <div className="w-md">
          <div className="flex justify-between">
            <h4 className="text-slate-900 font-bold">Popular Entrance Exams</h4>
            <Link
              to="/exams"
              className="text-[#155dfc] flex items-center justify-center font-bold gap-2"
            >
              View All Exams
              <MoveRight size={22} color="#155dfc" />
            </Link>
          </div>
          <div>
            {/* Cards */}
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                {/* <img src="" alt="" /> */}
                <Flower2 size={28} color="#eb7e19" />
                <div className="ml-3">
                  <h4 className="font-bold text-slate-800">JEE Main 2025</h4>
                  <p className="text-sm leading-2 font-bold text-slate-700">
                    Engineering
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <h6 className="text-slate-700 font-bold">Jan 2025</h6>
                <span className="py-2 px-5 rounded-md bg-[#eaeeed] text-green-600 font-semibold text-sm">
                  Registration Open
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                {/* <img src="" alt="" /> */}
                <Flower2 size={28} color="#eb7e19" />
                <div className="ml-3">
                  <h4 className="font-bold text-slate-800">NEET UG 2025</h4>
                  <p className="text-sm leading-2 font-bold text-slate-700">
                    Medical
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <h6 className="text-slate-700 font-bold">Apr 2025</h6>
                <span className="py-2 px-5 rounded-md bg-[#eaeeed] text-green-600 font-semibold text-sm">
                  Registration Open
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                {/* <img src="" alt="" /> */}
                <Flower2 size={28} color="#eb7e19" />
                <div className="ml-3">
                  <h4 className="font-bold text-slate-800">CUET UG 2025</h4>
                  <p className="text-sm leading-2 font-bold text-slate-700">
                    Multiple Streams
                  </p>
                </div>
              </div>

              <div className="flex justify-between gap-4 items-center">
                <h6 className="text-slate-700 font-bold">Mar 2025</h6>
                <span className="py-2 px-5 rounded-md bg-[#eaeeed] text-green-600 font-semibold text-sm">
                  Registration Open
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                {/* <img src="" alt="" /> */}
                <Flower2 size={28} color="#eb7e19" />
                <div className="ml-3">
                  <h4 className="font-bold text-slate-800">BITSAT 2025</h4>
                  <p className="text-sm leading-2 font-bold text-slate-700">
                    Engineering
                  </p>
                </div>
              </div>

              <div className="flex justify-between gap-4 items-center">
                <h6 className="text-slate-700 font-bold">May 2025</h6>
                <span className="py-2 px-5 rounded-md bg-[#eaeeed] text-blue-600 font-semibold text-sm">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                {/* <img src="" alt="" /> */}
                <Flower2 size={28} color="#eb7e19" />
                <div className="ml-3">
                  <h4 className="font-bold text-slate-800">VITEEE 2025</h4>
                  <p className="text-sm leading-2 font-bold text-slate-700">
                    Engineering
                  </p>
                </div>
              </div>

              <div className="flex justify-between gap-4 items-center">
                <h6 className="text-slate-700 font-bold">Apr 2025</h6>
                <span className="py-2 px-5 rounded-md bg-[#eaeeed] text-blue-600 font-semibold text-sm">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <h4 className="text-slate-900 font-bold">Top Colleges</h4>
            <Link
              to="/exams"
              className="text-[#155dfc] flex items-center justify-center font-bold gap-2"
            >
              View All Colleges
              <MoveRight size={22} color="#155dfc" />
            </Link>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div className="justify-self-start">
              <div className="flex">
                <img src="" alt="" />
                <div className="">
                  <h4 className="font-bold text-slate-700">
                    Indian Institute of Technology, Delhi
                  </h4>
                  <span className="text-slate-500 text-sm">New Delhi</span>
                  <span className="ml-3 py-1 px-5 rounded-md bg-[#eaeeed] text-blue-600 text-sm font-semibold">
                    Engineering
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-self-end">
              <h4 className="font-bold text-slate-700">$2.4 L</h4>
              <span className="text-slate-500 text-sm">Total Fees</span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div className="justify-self-start">
              <div className="flex">
                <img src="" alt="" />
                <div className="">
                  <h4 className="font-bold text-slate-700">
                    All India Institute of Medical Sciences
                  </h4>
                  <span className="text-slate-500 text-sm">
                    New Delhi, Delhi
                  </span>
                  <span className="ml-3 py-1 px-5 rounded-md bg-[#eaeeed] text-green-600 text-sm font-semibold">
                    Medical
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-self-end">
              <h4 className="font-bold text-slate-700">$6.4 L</h4>
              <span className="text-slate-500 text-sm">Total Fees</span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div className="justify-self-start">
              <div className="flex">
                <img src="" alt="" />
                <div className="">
                  <h4 className="font-bold text-slate-700">
                    Delhi Technological University
                  </h4>
                  <span className="text-slate-500 text-sm">Delhi, Delhi</span>
                  <span className="ml-3 py-1 px-5 rounded-md bg-[#eaeeed] text-blue-600 text-sm font-semibold">
                    Engineering
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-self-end">
              <h4 className="font-bold text-slate-700">$1.6 L</h4>
              <span className="text-slate-500 text-sm">Total Fees</span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div className="justify-self-start">
              <div className="flex">
                <img src="" alt="" />
                <div className="">
                  <h4 className="font-bold text-slate-700">
                    Christ University, Bangalore
                  </h4>
                  <span className="text-slate-500 text-sm">
                    Bangalore, Karnataka
                  </span>
                  <span className="ml-3 py-1 px-5 rounded-md bg-[#eaeeed] text-blue-600 text-sm font-semibold">
                    Management
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-self-end">
              <h4 className="font-bold text-slate-700">$3.8 L</h4>
              <span className="text-slate-500 text-sm">Total Fees</span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div className="justify-self-start">
              <div className="flex">
                <img src="" alt="" />
                <div className="">
                  <h4 className="font-bold text-slate-700">
                    Symbiosis Institute of Design, Pune
                  </h4>
                  <span className="text-slate-500 text-sm">
                    Pune, Maharashtra
                  </span>

                  <span className="ml-3 py-1 px-5 rounded-md bg-[#eaeeed] text-blue-600 text-sm font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-self-end">
              <h4 className="font-bold text-slate-700">$4.5 L</h4>
              <span className="text-slate-500 text-sm">Total Fees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

import {
  BriefcaseBusiness,
  HeartPulse,
  MoveRight,
  Palette,
  Scale,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="p-15">
      <div className="mb-5">
        <h4 className="font-bold mb-1">Explore Top Carrer Options</h4>
      </div>
      <div className="grid grid-cols-6">
        <div className="w-43.75 h-42.5 flex flex-col bg-[#e6f0fe] rounded-md p-4">
          <Settings size="50" color="#2081dc" />
          <h3 className="font-medium">Engineering</h3>
          <p className="text-sm text-[#616977] font-normal leading-none">
            Btech, BE and other enginnering courses
          </p>
          <Link to="/explore" className="mt-2">
            <button className="flex gap-2 items-center font-medium text-[#092cb9]">
              Explore <MoveRight size={20} />
            </button>
          </Link>
        </div>
        <div className="w-43.75 h-42.5 flex flex-col bg-[#e6f0fe] rounded-md p-4">
          <HeartPulse size="50" color="#049c56" />
          <h3 className="">Medical</h3>
          <p className="text-sm text-[#616977] font-normal leading-none">
            Btech, BE and other enginnering courses
          </p>
          <Link to="/explore" className="mt-2">
            <button className="flex gap-2 items-center font-medium text-[#092cb9]">
              Explore <MoveRight size={20} />
            </button>
          </Link>
        </div>
        <div className="w-43.75 h-42.5 flex flex-col bg-[#e6f0fe] rounded-md p-4">
          <HeartPulse size="50" color="#5c3098" />
          <h3 className="">Engineering</h3>
          <p className="text-sm text-[#616977] font-normal leading-none">
            Btech, BE and other enginnering courses
          </p>
          <Link to="/explore" className="mt-2">
            <button className="flex gap-2 items-center font-medium text-[#092cb9]">
              Explore <MoveRight size={20} />
            </button>
          </Link>
        </div>
        <div className="w-43.75 h-42.5 flex flex-col bg-[#e6f0fe] rounded-md p-4">
          <Scale size="50" color="#fa7d0c" />
          <h3 className="">Engineering</h3>
          <p className="text-sm text-[#616977] font-normal leading-none">
            Btech, BE and other enginnering courses
          </p>
          <Link to="/explore" className="mt-2">
            <button className="flex gap-2 items-center font-medium text-[#092cb9]">
              Explore <MoveRight size={20} />
            </button>
          </Link>
        </div>
        <div className="w-43.75 h-42.5 flex flex-col bg-[#e6f0fe] rounded-md p-4">
          <BriefcaseBusiness size="50" color="#e88f0d" />

          <h3 className="">Engineering</h3>
          <p className="text-sm text-[#616977] font-normal leading-none">
            Btech, BE and other enginnering courses
          </p>
          <Link to="/explore" className="mt-2">
            <button className="flex gap-2 items-center font-medium text-[#092cb9]">
              Explore <MoveRight size={20} />
            </button>
          </Link>
        </div>
        <div className="w-43.75 h-42.5 flex flex-col bg-[#e6f0fe] rounded-md p-4">
          <Palette size="50" color="#e42e8e" />
          <h3 className="">Engineering</h3>
          <p className="text-sm text-[#616977] font-normal leading-none">
            Btech, BE and other enginnering courses
          </p>
          <Link to="/explore" className="mt-2">
            <button className="flex gap-2 items-center font-medium text-[#092cb9]">
              Explore <MoveRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;

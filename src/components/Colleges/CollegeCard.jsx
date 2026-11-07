import {
  Heart,
  GraduationCap,
  Star,
  MapPin,
  IndianRupee,
  Briefcase,
  Trophy,
  ArrowRight,
} from "lucide-react";

const CollegeCard = ({ college, favorite, onFavorite }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-32 sm:h-36">
        <img
          src={college.image}
          alt={college.name}
          className="h-full w-full object-cover"
        />

        {college.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold text-white shadow">
            {college.badge}
          </span>
        )}

        <button
          onClick={() => onFavorite(college.id)}
          className="absolute right-3 top-3 rounded-md bg-white p-1.5 text-gray-600 shadow hover:text-red-500"
        >
          <Heart
            size={17}
            fill={favorite ? "currentColor" : "none"}
            className={favorite ? "text-red-500" : ""}
          />
        </button>
      </div>

      <div className="p-3">
        <div className="flex min-h-13.75 items-start justify-between gap-2">
          <div className="flex gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <GraduationCap size={22} />
            </div>
            <h3 className="text-xs font-bold leading-5 text-slate-800">
              {college.name}
            </h3>
          </div>

          <span className="flex shrink-0 items-center gap-1 rounded bg-amber-50 px-1.5 py-1 text-[10px] font-bold">
            {college.rating}
            <Star size={10} fill="#f59e0b" className="text-amber-500" />
          </span>
        </div>

        <div className="mb-3 flex items-center gap-1 pl-11 text-[11px] text-slate-500">
          <MapPin size={12} />
          {college.location}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {college.courses.map((course) => (
            <span
              key={course}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600"
            >
              {course}
            </span>
          ))}
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-500">
            +2
          </span>
        </div>

        <div className="mb-4 grid grid-cols-3 border-t border-gray-100 pt-3 text-center">
          <div>
            <p className="flex items-center justify-center gap-1 text-xs font-bold text-slate-800">
              <IndianRupee size={12} />
              {college.fees.replace("₹", "")}
            </p>
            <span className="text-[10px] text-gray-400">Avg. Fees</span>
          </div>

          <div className="border-x border-gray-100">
            <p className="flex items-center justify-center gap-1 text-xs font-bold text-slate-800">
              <Briefcase size={12} />
              {college.placement}
            </p>
            <span className="text-[10px] text-gray-400">Placement</span>
          </div>

          <div>
            <p className="flex items-center justify-center gap-1 text-xs font-bold text-slate-800">
              <Trophy size={12} /># {college.rank}
            </p>
            <span className="text-[10px] text-gray-400">NIRF Ranking</span>
          </div>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700">
          View Details <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;

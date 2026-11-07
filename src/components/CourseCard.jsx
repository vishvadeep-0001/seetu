import { Star, BookOpen, Clock, Users, ArrowRight } from "lucide-react";
const CourseCard = ({ course }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#545fcf] shadow-sm">
          {course.category}
        </span>

        <span className="absolute right-4 top-4 rounded-lg bg-[#545fcf] px-3 py-1.5 text-xs font-semibold text-white">
          {course.tag}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#64806b]">
            {course.subject}
          </span>

          <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />
            {course.rating}
          </span>
        </div>

        <h3 className="mb-2 min-h-[52px] text-lg font-bold leading-snug text-gray-900 group-hover:text-[#545fcf]">
          {course.title}
        </h3>

        <p className="mb-4 text-sm text-gray-500">By {course.instructor}</p>

        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-100 pb-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <BookOpen size={15} />
            {course.lessons} Lessons
          </span>

          <span className="flex items-center gap-1.5">
            <Clock size={15} />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <Users size={15} />
            {course.students} Students
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-xl font-bold text-[#545fcf]">
              ₹{course.price.toLocaleString("en-IN")}
            </span>
            <span className="ml-2 text-sm text-gray-400 line-through">
              ₹{course.oldPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <a
            href={`/courses/${course.id}`}
            className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#545fcf] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3a48e4]"
          >
            View Course
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;

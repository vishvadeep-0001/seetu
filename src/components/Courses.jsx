import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  ArrowRight,
  GraduationCap,
  School,
  Landmark,
  Award,
  Filter,
  BookMarked,
  ShieldCheck,
} from "lucide-react";
import CourseCard from "../components/CourseCard";
import Navbar from "./Navbar";

const categories = [
  { name: "All Courses", icon: BookOpen, count: 12 },
  { name: "10th Class", icon: School, count: 2 },
  { name: "12th Class", icon: GraduationCap, count: 2 },
  { name: "Graduation", icon: BookMarked, count: 2 },
  { name: "Post Graduation", icon: Award, count: 2 },
  { name: "Government Exams", icon: Landmark, count: 4 },
];

const courses = [
  {
    id: 1,
    title: "Complete Mathematics - Class 10",
    category: "10th Class",
    subject: "Mathematics",
    instructor: "Rahul Sharma",
    price: 499,
    oldPrice: 999,
    rating: 4.8,
    students: "2.5k",
    lessons: 45,
    duration: "30 Hours",
    level: "Class 10",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    color: "bg-blue-50",
    tag: "Bestseller",
  },
  {
    id: 2,
    title: "Science Complete Preparation - Class 10",
    category: "10th Class",
    subject: "Science",
    instructor: "Amit Verma",
    price: 599,
    oldPrice: 999,
    rating: 4.7,
    students: "1.8k",
    lessons: 50,
    duration: "35 Hours",
    level: "Class 10",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    color: "bg-green-50",
    tag: "Popular",
  },
  {
    id: 3,
    title: "Physics Complete Course - Class 12",
    category: "12th Class",
    subject: "Physics",
    instructor: "Dr. Ankit Kumar",
    price: 799,
    oldPrice: 1499,
    rating: 4.9,
    students: "3.2k",
    lessons: 60,
    duration: "40 Hours",
    level: "Class 12",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
    color: "bg-purple-50",
    tag: "Bestseller",
  },
  {
    id: 4,
    title: "Complete Accountancy - Class 12",
    category: "12th Class",
    subject: "Commerce",
    instructor: "Neha Gupta",
    price: 599,
    oldPrice: 999,
    rating: 4.8,
    students: "1.5k",
    lessons: 40,
    duration: "25 Hours",
    level: "Class 12",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    color: "bg-orange-50",
    tag: "Popular",
  },
  {
    id: 5,
    title: "BA Political Science Complete Course",
    category: "Graduation",
    subject: "Political Science",
    instructor: "Priya Singh",
    price: 999,
    oldPrice: 1499,
    rating: 4.7,
    students: "950",
    lessons: 55,
    duration: "45 Hours",
    level: "Graduation",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    color: "bg-yellow-50",
    tag: "New",
  },
  {
    id: 6,
    title: "BCA Computer Applications",
    category: "Graduation",
    subject: "Computer Applications",
    instructor: "Vikas Kumar",
    price: 1199,
    oldPrice: 1999,
    rating: 4.8,
    students: "1.2k",
    lessons: 65,
    duration: "50 Hours",
    level: "Graduation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    color: "bg-indigo-50",
    tag: "Popular",
  },
  {
    id: 7,
    title: "MCA Computer Applications",
    category: "Post Graduation",
    subject: "Computer Applications",
    instructor: "Ankit Mishra",
    price: 1299,
    oldPrice: 1999,
    rating: 4.8,
    students: "850",
    lessons: 65,
    duration: "50 Hours",
    level: "Post Graduation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    color: "bg-blue-50",
    tag: "Popular",
  },
  {
    id: 8,
    title: "MBA Business Management",
    category: "Post Graduation",
    subject: "Management",
    instructor: "Rohit Mehra",
    price: 1499,
    oldPrice: 2499,
    rating: 4.9,
    students: "780",
    lessons: 70,
    duration: "60 Hours",
    level: "Post Graduation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    color: "bg-pink-50",
    tag: "New",
  },
  {
    id: 9,
    title: "UPSC Civil Services Foundation",
    category: "Government Exams",
    subject: "UPSC",
    instructor: "Anil Mishra",
    price: 1999,
    oldPrice: 2999,
    rating: 4.9,
    students: "5.2k",
    lessons: 100,
    duration: "120 Hours",
    level: "Competitive",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
    color: "bg-amber-50",
    tag: "Bestseller",
  },
  {
    id: 10,
    title: "SSC CGL Complete Preparation",
    category: "Government Exams",
    subject: "SSC",
    instructor: "Rohit Singh",
    price: 999,
    oldPrice: 1499,
    rating: 4.8,
    students: "4.1k",
    lessons: 85,
    duration: "80 Hours",
    level: "Competitive",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    color: "bg-teal-50",
    tag: "Popular",
  },
  {
    id: 11,
    title: "Banking Exam Preparation",
    category: "Government Exams",
    subject: "Banking",
    instructor: "Pankaj Kumar",
    price: 899,
    oldPrice: 1299,
    rating: 4.7,
    students: "2.8k",
    lessons: 70,
    duration: "65 Hours",
    level: "Competitive",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    color: "bg-green-50",
    tag: "Popular",
  },
  {
    id: 12,
    title: "Railway Exam Complete Preparation",
    category: "Government Exams",
    subject: "Railway",
    instructor: "Sandeep Yadav",
    price: 799,
    oldPrice: 1199,
    rating: 4.6,
    students: "2.2k",
    lessons: 60,
    duration: "55 Hours",
    level: "Competitive",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    color: "bg-red-50",
    tag: "New",
  },
];

const popularExams = [
  {
    name: "UPSC",
    subtitle: "Civil Services",
    color: "bg-orange-100 text-orange-700",
  },
  { name: "SSC", subtitle: "CGL & CHSL", color: "bg-blue-100 text-blue-700" },
  {
    name: "Banking",
    subtitle: "IBPS & SBI",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Railway",
    subtitle: "RRB Exams",
    color: "bg-purple-100 text-purple-700",
  },
  { name: "Defence", subtitle: "NDA & CDS", color: "bg-red-100 text-red-700" },
  {
    name: "Teaching",
    subtitle: "CTET & TET",
    color: "bg-yellow-100 text-yellow-700",
  },
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All Courses" || course.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(searchText) ||
        course.category.toLowerCase().includes(searchText) ||
        course.subject.toLowerCase().includes(searchText) ||
        course.instructor.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, search, sortBy]);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#545fcf] px-4 py-16 sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#545fcf]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <GraduationCap size={17} />
              Learn Today, Lead Tomorrow
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Discover Courses.
              <span className="block text-white">Build Your Future.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              From school education to graduation and government competitive
              exams, find the right learning path to achieve your goals with
              Setu.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#all-courses"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#545fcf] transition hover:bg-green-50"
              >
                Explore Courses
                <ArrowRight size={18} />
              </a>

              <a
                href="#categories"
                className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Browse Categories
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white">12+</h3>
                <p className="mt-1 text-sm text-gray-300">Courses</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">6</h3>
                <p className="mt-1 text-sm text-gray-300">Categories</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="mt-1 text-sm text-gray-300">Learning Focus</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-3xl border-8 border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000"
                alt="Students studying together"
                className="h-87.5 w-full object-cover sm:h-105"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
              <div className="rounded-xl bg-green-100 p-3 text-green-700">
                <ShieldCheck size={26} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Learn with Confidence</p>
                <p className="text-xs text-gray-500">
                  Your journey starts here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#64806b]">
              Explore Learning
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Browse By Category
            </h2>
            <p className="mt-3 text-gray-500">
              Choose your education level and start learning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    document.getElementById("all-courses")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`rounded-2xl border p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    active
                      ? "border-[#545fcf] bg-[#eaf1e9]"
                      : "border-gray-100 bg-white hover:border-[#a8c3aa]"
                  }`}
                >
                  <div
                    className={`mb-5 inline-flex rounded-xl p-3 ${
                      active
                        ? "bg-[#545fcf] text-white"
                        : "bg-[#edf3ec] text-[#545fcf]"
                    }`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="text-sm font-bold text-gray-900">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-xs text-gray-500">
                    {category.count} Courses
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Government Exams */}
      <section className="bg-[#f0f4ef] px-4 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#64806b]">
                Achieve Your Dream Job
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Government Exam Preparation
              </h2>
              <p className="mt-3 text-gray-500">
                Prepare for India's major competitive examinations.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveCategory("Government Exams");
                document.getElementById("all-courses")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="flex items-center gap-2 font-semibold text-[#545fcf] hover:underline"
            >
              View All <ArrowRight size={17} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {popularExams.map((exam) => (
              <button
                key={exam.name}
                onClick={() => {
                  setActiveCategory("Government Exams");
                  setSearch(
                    exam.name === "Defence" || exam.name === "Teaching"
                      ? ""
                      : exam.name,
                  );
                  document.getElementById("all-courses")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-md"
              >
                <span
                  className={`inline-flex rounded-xl px-3 py-2 text-sm font-bold ${exam.color}`}
                >
                  {exam.name}
                </span>
                <h3 className="mt-4 font-bold text-gray-900">{exam.name}</h3>
                <p className="mt-1 text-xs text-gray-500">{exam.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section id="all-courses" className="px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#64806b]">
              Start Learning
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Explore All Courses
            </h2>
            <p className="mt-3 text-gray-500">
              Find the perfect course according to your learning goals.
            </p>
          </div>

          {/* Search and Sorting */}
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 md:max-w-md">
              <Search size={19} className="shrink-0 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses, subjects, exams..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <Filter size={18} className="text-gray-500" />
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#545fcf]"
              >
                <option value="popular">Popular</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category.name
                    ? "bg-[#545fcf] text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#545fcf]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-bold text-gray-900">
                {filteredCourses.length}
              </span>{" "}
              courses
            </p>

            <button
              onClick={() => {
                setActiveCategory("All Courses");
                setSearch("");
                setSortBy("popular");
              }}
              className="text-sm font-semibold text-[#545fcf] hover:underline"
            >
              Clear Filters
            </button>
          </div>

          {/* Cards */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-100 bg-white py-20 text-center">
              <Search size={40} className="mx-auto text-gray-300" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                No Courses Found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try another search or select a different category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Courses");
                }}
                className="mt-5 rounded-lg bg-[#545fcf] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Show All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-16 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-[#545fcf] px-8 py-12 text-center sm:px-12 lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Your Future Starts With Setu!
            </h2>
            <p className="mt-3 max-w-xl text-gray-300">
              Take the first step towards your academic and career goals.
              Discover courses and start preparing today.
            </p>
          </div>

          <a
            href="#all-courses"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#545fcf] transition hover:text-[#192ae7]"
          >
            Explore Courses
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

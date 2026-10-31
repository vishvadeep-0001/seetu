import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  RotateCcw,
} from "lucide-react";
import CollegeCard from "./Colleges/CollegeCard";
import Navbar from "./Navbar";

const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology, Delhi (IIT Delhi)",
    location: "New Delhi, Delhi",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
    rating: 4.8,
    fees: "₹8.5 L",
    placement: "95%",
    rank: 1,
    courses: ["B.Tech", "M.Tech", "PhD"],
    university: "Delhi Technological University",
    badge: "Top Ranked",
  },
  {
    id: 2,
    name: "Lovely Professional University (LPU)",
    location: "Phagwara, Punjab",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800",
    rating: 4.5,
    fees: "₹3.2 L",
    placement: "85%",
    rank: 28,
    courses: ["B.Tech", "MBA", "BCA"],
    university: "Lovely Professional University",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Amity University",
    location: "Noida, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800",
    rating: 4.3,
    fees: "₹4.1 L",
    placement: "78%",
    rank: 34,
    courses: ["B.Tech", "MBA", "BBA"],
    university: "Amity University",
    badge: "Top Choice",
  },
  {
    id: 4,
    name: "Chandigarh University",
    location: "Chandigarh, Punjab",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800",
    rating: 4.4,
    fees: "₹3.5 L",
    placement: "80%",
    rank: 26,
    courses: ["B.Tech", "MBA", "MCA"],
    university: "Chandigarh University",
    badge: "Popular",
  },
  {
    id: 5,
    name: "Delhi Technological University (DTU)",
    location: "New Delhi, Delhi",
    image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=800",
    rating: 4.2,
    fees: "₹2.8 L",
    placement: "75%",
    rank: 57,
    courses: ["B.Tech", "MBA", "MCA"],
    university: "Delhi Technological University",
    badge: "",
  },
  {
    id: 6,
    name: "Punjab University",
    location: "Chandigarh, Punjab",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    rating: 4.0,
    fees: "₹2.1 L",
    placement: "68%",
    rank: 76,
    courses: ["B.Sc", "B.Com", "MBA"],
    university: "Punjab University",
    badge: "",
  },
  {
    id: 7,
    name: "JSS Academy of Technical Education",
    location: "Noida, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    rating: 4.1,
    fees: "₹2.5 L",
    placement: "72%",
    rank: 62,
    courses: ["B.Tech", "M.Tech", "BBA"],
    university: "JSS Academy",
    badge: "Popular",
  },
  {
    id: 8,
    name: "Sharda University",
    location: "Greater Noida, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
    rating: 4.2,
    fees: "₹3.0 L",
    placement: "76%",
    rank: 52,
    courses: ["B.Tech", "MBA", "BCA"],
    university: "Sharda University",
    badge: "Top Choice",
  },
  {
    id: 9,
    name: "Symbiosis International University",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800",
    rating: 4.5,
    fees: "₹4.8 L",
    placement: "82%",
    rank: 41,
    courses: ["BBA", "MBA", "B.Tech"],
    university: "Symbiosis",
    badge: "Top Ranked",
  },
];

const filterGroups = [
  {
    title: "University",
    options: [
      ["Delhi Technological University", 24],
      ["Lovely Professional University", 18],
      ["Amity University", 16],
      ["Indian Institute of Technology", 12],
      ["Punjab University", 10],
      ["Chandigarh University", 9],
      ["Other Universities", 32],
    ],
  },
  {
    title: "Course",
    options: [
      ["B.Tech", 48],
      ["BCA", 32],
      ["MCA", 28],
      ["BBA", 20],
      ["MBA", 18],
      ["B.Sc", 12],
      ["BA", 8],
      ["Other Courses", 15],
    ],
  },
  {
    title: "Location",
    options: [
      ["Delhi NCR", 45],
      ["Bangalore", 20],
      ["Mumbai", 18],
      ["Chennai", 12],
      ["Pune", 10],
      ["Hyderabad", 8],
      ["Other Locations", 14],
    ],
  },
  {
    title: "College Type",
    options: [
      ["Government", null],
      ["Private", null],
      ["Deemed University", null],
    ],
  },
  {
    title: "Entrance Exam",
    options: [
      ["JEE Main", null],
      ["JEE Advanced", null],
      ["NEET", null],
      ["CAT", null],
      ["CLAT", null],
      ["Other Exams", null],
    ],
  },
];

function FilterSection({ group, selected, onToggle }) {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");

  const filtered = group.options.filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="border-b border-gray-100 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-sm font-bold text-slate-800"
      >
        {group.title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {open && (
        <div className="mt-3">
          {group.options.length > 3 && (
            <div className="mb-3 flex items-center rounded-lg border border-gray-200 px-2">
              <Search size={15} className="text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${group.title}...`}
                className="w-full p-2 text-xs outline-none"
              />
            </div>
          )}

          <div className="space-y-2">
            {filtered.map(([name, count]) => (
              <label
                key={name}
                className="flex cursor-pointer items-center gap-2 text-xs text-slate-600 hover:text-blue-600"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(name)}
                  onChange={() => onToggle(name)}
                  className="h-3.5 w-3.5 accent-blue-600"
                />
                <span className="flex-1">{name}</span>
                {count !== null && (
                  <span className="text-gray-400">{count}</span>
                )}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CollegePage() {
  const [search, setSearch] = useState("");
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [location, setLocation] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sort, setSort] = useState("Popularity");
  const [page, setPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const toggleFilter = (value) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
    setPage(1);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const clearFilters = () => {
    setSearch("");
    setUniversity("");
    setCourse("");
    setLocation("");
    setSelectedFilters([]);
    setPage(1);
  };

  const filteredColleges = colleges
    .filter((college) => {
      const queryMatch =
        college.name.toLowerCase().includes(search.toLowerCase()) ||
        college.location.toLowerCase().includes(search.toLowerCase());

      const universityMatch = !university || college.university === university;

      const courseMatch = !course || college.courses.includes(course);

      const locationMatch =
        !location ||
        college.location.toLowerCase().includes(location.toLowerCase());

      const filtersMatch =
        selectedFilters.length === 0 ||
        selectedFilters.some(
          (filter) =>
            college.courses.includes(filter) ||
            college.university.toLowerCase().includes(filter.toLowerCase()) ||
            college.location.toLowerCase().includes(filter.toLowerCase()),
        );

      return (
        queryMatch &&
        universityMatch &&
        courseMatch &&
        locationMatch &&
        filtersMatch
      );
    })
    .sort((a, b) => {
      if (sort === "Rating") return b.rating - a.rating;
      if (sort === "Fees: Low to High")
        return (
          parseFloat(a.fees.replace(/[₹ L]/g, "")) -
          parseFloat(b.fees.replace(/[₹ L]/g, ""))
        );
      if (sort === "NIRF Ranking") return a.rank - b.rank;
      return a.rank - b.rank;
    });

  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(filteredColleges.length / pageSize));
  const currentColleges = filteredColleges.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  const selectClass =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-xs text-slate-600 outline-none focus:border-blue-500";

  return (
    <div className="min-h-screen bg-[#f3f8fd] text-slate-800">
      <Navbar />
      <div className="relative flex min-h-47.5 items-center overflow-hidden rounded-2xl bg-linear-to-r from-[#eaf5ff] via-[#f2f8ff] to-[#e4f0ff] px-6 py-8 md:px-10">
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#102747] md:text-4xl">
            Find Your Dream College
          </h1>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Explore Top Colleges, Compare, and Plan Your Future
          </p>

          <p className="mt-4 text-xs text-slate-500">
            Get detailed information about colleges, courses, fees, placements
            and more.
          </p>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-full w-[47%] md:block">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000"
            alt="College campus"
            className="h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#eff7ff] via-transparent to-transparent" />
        </div>
      </div>

      {/* Search Filters */}
      <section className="mx-auto -mt-1 max-w-362.5 px-5 lg:px-8">
        <div className="grid gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_auto]">
          <div className="flex items-center rounded-lg border border-slate-200 px-3">
            <Search size={18} className="text-slate-500" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search by college name, course, location..."
              className="w-full p-3 text-xs outline-none"
            />
            <button className="rounded-md bg-blue-600 px-5 py-3 text-xs font-semibold text-white hover:bg-blue-700">
              Search
            </button>
          </div>

          <select
            value={university}
            onChange={(e) => {
              setUniversity(e.target.value);
              setPage(1);
            }}
            className={selectClass}
          >
            <option value="">Select University</option>
            {[...new Set(colleges.map((c) => c.university))].map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>

          <select
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
              setPage(1);
            }}
            className={selectClass}
          >
            <option value="">Select Course</option>
            {["B.Tech", "M.Tech", "BCA", "MCA", "MBA", "BBA", "B.Sc"].map(
              (c) => (
                <option key={c}>{c}</option>
              ),
            )}
          </select>

          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setPage(1);
            }}
            className={selectClass}
          >
            <option value="">Select Location</option>
            {[
              "Noida",
              "Delhi",
              "Punjab",
              "Chandigarh",
              "Pune",
              "Greater Noida",
            ].map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>

          <button
            onClick={clearFilters}
            className="flex items-center justify-center gap-1 text-xs font-semibold text-blue-600"
          >
            <RotateCcw size={14} /> Clear All
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-362.5 px-5 py-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[225px_1fr]">
          {/* Sidebar */}
          <aside
            className={`${mobileFilterOpen ? "block" : "hidden"} h-fit rounded-xl border border-slate-200 bg-white p-4 lg:block`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-bold">Filter Colleges</h2>
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-blue-600"
              >
                <RotateCcw size={12} /> Reset
              </button>
            </div>

            {filterGroups.map((group) => (
              <FilterSection
                key={group.title}
                group={group}
                selected={selectedFilters}
                onToggle={toggleFilter}
              />
            ))}

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="mt-5 w-full rounded-lg bg-blue-600 py-3 text-xs font-semibold text-white hover:bg-blue-700"
            >
              Apply Filters
            </button>

            <button
              onClick={clearFilters}
              className="mt-3 flex w-full items-center justify-center gap-1 text-xs text-blue-600"
            >
              <RotateCcw size={12} /> Clear All
            </button>
          </aside>

          {/* College Listing */}
          <section>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-600">
                Showing{" "}
                <strong>
                  {filteredColleges.length ? (page - 1) * pageSize + 1 : 0} –{" "}
                  {Math.min(page * pageSize, filteredColleges.length)}
                </strong>{" "}
                of <strong>{filteredColleges.length}</strong> Colleges
              </p>

              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <span className="text-xs text-slate-500">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent text-xs font-semibold outline-none"
                >
                  <option>Popularity</option>
                  <option>Rating</option>
                  <option>Fees: Low to High</option>
                  <option>NIRF Ranking</option>
                </select>
              </div>
            </div>

            {currentColleges.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {currentColleges.map((college) => (
                  <CollegeCard
                    key={college.id}
                    college={college}
                    favorite={favorites.includes(college.id)}
                    onFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-white p-12 text-center">
                <GraduationCap size={40} className="mx-auto text-gray-300" />
                <h3 className="mt-3 font-bold">No colleges found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try changing your search or filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm font-semibold text-blue-600"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredColleges.length > 0 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="rounded-md p-2 text-slate-600 disabled:opacity-30"
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <button
                      key={num}
                      onClick={() => setPage(num)}
                      className={`h-9 w-9 rounded-lg text-xs font-semibold ${page === num ? "bg-blue-600 text-white" : "bg-white text-slate-600 hover:bg-blue-50"}`}
                    >
                      {num}
                    </button>
                  ),
                )}

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="rounded-md p-2 text-slate-600 disabled:opacity-30"
                >
                  ›
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

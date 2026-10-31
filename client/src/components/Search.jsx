import { useMemo, useState } from "react";
import {
  Search as SearchIcon,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  FileText,
  Building2,
  ArrowRight,
  Clock,
  TrendingUp,
  X,
  SlidersHorizontal,
  MapPin,
  IndianRupee,
} from "lucide-react";
import Navbar from "./Navbar";

const searchData = [
  {
    id: 1,
    title: "Software Developer",
    description:
      "Explore software development careers, required skills, qualifications and job opportunities.",
    category: "Careers",
    icon: BriefcaseBusiness,
    tags: ["Programming", "Technology", "B.Tech", "MCA"],
    link: "/career",
  },
  {
    id: 2,
    title: "Doctor (MBBS)",
    description:
      "Learn about medical education, NEET eligibility, MBBS admission and career opportunities.",
    category: "Careers",
    icon: BriefcaseBusiness,
    tags: ["Medical", "NEET", "Science"],
    link: "/career",
  },
  {
    id: 3,
    title: "B.Tech Computer Science",
    description:
      "Explore engineering courses, eligibility, subjects, colleges and admission details.",
    category: "Courses",
    icon: GraduationCap,
    tags: ["Engineering", "Computer Science", "Technology"],
    link: "/courses",
  },
  {
    id: 4,
    title: "MBA",
    description:
      "Discover MBA specializations, entrance examinations, eligibility and career options.",
    category: "Courses",
    icon: GraduationCap,
    tags: ["Management", "Business", "CAT"],
    link: "/courses",
  },
  {
    id: 5,
    title: "Delhi University",
    description:
      "Explore courses, admission information, facilities and college details.",
    category: "Colleges",
    icon: Building2,
    tags: ["Delhi", "University", "Admission"],
    link: "/compare",
  },
  {
    id: 6,
    title: "IIT Delhi",
    description:
      "Explore engineering programs, admission pathways and institution information.",
    category: "Colleges",
    icon: Building2,
    tags: ["IIT", "Engineering", "Delhi"],
    link: "/compare",
  },
  {
    id: 7,
    title: "What to Do After 12th?",
    description:
      "Understand different streams, career opportunities and higher education choices.",
    category: "Blogs",
    icon: BookOpen,
    tags: ["Class 12", "Career Guidance", "Education"],
    link: "/blog",
  },
  {
    id: 8,
    title: "Government Exam Preparation",
    description:
      "Find study strategies and preparation resources for government examinations.",
    category: "Resources",
    icon: FileText,
    tags: ["UPSC", "SSC", "Government Jobs"],
    link: "/resources",
  },
  {
    id: 9,
    title: "Scholarship Opportunities",
    description:
      "Discover scholarship schemes and financial assistance for eligible students.",
    category: "Resources",
    icon: FileText,
    tags: ["Scholarship", "Financial Aid", "Students"],
    link: "/resources",
  },
  {
    id: 10,
    title: "Chartered Accountant",
    description:
      "Learn about the CA course, examination levels, eligibility and career prospects.",
    category: "Careers",
    icon: BriefcaseBusiness,
    tags: ["Commerce", "CA", "Finance"],
    link: "/career",
  },
];

const categories = [
  { name: "All", icon: SearchIcon },
  { name: "Careers", icon: BriefcaseBusiness },
  { name: "Courses", icon: GraduationCap },
  { name: "Colleges", icon: Building2 },
  { name: "Blogs", icon: BookOpen },
  { name: "Resources", icon: FileText },
];

const popularSearches = [
  "Career after 12th",
  "B.Tech",
  "Government Jobs",
  "MBA",
  "Scholarships",
  "NEET",
];

function SearchResultCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group flex flex-col justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#b8cbb9] hover:shadow-lg sm:flex-row sm:items-center">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf1e9] text-[#545fcf]">
          <Icon size={23} />
        </div>

        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-[#545fcf]">{item.title}</h3>
            <span className="rounded-full bg-[#eaf1e9] px-3 py-1 text-[10px] font-semibold text-[#545fcf]">
              {item.category}
            </span>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-gray-500">
            {item.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href={item.link}
        className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[#545fcf] transition hover:text-[#545fcf]"
      >
        Explore
        <ArrowRight
          size={17}
          className="transition group-hover:translate-x-1"
        />
      </a>
    </article>
  );
}

export default function Search() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    "Career after 12th",
    "B.Tech",
  ]);

  const [sortBy, setSortBy] = useState("relevance");

  const filteredResults = useMemo(() => {
    const query = search.trim().toLowerCase();

    let results = searchData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const searchableText = [
        item.title,
        item.description,
        item.category,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = query === "" || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "title") {
      results = [...results].sort((a, b) => a.title.localeCompare(b.title));
    }

    return results;
  }, [search, activeCategory, sortBy]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const selectSearch = (value) => {
    setSearch(value);
    setRecentSearches((previous) =>
      [value, ...previous.filter((item) => item !== value)].slice(0, 5),
    );
  };

  const clearSearch = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      {/* Search Hero */}
      <section className="bg-[#545fcf] px-5 pb-16 pt-16 text-white md:pb-20 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
            <SearchIcon size={16} />
            Setu Search Hub
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            What Are You
            <span className="block text-white">Looking For?</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
            Search careers, colleges, courses, educational resources and
            everything you need to plan your future.
          </p>

          {/* Search Input */}
          <div className="mx-auto mt-9 flex max-w-3xl items-center rounded-2xl bg-white p-2 shadow-xl">
            <SearchIcon size={22} className="ml-3 shrink-0 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && search.trim()) {
                  setRecentSearches((previous) =>
                    [
                      search.trim(),
                      ...previous.filter((item) => item !== search.trim()),
                    ].slice(0, 5),
                  );
                }
              }}
              placeholder="Search careers, colleges, courses..."
              className="min-w-0 flex-1 px-4 py-4 text-sm text-gray-800 outline-none"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="mr-2 rounded-lg p-2 text-gray-400 hover:bg-gray-100"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}

            <button
              onClick={() => {
                if (search.trim()) {
                  setRecentSearches((previous) =>
                    [
                      search.trim(),
                      ...previous.filter((item) => item !== search.trim()),
                    ].slice(0, 5),
                  );
                }
                document
                  .getElementById("search-results")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl bg-[#545fcf] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#545fcf]"
            >
              Search
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-xs text-gray-300">Popular:</span>

            {popularSearches.map((item) => (
              <button
                key={item}
                onClick={() => selectSearch(item)}
                className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-gray-200 transition hover:bg-white hover:text-[#545fcf]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="search-results" className="mx-auto max-w-7xl px-5 py-14">
        {/* Category Cards */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[#545fcf]">
            Explore by Category
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex flex-col items-center gap-3 rounded-2xl border p-5 transition ${
                    active
                      ? "border-[#545fcf] bg-[#eaf1e9]"
                      : "border-gray-200 bg-white hover:border-[#545fcf] hover:bg-[#f5f8f4]"
                  }`}
                >
                  <Icon size={26} className="text-[#545fcf]" />
                  <span className="text-xs font-semibold text-[#545fcf]">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Searches */}
        {!search && recentSearches.length > 0 && (
          <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Clock size={18} className="text-[#545fcf]" />
              <h3 className="font-bold text-[#545fcf]">Recent Searches</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {recentSearches.map((item) => (
                <button
                  key={item}
                  onClick={() => selectSearch(item)}
                  className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-2.5 text-sm text-gray-600 hover:bg-[#eaf1e9]"
                >
                  <Clock size={14} />
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Heading */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#545fcf]">
              {search ? "Search Results" : "Explore Opportunities"}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {filteredResults.length} results found
              {search && ` for "${search}"`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600 hover:border-[#545fcf]"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none"
            >
              <option value="relevance">Relevance</option>
              <option value="title">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="mb-4 font-semibold text-[#545fcf]">
              Filter by category
            </h3>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`rounded-lg border px-4 py-2 text-sm ${
                    activeCategory === category.name
                      ? "border-[#545fcf] bg-[#545fcf] text-white"
                      : "border-gray-200 text-gray-600 hover:border-[#545fcf]"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <div className="space-y-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <SearchResultCard key={item.id} item={item} />
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
              <SearchIcon size={40} className="mx-auto mb-4 text-gray-300" />

              <h3 className="text-lg font-bold text-[#545fcf]">
                No results found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                We couldn't find anything matching your search. Try another
                keyword or explore a different category.
              </p>

              <button
                onClick={clearSearch}
                className="mt-5 rounded-lg bg-[#545fcf] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#545fcf]"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#eaf1e9] p-8 text-center md:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#545fcf] text-white">
            <TrendingUp size={26} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#545fcf]">
            Not Sure What to Choose?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
            Explore career opportunities and discover the right direction for
            your education and future.
          </p>

          <a
            href="/career"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#545fcf] px-6 py-3 text-sm font-semibold text-white hover:bg-[#545fcf]"
          >
            Explore Careers
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}

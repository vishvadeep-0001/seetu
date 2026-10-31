import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  FileText,
  GraduationCap,
  Landmark,
  Award,
  Download,
  ExternalLink,
  Clock,
  FileQuestion,
  ClipboardList,
  BookMarked,
} from "lucide-react";
import Navbar from "./Navbar";

const resources = [
  {
    id: 1,
    title: "Class 10 Complete Study Notes",
    description:
      "Subject-wise study notes and important topics for Class 10 students.",
    category: "Study Materials",
    type: "PDF",
    size: "4.5 MB",
    date: "October 2026",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
    action: "download",
  },
  {
    id: 2,
    title: "Class 12 Previous Year Papers",
    description:
      "Practice previous-year question papers to understand exam patterns.",
    category: "Question Papers",
    type: "PDF",
    size: "8.2 MB",
    date: "October 2026",
    icon: FileQuestion,
    color: "bg-orange-50 text-orange-600",
    action: "download",
  },
  {
    id: 3,
    title: "JEE Main Preparation Guide",
    description:
      "Important topics, preparation strategy and study planning for JEE Main.",
    category: "Entrance Exams",
    type: "PDF",
    size: "3.8 MB",
    date: "September 2026",
    icon: GraduationCap,
    color: "bg-purple-50 text-purple-600",
    action: "download",
  },
  {
    id: 4,
    title: "UPSC Civil Services Preparation",
    description:
      "Explore the UPSC syllabus, exam stages, recommended resources and preparation tips.",
    category: "Government Exams",
    type: "Guide",
    size: "Online",
    date: "September 2026",
    icon: Landmark,
    color: "bg-green-50 text-green-700",
    action: "link",
    url: "https://upsc.gov.in/",
  },
  {
    id: 5,
    title: "National Scholarship Portal",
    description:
      "Explore central and state government scholarship schemes for eligible students.",
    category: "Scholarships",
    type: "Website",
    size: "Online",
    date: "Updated regularly",
    icon: Award,
    color: "bg-yellow-50 text-yellow-700",
    action: "link",
    url: "https://scholarships.gov.in/",
  },
  {
    id: 6,
    title: "NCERT Textbooks",
    description:
      "Access official NCERT textbooks for school classes and different subjects.",
    category: "Study Materials",
    type: "Website",
    size: "Online",
    date: "Updated regularly",
    icon: BookMarked,
    color: "bg-pink-50 text-pink-600",
    action: "link",
    url: "https://ncert.nic.in/textbook.php",
  },
  {
    id: 7,
    title: "NEET Previous Year Question Papers",
    description:
      "Practice previous examination questions and improve your preparation.",
    category: "Question Papers",
    type: "PDF",
    size: "6.4 MB",
    date: "September 2026",
    icon: FileQuestion,
    color: "bg-red-50 text-red-600",
    action: "download",
  },
  {
    id: 8,
    title: "Career Planning Guide",
    description:
      "Understand career options, educational qualifications and future opportunities.",
    category: "Career Guides",
    type: "Guide",
    size: "2.5 MB",
    date: "August 2026",
    icon: ClipboardList,
    color: "bg-teal-50 text-teal-700",
    action: "download",
  },
  {
    id: 9,
    title: "National Testing Agency",
    description:
      "Find official information about entrance examinations, notices and results.",
    category: "Entrance Exams",
    type: "Website",
    size: "Online",
    date: "Updated regularly",
    icon: GraduationCap,
    color: "bg-indigo-50 text-indigo-600",
    action: "link",
    url: "https://nta.ac.in/",
  },
];

const categories = [
  "All Resources",
  "Study Materials",
  "Question Papers",
  "Entrance Exams",
  "Government Exams",
  "Scholarships",
  "Career Guides",
];

function ResourceCard({ resource }) {
  const Icon = resource.icon;

  const handleAction = () => {
    if (resource.action === "link" && resource.url) {
      window.open(resource.url, "_blank", "noopener,noreferrer");
    } else {
      alert(
        "Connect this resource to its actual PDF or file URL to enable downloading.",
      );
    }
  };

  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${resource.color}`}
        >
          <Icon size={23} />
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {resource.type}
        </span>
      </div>

      <span className="text-xs font-semibold text-[#545fcf]">
        {resource.category}
      </span>

      <h3 className="mt-2 text-lg font-bold text-[#545fcf] group-hover:text-[#545fcf]">
        {resource.title}
      </h3>

      <p className="mt-3 min-h-[66px] text-sm leading-6 text-gray-500">
        {resource.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-xs text-gray-400">{resource.size}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
            <Clock size={12} />
            {resource.date}
          </p>
        </div>

        <button
          onClick={handleAction}
          className="flex items-center gap-2 rounded-lg bg-[#545fcf] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#545fcf]"
        >
          {resource.action === "download" ? (
            <>
              <Download size={15} />
              Download
            </>
          ) : (
            <>
              Visit
              <ExternalLink size={15} />
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All Resources" ||
        resource.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        resource.title.toLowerCase().includes(searchText) ||
        resource.description.toLowerCase().includes(searchText) ||
        resource.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      {/* Hero */}
      <section className="bg-[#545fcf] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-green-100">
            <BookOpen size={16} />
            Setu Learning Resources
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Everything You Need to
            <span className="block text-white">Move Forward</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
            Explore study materials, question papers, exam guides, scholarships
            and useful educational resources in one place.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center rounded-xl bg-white p-2">
            <Search className="ml-3 shrink-0 text-gray-400" size={20} />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search study materials, exams, scholarships..."
              className="w-full px-3 py-3 text-sm text-gray-800 outline-none"
            />

            <button
              onClick={() =>
                document
                  .getElementById("resources-list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-lg bg-[#545fcf] px-5 py-3 text-sm font-semibold text-white hover:bg-[#545fcf]"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-[#545fcf]">
            Explore Resources
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Find the right learning materials for your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            { name: "Study Materials", icon: BookOpen },
            { name: "Question Papers", icon: FileQuestion },
            { name: "Entrance Exams", icon: GraduationCap },
            { name: "Government Exams", icon: Landmark },
            { name: "Scholarships", icon: Award },
            { name: "Career Guides", icon: ClipboardList },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveCategory(item.name);
                  document
                    .getElementById("resources-list")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 text-center transition hover:border-[#545fcf] hover:bg-[#eaf1e9]"
              >
                <Icon className="text-[#545fcf]" size={27} />
                <span className="text-xs font-semibold text-[#545fcf]">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Resource Listing */}
      <section id="resources-list" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#545fcf]">
            All Learning Resources
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Browse and access useful educational resources.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-[#545fcf] bg-[#545fcf] text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#545fcf]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-bold text-[#545fcf]">
              {filteredResources.length}
            </span>{" "}
            resources
          </p>

          <span className="text-xs text-gray-400">
            Updated learning collection
          </span>
        </div>

        {/* Cards */}
        {filteredResources.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
            <Search className="mx-auto mb-3 text-gray-400" size={35} />
            <h3 className="font-semibold text-[#545fcf]">No resources found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Try searching with another keyword.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Resources");
              }}
              className="mt-4 text-sm font-semibold text-[#545fcf] underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#eaf1e9] p-8 md:flex-row md:p-12">
          <div>
            <h2 className="text-2xl font-bold text-[#545fcf]">
              Your Learning Journey Starts Here
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
              Keep exploring, keep learning and take the next step towards
              achieving your academic and career goals.
            </p>
          </div>

          <a
            href="/career"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-[#545fcf] px-6 py-3 text-sm font-semibold text-white hover:bg-[#545fcf]"
          >
            Explore Careers
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

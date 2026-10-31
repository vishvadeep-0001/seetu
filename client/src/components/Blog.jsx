import { useMemo, useState } from "react";
import {
  Search,
  Clock,
  CalendarDays,
  ArrowRight,
  BookOpen,
  GraduationCap,
  BriefcaseBusiness,
  Landmark,
  Lightbulb,
  Mail,
} from "lucide-react";
import Navbar from "./Navbar";

const blogPosts = [
  {
    id: 1,
    title: "What to Do After 10th? Explore the Best Career Options",
    description:
      "Confused about what to choose after class 10th? Explore Science, Commerce, Arts and vocational streams to make the right decision.",
    category: "Education",
    author: "Setu Team",
    date: "October 25, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900",
    featured: true,
  },
  {
    id: 2,
    title: "Top Career Options After 12th Science",
    description:
      "Discover popular career paths after 12th Science, including engineering, medical, research and other professional fields.",
    category: "Career Guidance",
    author: "Rahul Sharma",
    date: "October 22, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900",
  },
  {
    id: 3,
    title: "How to Prepare for Government Exams",
    description:
      "Learn how to create a study timetable, choose the right resources and stay consistent during government exam preparation.",
    category: "Government Exams",
    author: "Setu Team",
    date: "October 19, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900",
  },
  {
    id: 4,
    title: "Best Courses After Graduation",
    description:
      "Explore postgraduate courses, professional certifications and other opportunities after completing your graduation.",
    category: "Higher Education",
    author: "Priya Verma",
    date: "October 16, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
  },
  {
    id: 5,
    title: "How to Choose the Right College in India",
    description:
      "Understand the important factors to consider when comparing colleges, including fees, placements, courses and accreditation.",
    category: "Education",
    author: "Setu Team",
    date: "October 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
  },
  {
    id: 6,
    title: "Skills Every Student Should Develop",
    description:
      "Discover essential communication, problem-solving, technical and interpersonal skills that can help you build your future.",
    category: "Career Guidance",
    author: "Ankit Kumar",
    date: "October 08, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900",
  },
];

const categories = [
  { name: "All Articles", icon: BookOpen },
  { name: "Education", icon: GraduationCap },
  { name: "Career Guidance", icon: BriefcaseBusiness },
  { name: "Government Exams", icon: Landmark },
  { name: "Higher Education", icon: Lightbulb },
];

function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#545fcf]">
          {post.category}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-bold leading-snug text-[#545fcf] transition group-hover:text-[#3d6b4a]">
          {post.title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-gray-600">
          {post.description}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-medium text-gray-600">
            By {post.author}
          </span>

          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-[#545fcf] hover:text-[#3d6b4a]"
          >
            Read More
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Articles" || post.category === activeCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#545fcf] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            <BookOpen size={16} />
            Setu Knowledge Hub
          </span>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Learn Today, Build a
            <span className="block text-white">Better Tomorrow</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
            Explore educational resources, career advice, exam preparation tips
            and expert insights to make better decisions about your future.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center rounded-xl bg-white p-2 shadow-lg">
            <Search className="ml-3 shrink-0 text-gray-400" size={20} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles, careers, education..."
              className="w-full px-3 py-3 text-sm text-gray-800 outline-none"
            />
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("blog-list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-lg bg-[#545fcf] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3d6b4a]"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-7 flex items-center gap-2">
            <span className="h-7 w-1 rounded-full bg-[#545fcf]" />
            <h2 className="text-2xl font-bold text-[#545fcf]">
              Featured Article
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm md:grid-cols-2">
            <div className="min-h-64 overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full min-h-64 w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="mb-4 w-fit rounded-full bg-[#eaf1e9] px-4 py-2 text-xs font-bold text-[#545fcf]">
                {featuredPost.category}
              </span>

              <h3 className="text-2xl font-bold leading-snug text-[#545fcf] md:text-3xl">
                {featuredPost.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {featuredPost.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span>{featuredPost.author}</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <button
                type="button"
                className="mt-7 flex w-fit items-center gap-2 rounded-lg bg-[#545fcf] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3d6b4a]"
              >
                Read Article
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Blog Listing */}
      <section id="blog-list" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#545fcf]">
            Explore Our Articles
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Useful information to help you make informed decisions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-9 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition ${
                  active
                    ? "border-[#545fcf] bg-[#545fcf] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#3d6b4a] hover:text-[#545fcf]"
                }`}
              >
                <Icon size={16} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Blog Cards */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
            <BookOpen className="mx-auto mb-3 text-gray-400" size={35} />
            <h3 className="text-lg font-semibold text-[#545fcf]">
              No articles found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try another search term or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Articles");
              }}
              className="mt-5 text-sm font-semibold text-[#3d6b4a] underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#eaf1e9] px-6 py-12 text-center md:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#545fcf] text-white">
            <Mail size={25} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#545fcf] md:text-3xl">
            Stay Updated with Setu
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
            Get the latest education updates, career guidance and helpful
            resources delivered to your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Newsletter subscription UI demo. Connect an API to save subscribers.",
              );
            }}
            className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm outline-none focus:border-[#545fcf]"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#545fcf] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3e4deb]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

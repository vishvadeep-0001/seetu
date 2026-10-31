import { useMemo, useState } from "react";
import {
  Search,
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
  Clock,
  Star,
  IndianRupee,
  Stethoscope,
  Code,
  Landmark,
  Palette,
  Calculator,
  Scale,
  BookOpen,
  Building2,
  X,
  CheckCircle2,
  Sparkles,
  Users,
  Target,
  ChevronRight,
} from "lucide-react";
import Navbar from "./Navbar";

const categories = [
  { name: "All Careers", icon: BriefcaseBusiness },
  { name: "Science", icon: Stethoscope },
  { name: "Commerce", icon: Calculator },
  { name: "Arts & Humanities", icon: Palette },
  { name: "Technology", icon: Code },
  { name: "Government", icon: Landmark },
];

const careers = [
  {
    id: 1,
    title: "Software Developer",
    category: "Technology",
    qualification: "B.Tech / BCA / MCA",
    duration: "3-4 Years",
    salary: "3-12 LPA",
    level: "High Demand",
    rating: 4.9,
    description:
      "Design, develop and maintain software applications, websites and digital products.",
    skills: ["Programming", "Problem Solving", "JavaScript", "React"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
  },
  {
    id: 2,
    title: "Doctor / MBBS",
    category: "Science",
    qualification: "12th PCB + NEET",
    duration: "5.5 Years",
    salary: "6-15 LPA",
    level: "Professional",
    rating: 4.9,
    description:
      "Diagnose diseases, treat patients and contribute to healthcare and medical research.",
    skills: ["Medical Knowledge", "Communication", "Patient Care"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700",
  },
  {
    id: 3,
    title: "Chartered Accountant",
    category: "Commerce",
    qualification: "12th / Graduation",
    duration: "4-5 Years",
    salary: "6-12 LPA",
    level: "Professional",
    rating: 4.8,
    description:
      "Manage financial records, auditing, taxation and financial advisory services.",
    skills: ["Accounting", "Taxation", "Finance", "Analysis"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700",
  },
  {
    id: 4,
    title: "IAS / Civil Services",
    category: "Government",
    qualification: "Any Graduation + UPSC",
    duration: "3-4 Years Preparation",
    salary: "As per Pay Level",
    level: "Government",
    rating: 4.9,
    description:
      "Work in public administration, policy implementation and government leadership.",
    skills: ["Leadership", "General Studies", "Decision Making"],
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=700",
  },
  {
    id: 5,
    title: "Data Analyst",
    category: "Technology",
    qualification: "Graduation",
    duration: "6-12 Months Skill Building",
    salary: "3-10 LPA",
    level: "High Demand",
    rating: 4.7,
    description:
      "Analyze data and transform information into useful business insights and decisions.",
    skills: ["SQL", "Excel", "Power BI", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700",
  },
  {
    id: 6,
    title: "Mechanical Engineer",
    category: "Science",
    qualification: "12th PCM + B.Tech",
    duration: "4 Years",
    salary: "3-8 LPA",
    level: "Professional",
    rating: 4.6,
    description:
      "Design, develop and maintain machines, industrial equipment and mechanical systems.",
    skills: ["CAD", "Mathematics", "Engineering", "Design"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700",
  },
  {
    id: 7,
    title: "Lawyer / Advocate",
    category: "Arts & Humanities",
    qualification: "12th + BA LLB / Graduation + LLB",
    duration: "3-5 Years",
    salary: "3-10 LPA",
    level: "Professional",
    rating: 4.7,
    description:
      "Represent clients, provide legal advice and work in courts and legal organizations.",
    skills: ["Legal Research", "Communication", "Critical Thinking"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700",
  },
  {
    id: 8,
    title: "Teacher / Professor",
    category: "Arts & Humanities",
    qualification: "Graduation / Post Graduation",
    duration: "2-5 Years",
    salary: "3-9 LPA",
    level: "Professional",
    rating: 4.8,
    description:
      "Educate students, develop learning materials and contribute to academic development.",
    skills: ["Communication", "Teaching", "Subject Knowledge"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700",
  },
  {
    id: 9,
    title: "Graphic Designer",
    category: "Technology",
    qualification: "12th / Graduation",
    duration: "6-12 Months Skill Building",
    salary: "2.5-7 LPA",
    level: "Creative",
    rating: 4.6,
    description:
      "Create visual concepts, branding, illustrations and digital designs for businesses.",
    skills: ["Photoshop", "Figma", "Creativity", "Illustrator"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700",
  },
];

const steps = [
  {
    number: "01",
    title: "Know Yourself",
    description: "Discover your interests, strengths and abilities.",
    icon: Users,
  },
  {
    number: "02",
    title: "Explore Careers",
    description: "Find career options matching your interests.",
    icon: Search,
  },
  {
    number: "03",
    title: "Understand Requirements",
    description: "Learn about qualifications, skills and opportunities.",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Plan Your Future",
    description: "Build a roadmap to achieve your career goals.",
    icon: Target,
  },
];

function CareerCard({ career, onView }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={career.image}
          alt={career.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#545fcf]">
          {career.category}
        </span>

        <span className="absolute right-4 top-4 rounded-lg bg-[#545fcf] px-3 py-1.5 text-xs font-semibold text-white">
          {career.level}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#64806b]">
            Career Opportunity
          </span>

          <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />
            {career.rating}
          </span>
        </div>

        <h3 className="min-h-7 text-xl font-bold text-gray-900 group-hover:text-[#545fcf]">
          {career.title}
        </h3>

        <p className="mt-3 min-h-[60px] text-sm leading-6 text-gray-500">
          {career.description}
        </p>

        <div className="my-5 space-y-3 border-y border-gray-100 py-4">
          <div className="flex items-center gap-3 text-sm">
            <GraduationCap size={17} className="shrink-0 text-[#64806b]" />
            <span className="text-gray-500">Qualification:</span>
            <span className="ml-auto text-right font-medium text-gray-800">
              {career.qualification}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Clock size={17} className="shrink-0 text-[#64806b]" />
            <span className="text-gray-500">Duration:</span>
            <span className="ml-auto text-right font-medium text-gray-800">
              {career.duration}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <IndianRupee size={17} className="shrink-0 text-[#64806b]" />
            <span className="text-gray-500">Salary:</span>
            <span className="ml-auto text-right font-semibold text-[#545fcf]">
              {career.salary}
            </span>
          </div>
        </div>

        <button
          onClick={() => onView(career)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#545fcf] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#545fcf]"
        >
          Explore Career
          <ArrowRight size={17} />
        </button>
      </div>
    </article>
  );
}

export default function Career() {
  const [activeCategory, setActiveCategory] = useState("All Careers");
  const [search, setSearch] = useState("");
  const [selectedCareer, setSelectedCareer] = useState(null);

  const filteredCareers = useMemo(() => {
    return careers.filter((career) => {
      const matchesCategory =
        activeCategory === "All Careers" || career.category === activeCategory;

      const keyword = search.toLowerCase();

      const matchesSearch =
        career.title.toLowerCase().includes(keyword) ||
        career.category.toLowerCase().includes(keyword) ||
        career.qualification.toLowerCase().includes(keyword) ||
        career.skills.some((skill) => skill.toLowerCase().includes(keyword));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#545fcf] px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#545fcf]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <Sparkles size={17} />
              Discover Your Potential
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Find Your Path.
              <span className="block text-white">Shape Your Future.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              Explore career opportunities, understand qualifications and
              discover the right career path based on your interests and goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#explore-careers"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#545fcf] transition hover:bg-green-50"
              >
                Explore Careers
                <ArrowRight size={18} />
              </a>

              <a
                href="#career-guide"
                className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Career Guide
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white">9+</h3>
                <p className="mt-1 text-sm text-gray-300">Career Options</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">6</h3>
                <p className="mt-1 text-sm text-gray-300">Career Fields</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">1</h3>
                <p className="mt-1 text-sm text-gray-300">Better Future</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-3xl border-8 border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000"
                alt="Students discussing their career goals"
                className="h-[350px] w-full object-cover sm:h-[430px]"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
              <div className="rounded-xl bg-green-100 p-3 text-green-700">
                <Target size={25} />
              </div>
              <div>
                <p className="font-bold text-gray-900">
                  Your Career, Your Choice
                </p>
                <p className="text-xs text-gray-500">Start exploring today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Categories */}
      <section className="px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#545fcf]">
              Explore Opportunities
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Explore Career Fields
            </h2>

            <p className="mt-3 text-gray-500">
              Discover opportunities across different educational backgrounds.
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
                    document.getElementById("explore-careers")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:shadow-lg ${
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
                    <Icon size={24} />
                  </div>

                  <h3 className="text-sm font-bold text-gray-900">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-xs text-gray-500">
                    {category.name === "All Careers"
                      ? careers.length
                      : careers.filter(
                          (career) => career.category === category.name,
                        ).length}{" "}
                    Careers
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Guide */}
      <section
        id="career-guide"
        className="bg-[#f0f4ef] px-4 py-16 sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#64806b]">
              Your Career Journey
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              How to Choose the Right Career?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Follow a simple process to discover a career that matches your
              interests, education and ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-gray-100 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-[#eaf1e9] p-3 text-[#545fcf]">
                      <Icon size={25} />
                    </div>

                    <span className="text-3xl font-bold text-gray-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Careers */}
      <section
        id="explore-careers"
        className="scroll-mt-8 px-4 py-16 sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#64806b]">
              Find Your Interest
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Popular Career Options
            </h2>

            <p className="mt-3 text-gray-500">
              Explore career paths, qualifications, skills and salary
              information.
            </p>
          </div>

          {/* Search */}
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 md:max-w-lg">
              <Search size={20} className="shrink-0 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search careers, skills or qualifications..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <span className="text-sm text-gray-500">
              {filteredCareers.length} Career Options Found
            </span>
          </div>

          {/* Filters */}
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

          {/* Career Cards */}
          {filteredCareers.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCareers.map((career) => (
                <CareerCard
                  key={career.id}
                  career={career}
                  onView={setSelectedCareer}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-100 bg-white py-20 text-center">
              <Search size={40} className="mx-auto text-gray-300" />

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                No Careers Found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another keyword or choose a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Careers");
                }}
                className="mt-5 rounded-lg bg-[#545fcf] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Show All Careers
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Career Detail Modal */}
      {selectedCareer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4"
          onClick={() => setSelectedCareer(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-modal-title"
            className="my-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52">
              <img
                src={selectedCareer.image}
                alt={selectedCareer.title}
                className="h-full w-full object-cover"
              />

              <button
                onClick={() => setSelectedCareer(null)}
                aria-label="Close career details"
                className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-700 shadow"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span className="rounded-full bg-[#eaf1e9] px-3 py-1.5 text-xs font-semibold text-[#545fcf]">
                {selectedCareer.category}
              </span>

              <h2
                id="career-modal-title"
                className="mt-4 text-2xl font-bold text-gray-900"
              >
                {selectedCareer.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-500">
                {selectedCareer.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Qualification</p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    {selectedCareer.qualification}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    {selectedCareer.duration}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Indicative Salary</p>
                  <p className="mt-2 text-sm font-semibold text-[#545fcf]">
                    {selectedCareer.salary}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Career Rating</p>
                  <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-gray-900">
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {selectedCareer.rating} / 5
                  </p>
                </div>
              </div>

              <h3 className="mt-7 font-bold text-gray-900">Required Skills</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedCareer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-[#edf3ec] px-3 py-2 text-xs font-medium text-[#545fcf]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-start gap-2 rounded-xl bg-blue-50 p-4">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-600"
                />
                <p className="text-sm leading-6 text-blue-800">
                  Research the relevant entrance examinations, eligibility
                  requirements and professional qualifications before choosing
                  this career.
                </p>
              </div>

              <button
                onClick={() => setSelectedCareer(null)}
                className="mt-7 w-full rounded-xl bg-[#545fcf] py-3.5 font-semibold text-white transition hover:bg-[#545fcf]"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="px-4 pb-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#545fcf] px-6 py-14 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#a8d5ad]">
            <GraduationCap size={35} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white">
            Your Dreams Deserve a Direction
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300">
            Every successful career starts with the right decision. Explore
            opportunities, discover your strengths and take the first step
            towards your dream profession.
          </p>

          <a
            href="#explore-careers"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#545fcf] transition hover:bg-green-50"
          >
            Explore Career Options
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

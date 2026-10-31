import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  GraduationCap,
  Building2,
  IndianRupee,
  Star,
  Trophy,
  Users,
  BookOpen,
  Wifi,
  Home,
  CheckCircle2,
  Plus,
  X,
  ArrowRight,
  SlidersHorizontal,
  GitCompareArrows,
  Award,
  BriefcaseBusiness,
} from "lucide-react";
import Navbar from "./Navbar";

const collegesData = [
  {
    id: 1,
    name: "Delhi Institute of Technology",
    shortName: "DIT",
    location: "New Delhi, Delhi",
    type: "Government",
    category: "University",
    rating: 4.5,
    fees: 85000,
    placement: 8.5,
    highestPackage: 24,
    naac: "A+",
    courses: ["B.Tech", "M.Tech", "MCA", "MBA"],
    students: "8,500+",
    established: 1995,
    hostel: true,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=700",
    description: "Quality technical education and industry-focused learning.",
  },
  {
    id: 2,
    name: "National College of Management",
    shortName: "NCM",
    location: "Noida, Uttar Pradesh",
    type: "Private",
    category: "College",
    rating: 4.3,
    fees: 125000,
    placement: 6.8,
    highestPackage: 18,
    naac: "A",
    courses: ["BCA", "MCA", "BBA", "MBA"],
    students: "6,000+",
    established: 2005,
    hostel: true,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700",
    description: "Career-oriented education with modern campus facilities.",
  },
  {
    id: 3,
    name: "Shivam University",
    shortName: "SU",
    location: "Greater Noida, Uttar Pradesh",
    type: "Private",
    category: "University",
    rating: 4.6,
    fees: 110000,
    placement: 7.5,
    highestPackage: 22,
    naac: "A+",
    courses: ["B.Tech", "BCA", "MCA", "MBA"],
    students: "12,000+",
    established: 2008,
    hostel: true,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=700",
    description: "A multidisciplinary learning environment for students.",
  },
  {
    id: 4,
    name: "City Government College",
    shortName: "CGC",
    location: "Ghaziabad, Uttar Pradesh",
    type: "Government",
    category: "College",
    rating: 4.1,
    fees: 35000,
    placement: 4.5,
    highestPackage: 10,
    naac: "B++",
    courses: ["BA", "B.Com", "B.Sc", "MA"],
    students: "5,000+",
    established: 1985,
    hostel: false,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700",
    description: "Affordable higher education with diverse academic programs.",
  },
  {
    id: 5,
    name: "Modern Technical University",
    shortName: "MTU",
    location: "Lucknow, Uttar Pradesh",
    type: "Private",
    category: "University",
    rating: 4.4,
    fees: 95000,
    placement: 7.2,
    highestPackage: 20,
    naac: "A",
    courses: ["B.Tech", "M.Tech", "BCA", "MBA"],
    students: "10,000+",
    established: 2001,
    hostel: true,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700",
    description: "Technology-driven education and professional development.",
  },
  {
    id: 6,
    name: "National Arts and Science College",
    shortName: "NASC",
    location: "Delhi NCR",
    type: "Government",
    category: "College",
    rating: 4.2,
    fees: 45000,
    placement: 5.5,
    highestPackage: 12,
    naac: "A",
    courses: ["BA", "B.Sc", "B.Com", "MA"],
    students: "7,000+",
    established: 1990,
    hostel: false,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700",
    description: "Academic excellence across arts, science and commerce.",
  },
];

const formatFees = (amount) => `₹${amount.toLocaleString("en-IN")}`;

const comparisonRows = [
  {
    title: "Basic Information",
    rows: [
      { label: "Institution Type", key: "type" },
      { label: "Category", key: "category" },
      { label: "Location", key: "location" },
      { label: "Established", key: "established" },
      { label: "Student Strength", key: "students" },
    ],
  },
  {
    title: "Academic Information",
    rows: [
      { label: "Courses Offered", key: "courses" },
      { label: "NAAC Grade", key: "naac" },
      { label: "Student Rating", key: "rating" },
    ],
  },
  {
    title: "Fees & Placements",
    rows: [
      { label: "Annual Tuition Fees", key: "fees" },
      { label: "Average Placement Package", key: "placement" },
      { label: "Highest Package", key: "highestPackage" },
    ],
  },
  {
    title: "Campus Facilities",
    rows: [{ label: "Hostel Facility", key: "hostel" }],
  },
];

function getValue(college, key) {
  const value = college[key];

  if (key === "fees") return formatFees(value);
  if (key === "placement") return `${value} LPA`;
  if (key === "highestPackage") return `${value} LPA`;
  if (key === "rating") return `★ ${value} / 5`;
  if (key === "courses") return value.join(", ");
  if (key === "hostel") return value ? "Available" : "Not Available";

  return value;
}

export default function CollegeCompare() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [selectedColleges, setSelectedColleges] = useState([1, 2]);

  const filteredColleges = useMemo(() => {
    return collegesData.filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(search.toLowerCase()) ||
        college.location.toLowerCase().includes(search.toLowerCase()) ||
        college.courses.some((course) =>
          course.toLowerCase().includes(search.toLowerCase()),
        );

      const matchesLocation =
        location === "All Locations" || college.location.includes(location);

      const matchesType = type === "All Types" || college.type === type;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [search, location, type]);

  const selected = collegesData.filter((college) =>
    selectedColleges.includes(college.id),
  );

  const toggleCollege = (id) => {
    setSelectedColleges((previous) => {
      if (previous.includes(id)) {
        return previous.filter((item) => item !== id);
      }

      if (previous.length >= 3) {
        return previous;
      }

      return [...previous, id];
    });
  };

  const clearComparison = () => {
    setSelectedColleges([]);
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#545fcf] px-4 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <GitCompareArrows size={17} />
              Smart College Comparison
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Compare Colleges.
              <span className="block text-white">Choose Your Future.</span>
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-gray-300">
              Compare colleges and universities based on fees, placements,
              courses, rankings and facilities. Make a smarter decision for your
              education.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white">3</h3>
                <p className="text-sm text-gray-300">Colleges at a time</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">6+</h3>
                <p className="text-sm text-gray-300">Comparison factors</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Easy</h3>
                <p className="text-sm text-gray-300">Decision making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-4 pt-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Find Colleges & Universities
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Search and select institutions you want to compare.
            </p>
          </div>

          <div className="grid gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 md:col-span-1">
              <Search size={19} className="shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Search college or course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-sm outline-none"
              />
            </div>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
            >
              <option>All Locations</option>
              <option>New Delhi</option>
              <option>Noida</option>
              <option>Greater Noida</option>
              <option>Ghaziabad</option>
              <option>Lucknow</option>
              <option>Delhi NCR</option>
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
            >
              <option>All Types</option>
              <option>Government</option>
              <option>Private</option>
            </select>
          </div>
        </div>
      </section>

      {/* College Selection */}
      <section className="px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Select Colleges to Compare
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Select up to 3 colleges for side-by-side comparison.
              </p>
            </div>

            <span className="rounded-full bg-[#eaf1e9] px-4 py-2 text-sm font-semibold text-[#545fcf]">
              {selectedColleges.length} / 3 Selected
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredColleges.map((college) => {
              const isSelected = selectedColleges.includes(college.id);
              const disabled = !isSelected && selectedColleges.length >= 3;

              return (
                <article
                  key={college.id}
                  className={`overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg ${
                    isSelected
                      ? "border-[#545fcf] ring-1 ring-[#545fcf]"
                      : "border-gray-100"
                  }`}
                >
                  <div className="relative h-48">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#545fcf]">
                      {college.type}
                    </span>

                    {isSelected && (
                      <span className="absolute right-4 top-4 flex items-center gap-1 rounded-lg bg-[#545fcf] px-3 py-1.5 text-xs font-semibold text-white">
                        <CheckCircle2 size={14} />
                        Selected
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {college.name}
                        </h3>
                        <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                          <MapPin size={15} />
                          {college.location}
                        </p>
                      </div>

                      <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-gray-700">
                        <Star
                          size={15}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        {college.rating}
                      </span>
                    </div>

                    <p className="mt-4 min-h-10 text-sm leading-5 text-gray-500">
                      {college.description}
                    </p>

                    <div className="my-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Annual Fees</p>
                        <p className="mt-1 font-bold text-gray-900">
                          {formatFees(college.fees)}
                        </p>
                      </div>

                      <div className="rounded-xl bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Avg. Package</p>
                        <p className="mt-1 font-bold text-gray-900">
                          {college.placement} LPA
                        </p>
                      </div>
                    </div>

                    <button
                      disabled={disabled}
                      onClick={() => toggleCollege(college.id)}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isSelected
                          ? "border border-[#545fcf] bg-[#eaf1e9] text-[#545fcf] hover:bg-red-50 hover:text-red-600"
                          : disabled
                            ? "cursor-not-allowed bg-gray-100 text-gray-400"
                            : "bg-[#545fcf] text-white hover:bg-[#545fcf]"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle2 size={17} />
                          Remove from Compare
                        </>
                      ) : (
                        <>
                          <Plus size={17} />
                          Add to Compare
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredColleges.length === 0 && (
            <div className="rounded-2xl bg-white py-16 text-center">
              <Search size={35} className="mx-auto text-gray-300" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No colleges found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try another search or location.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Section */}
      <section
        id="comparison"
        className="scroll-mt-8 bg-[#f0f4ef] px-4 py-16 sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#545fcf]">
                Side-by-side Analysis
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                College Comparison
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Review all the important details before making a decision.
              </p>
            </div>

            <button
              onClick={clearComparison}
              disabled={selected.length === 0}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 hover:text-red-600 disabled:opacity-40"
            >
              <X size={16} />
              Clear All
            </button>
          </div>

          {selected.length >= 2 ? (
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Comparison Header */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: `minmax(130px, 0.8fr) repeat(${selected.length}, minmax(160px, 1fr))`,
                }}
              >
                <div className="border-b border-r border-gray-100 bg-gray-50 p-4">
                  <p className="text-sm font-bold text-gray-700">Comparison</p>
                </div>

                {selected.map((college) => (
                  <div
                    key={college.id}
                    className="border-b border-r border-gray-100 p-4 text-center last:border-r-0"
                  >
                    <img
                      src={college.image}
                      alt={college.name}
                      className="mx-auto h-20 w-full rounded-lg object-cover"
                    />

                    <h3 className="mt-3 text-sm font-bold text-gray-900">
                      {college.shortName}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">{college.name}</p>

                    <button
                      onClick={() => toggleCollege(college.id)}
                      className="mt-3 text-xs font-semibold text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Comparison Rows */}
                {comparisonRows.map((section) => (
                  <div key={section.title} className="contents">
                    <div className="col-span-full border-b border-t border-gray-100 bg-[#f0f4ef] px-4 py-3">
                      <h3 className="text-sm font-bold text-[#545fcf]">
                        {section.title}
                      </h3>
                    </div>

                    {section.rows.map((row) => (
                      <div key={row.key} className="contents">
                        <div className="flex items-center border-b border-r border-gray-100 bg-gray-50 p-4">
                          <span className="text-xs font-semibold text-gray-600 sm:text-sm">
                            {row.label}
                          </span>
                        </div>

                        {selected.map((college) => (
                          <div
                            key={college.id}
                            className="flex items-center justify-center border-b border-r border-gray-100 p-4 text-center text-xs font-medium text-gray-800 last:border-r-0 sm:text-sm"
                          >
                            {row.key === "hostel" ? (
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                  college.hostel
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-600"
                                }`}
                              >
                                {getValue(college, row.key)}
                              </span>
                            ) : (
                              <span>{getValue(college, row.key)}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 p-5">
                <p className="text-xs text-gray-500">
                  Note: This comparison uses sample demonstration data. Verify
                  official fees, placement reports and accreditation directly
                  with each institution before applying.
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <GitCompareArrows size={42} className="mx-auto text-[#545fcf]" />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Select at least 2 colleges
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                Add two or more colleges from the list above to see their fees,
                placements, courses and facilities side by side.
              </p>

              <button
                onClick={() =>
                  document.getElementById("categories")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="mt-6 rounded-xl bg-[#545fcf] px-6 py-3 text-sm font-semibold text-white hover:bg-[#545fcf]"
              >
                Browse Colleges
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#545fcf] px-6 py-12 text-center sm:px-12">
          <GraduationCap size={42} className="mx-auto text-white" />

          <h2 className="mt-5 text-3xl font-bold text-white">
            Make the Right Choice for Your Future
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300">
            Compare institutions, explore opportunities and choose the college
            that matches your educational goals.
          </p>

          <button
            onClick={() =>
              document.getElementById("comparison")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#545fcf] hover:bg-green-50"
          >
            Compare Now
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import {
  GraduationCap,
  Menu,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Users,
  Building2,
  BookOpen,
  UserPlus,
  MessageSquare,
  Trophy,
  CreditCard,
  Settings,
  FileText,
  Landmark,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Globe,
  Link,
  Upload,
  Image,
  Trash2,
  RotateCcw,
  Save,
  ArrowLeft,
  ShieldCheck,
  ChartNoAxesColumn,
  UsersRound,
  Library,
  Bus,
  Dumbbell,
  Utensils,
  Wifi,
  Briefcase,
  Award,
  X,
  CheckCircle2,
} from "lucide-react";

const inputStyle =
  "w-full h-9 rounded border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const selectStyle =
  "w-full h-9 appearance-none rounded border border-slate-200 bg-white px-3 pr-8 text-xs text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const initialForm = {
  collegeName: "",
  shortName: "",
  collegeType: "",
  establishmentYear: "",
  approval: "",
  affiliation: "",
  collegeCode: "",
  website: "",
  status: true,
  address1: "",
  address2: "",
  state: "",
  district: "",
  city: "",
  pinCode: "",
  email: "",
  contact: "",
  alternate: "",
  principal: "",
  helpline: "",
  category: "",
  ownership: "",
  ranking: "",
  naac: "",
  nirf: "",
  totalStudents: "",
  about: "",
};

const facilitiesList = [
  "Hostel",
  "Library",
  "Sports",
  "Placement",
  "Scholarship",
  "Transportation",
  "Canteen",
  "Wi-Fi",
  "Others",
];

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = false,
  type = "text",
  maxLength,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-1 block text-[11px] font-semibold text-slate-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={13}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500"
          />
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          className={`${inputStyle} ${Icon ? "pl-8" : ""}`}
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-1 block text-[11px] font-semibold text-slate-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={selectStyle}
        >
          <option value="" disabled>
            Select {label.toLowerCase()}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={13}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500"
        />
      </div>
    </div>
  );
}

function Section({ title, icon: Icon, color, children }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5">
      <div
        className={`mb-2.5 flex items-center gap-2 rounded-md px-2.5 py-2 ${color}`}
      >
        <Icon size={17} />
        <h2 className="text-xs font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function UploadBox({ title, multiple = false, onFiles, accept, icon: Icon }) {
  return (
    <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-white p-3 text-center transition hover:border-blue-400 hover:bg-blue-50/30">
      <Icon size={25} className="mb-2 text-slate-500" />
      <span className="text-[11px] font-semibold text-slate-800">{title}</span>
      <span className="mt-1 text-[10px] text-slate-500">
        {multiple ? "Upload multiple images" : "JPG, PNG (Max 2MB)"}
      </span>
      <span className="mt-2 rounded border border-blue-200 px-3 py-1 text-[10px] font-semibold text-blue-700">
        Choose {multiple ? "Images" : "File"}
      </span>
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onFiles}
        className="sr-only"
      />
    </label>
  );
}

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Students", icon: Users, expandable: true },
  {
    label: "Colleges",
    icon: Building2,
    expandable: true,
    active: true,
    children: ["All Colleges", "Add College", "College Categories"],
  },
  { label: "Courses", icon: BookOpen, expandable: true },
  { label: "Admissions", icon: UserPlus, expandable: true },
  { label: "Enquiries", icon: MessageSquare },
  { label: "Rankings", icon: Trophy, expandable: true },
  { label: "Subscriptions", icon: CreditCard },
  { label: "Users", icon: UsersRound },
  { label: "Reports", icon: FileText, expandable: true },
  { label: "Settings", icon: Settings },
];

export default function AddCollege() {
  const [form, setForm] = useState(initialForm);
  const [facilities, setFacilities] = useState([]);
  const [logo, setLogo] = useState(null);
  const [images, setImages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const change = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFacility = (facility) => {
    setFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((item) => item !== facility)
        : [...prev, facility],
    );
  };

  const validateImage = (file) => {
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setMessage("Only JPG and PNG images are supported.");
      return false;
    }
    if (file.size > 2 * 1024 * 1024) {
      setMessage("Each image must be smaller than 2MB.");
      return false;
    }
    return true;
  };

  const handleLogo = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!validateImage(file)) return;

    setLogo({
      file,
      url: URL.createObjectURL(file),
    });
    setMessage("");
    e.target.value = "";
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files || []);
    const valid = files.filter(validateImage);

    setImages((prev) => [
      ...prev,
      ...valid.map((file) => ({
        file,
        url: URL.createObjectURL(file),
        id: `${file.name}-${file.lastModified}-${Math.random()}`,
      })),
    ]);

    if (valid.length === files.length) setMessage("");
    e.target.value = "";
  };

  const removeImage = (id) => {
    setImages((prev) => {
      const item = prev.find((image) => image.id === id);
      if (item) URL.revokeObjectURL(item.url);
      return prev.filter((image) => image.id !== id);
    });
  };

  const resetForm = () => {
    if (logo) URL.revokeObjectURL(logo.url);
    images.forEach((image) => URL.revokeObjectURL(image.url));
    setForm(initialForm);
    setFacilities([]);
    setLogo(null);
    setImages([]);
    setMessage("");
  };

  const saveCollege = (e) => {
    e.preventDefault();
    setMessage(
      "College form validated. Connect your backend API to save this record.",
    );
    console.log({
      ...form,
      facilities,
      logo: logo?.file ?? null,
      images: images.map((image) => image.file),
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Sidebar */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      {/* Main area */}
      <div className="min-w-0 lg:ml-52">
        <main className="mx-auto max-w-[1600px] p-3 sm:p-5">
          {/* Page title */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Landmark size={29} className="text-blue-600" />
              <div>
                <h2 className="text-lg font-bold leading-6 text-slate-900 sm:text-xl">
                  Add New College
                </h2>
                <p className="text-[11px] text-slate-500">
                  Add college details to the platform
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={saveCollege}>
            <div className="grid grid-cols-1 items-start gap-3 2xl:grid-cols-[minmax(0,1fr)_228px]">
              {/* Left column */}
              <div className="min-w-0 space-y-2.5">
                <Section
                  title="Basic Information"
                  icon={UsersRound}
                  color="bg-blue-50 text-blue-700"
                >
                  <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
                    <Field
                      label="College Name"
                      name="collegeName"
                      value={form.collegeName}
                      onChange={change}
                      placeholder="Enter college name"
                      icon={Landmark}
                      required
                    />
                    <Field
                      label="Short Name (Abbreviation)"
                      name="shortName"
                      value={form.shortName}
                      onChange={change}
                      placeholder="e.g. AKTU, DU, IITK"
                    />
                    <SelectField
                      label="College Type"
                      name="collegeType"
                      value={form.collegeType}
                      onChange={change}
                      options={[
                        "Government",
                        "Private",
                        "Deemed University",
                        "Autonomous",
                        "Central University",
                        "State University",
                      ]}
                      required
                    />
                    <Field
                      label="Establishment Year"
                      name="establishmentYear"
                      value={form.establishmentYear}
                      onChange={change}
                      placeholder="e.g. 1998"
                      icon={Calendar}
                      type="number"
                      required
                    />
                    <SelectField
                      label="Approval / Affiliation"
                      name="approval"
                      value={form.approval}
                      onChange={change}
                      options={[
                        "UGC",
                        "AICTE",
                        "NAAC",
                        "NBA",
                        "NCTE",
                        "PCI",
                        "Other",
                      ]}
                      required
                    />
                    <SelectField
                      label="Affiliated To"
                      name="affiliation"
                      value={form.affiliation}
                      onChange={change}
                      options={[
                        "AKTU",
                        "Delhi University",
                        "Mumbai University",
                        "UGC",
                        "Autonomous",
                        "Other",
                      ]}
                      required
                    />
                    <Field
                      label="College Code / AISHE Code"
                      name="collegeCode"
                      value={form.collegeCode}
                      onChange={change}
                      placeholder="Enter AISHE / UGC code"
                      icon={MapPin}
                    />
                    <Field
                      label="Website URL"
                      name="website"
                      value={form.website}
                      onChange={change}
                      placeholder="https://www.example.com"
                      icon={Link}
                      type="url"
                    />

                    <div>
                      <label className="mb-1 block text-[11px] font-semibold text-slate-700">
                        Status <span className="text-red-500">*</span>
                      </label>
                      <div className="flex h-9 items-center gap-2">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={form.status}
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              status: !prev.status,
                            }))
                          }
                          className={`relative h-5 w-9 rounded-full transition ${form.status ? "bg-emerald-500" : "bg-slate-300"}`}
                        >
                          <span
                            className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${form.status ? "left-[18px]" : "left-0.5"}`}
                          />
                        </button>
                        <span className="text-[11px] font-semibold">
                          {form.status ? "Active" : "Inactive"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>

                <Section
                  title="Location Details"
                  icon={MapPin}
                  color="bg-emerald-50 text-emerald-800"
                >
                  <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
                    <Field
                      label="Address Line 1"
                      name="address1"
                      value={form.address1}
                      onChange={change}
                      placeholder="Enter address line 1"
                      icon={Building2}
                      required
                    />
                    <Field
                      label="Address Line 2"
                      name="address2"
                      value={form.address2}
                      onChange={change}
                      placeholder="Enter address line 2"
                      icon={Building2}
                    />
                    <SelectField
                      label="State"
                      name="state"
                      value={form.state}
                      onChange={change}
                      options={[
                        "Uttar Pradesh",
                        "Delhi",
                        "Rajasthan",
                        "Maharashtra",
                        "Haryana",
                        "Bihar",
                        "Madhya Pradesh",
                        "Uttarakhand",
                        "Punjab",
                        "Other",
                      ]}
                      required
                    />
                    <SelectField
                      label="District"
                      name="district"
                      value={form.district}
                      onChange={change}
                      options={[
                        "Lucknow",
                        "Noida",
                        "Ghaziabad",
                        "Kanpur",
                        "Jaipur",
                        "Delhi",
                        "Other",
                      ]}
                      required
                    />
                    <SelectField
                      label="City"
                      name="city"
                      value={form.city}
                      onChange={change}
                      options={[
                        "Noida",
                        "Greater Noida",
                        "Lucknow",
                        "Jaipur",
                        "Delhi",
                        "Kanpur",
                        "Other",
                      ]}
                      required
                    />
                    <Field
                      label="PIN Code"
                      name="pinCode"
                      value={form.pinCode}
                      onChange={change}
                      placeholder="Enter PIN code"
                      icon={FileText}
                      maxLength={6}
                      required
                    />
                  </div>
                </Section>

                <Section
                  title="Contact Information"
                  icon={Phone}
                  color="bg-amber-50 text-amber-950"
                >
                  <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
                    <Field
                      label="Official Email"
                      name="email"
                      value={form.email}
                      onChange={change}
                      placeholder="Enter official email"
                      icon={Mail}
                      type="email"
                      required
                    />
                    <Field
                      label="Contact Number"
                      name="contact"
                      value={form.contact}
                      onChange={change}
                      placeholder="Enter contact number"
                      icon={Phone}
                      type="tel"
                      required
                    />
                    <Field
                      label="Alternate Number"
                      name="alternate"
                      value={form.alternate}
                      onChange={change}
                      placeholder="Enter alternate number"
                      icon={Phone}
                      type="tel"
                    />
                    <Field
                      label="Principal/Director Name"
                      name="principal"
                      value={form.principal}
                      onChange={change}
                      placeholder="Enter principal name"
                      icon={Users}
                    />
                    <Field
                      label="Admission Helpline"
                      name="helpline"
                      value={form.helpline}
                      onChange={change}
                      placeholder="Enter helpline number"
                      icon={Phone}
                      type="tel"
                    />
                  </div>
                </Section>
              </div>

              {/* Right upload column */}
              <aside className="space-y-2.5">
                <Section
                  title="College Logo"
                  icon={ShieldCheck}
                  color="bg-emerald-50 text-emerald-800"
                >
                  {logo ? (
                    <div className="relative flex h-28 items-center justify-center rounded-md border border-slate-200 p-2">
                      <img
                        src={logo.url}
                        alt="College logo"
                        className="max-h-full max-w-full object-contain"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          URL.revokeObjectURL(logo.url);
                          setLogo(null);
                        }}
                        className="absolute right-1 top-1 rounded bg-red-500 p-1 text-white"
                        aria-label="Remove logo"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ) : (
                    <UploadBox
                      title="Upload College Logo"
                      icon={Upload}
                      accept="image/png,image/jpeg"
                      onFiles={handleLogo}
                    />
                  )}
                </Section>

                <Section
                  title="College Images"
                  icon={Image}
                  color="bg-amber-50 text-amber-900"
                >
                  <UploadBox
                    title="Upload College Images"
                    icon={Image}
                    multiple
                    accept="image/png,image/jpeg"
                    onFiles={handleImages}
                  />

                  {images.length > 0 && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {images.map((image) => (
                        <div
                          key={image.id}
                          className="group relative h-20 overflow-hidden rounded border border-slate-200"
                        >
                          <img
                            src={image.url}
                            alt="College"
                            className="h-full w-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(image.id)}
                            aria-label="Remove college image"
                            className="absolute right-1 top-1 rounded bg-red-600 p-1 text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </Section>
              </aside>
            </div>

            {/* Other Information */}
            <div className="mt-2.5">
              <Section
                title="Other Information"
                icon={FileText}
                color="bg-violet-50 text-violet-800"
              >
                <div className="grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-2 xl:grid-cols-3">
                  <SelectField
                    label="College Category"
                    name="category"
                    value={form.category}
                    onChange={change}
                    options={[
                      "Engineering",
                      "Medical",
                      "Management",
                      "Arts & Science",
                      "Law",
                      "Pharmacy",
                      "Education",
                      "Other",
                    ]}
                    required
                  />
                  <SelectField
                    label="Ownership Type"
                    name="ownership"
                    value={form.ownership}
                    onChange={change}
                    options={[
                      "Government",
                      "Private",
                      "Government-Aided",
                      "Public-Private Partnership",
                    ]}
                    required
                  />
                  <Field
                    label="College Ranking (Internal)"
                    name="ranking"
                    value={form.ranking}
                    onChange={change}
                    placeholder="Enter ranking (optional)"
                    icon={Trophy}
                    type="number"
                  />
                  <SelectField
                    label="NAAC Grade"
                    name="naac"
                    value={form.naac}
                    onChange={change}
                    options={[
                      "A++",
                      "A+",
                      "A",
                      "B++",
                      "B+",
                      "B",
                      "C",
                      "Not Accredited",
                    ]}
                  />
                  <Field
                    label="NIRF Ranking"
                    name="nirf"
                    value={form.nirf}
                    onChange={change}
                    placeholder="Enter NIRF ranking (optional)"
                    icon={ChartNoAxesColumn}
                    type="number"
                  />
                  <Field
                    label="Total Students"
                    name="totalStudents"
                    value={form.totalStudents}
                    onChange={change}
                    placeholder="Enter total students (optional)"
                    icon={UsersRound}
                    type="number"
                  />
                </div>

                <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div>
                    <label
                      htmlFor="about"
                      className="mb-1 block text-[11px] font-semibold text-slate-700"
                    >
                      About College
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      value={form.about}
                      onChange={change}
                      maxLength={1000}
                      rows={3}
                      placeholder="Enter brief description about the college"
                      className="w-full resize-y rounded border border-slate-200 px-3 py-2 text-xs outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                    <p className="text-right text-[10px] text-slate-400">
                      {form.about.length}/1000
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] font-semibold text-slate-700">
                      Facilities (Select all that apply)
                    </p>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3">
                      {facilitiesList.map((facility) => (
                        <label
                          key={facility}
                          className="flex cursor-pointer items-center gap-2 text-[11px] text-slate-600"
                        >
                          <input
                            type="checkbox"
                            checked={facilities.includes(facility)}
                            onChange={() => toggleFacility(facility)}
                            className="h-3.5 w-3.5 accent-blue-600"
                          />
                          {facility}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>
            </div>

            {message && (
              <div
                role="status"
                className="mt-3 flex items-start gap-2 rounded-md bg-blue-50 p-3 text-xs text-blue-700"
              >
                <CheckCircle2 size={15} className="shrink-0" />
                {message}
              </div>
            )}

            {/* Footer buttons */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
              >
                <RotateCcw size={14} />
                Reset
              </button>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setMessage("College creation cancelled.")}
                  className="rounded-md border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  <Save size={14} />
                  Save College
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

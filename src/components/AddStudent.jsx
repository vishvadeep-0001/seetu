import { useState } from "react";
import {
  GraduationCap,
  UserRound,
  UserPlus,
  CalendarDays,
  User,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  Upload,
  ChevronDown,
  Check,
  ArrowRight,
  X,
} from "lucide-react";

const steps = [
  { title: "Personal Details", subtitle: "Basic information" },
  { title: "Contact Details", subtitle: "Address and contact" },
  { title: "Preview & Submit", subtitle: "Review your information" },
];

const initialForm = {
  fullName: "",
  dob: "",
  gender: "Male",
  fatherName: "",
  motherName: "",
  aadhaar: "",

  category: "",

  mobile: "",
  email: "",
  currentAddress: "",
  permanentAddress: "",
  sameAddress: false,
};

const Field = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = false,
  type = "text",
  maxLength,
}) => (
  <div className="min-w-0">
    <label
      htmlFor={name}
      className="mb-1.5 block text-xs font-semibold text-slate-700 sm:text-sm"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <div className="relative">
      {Icon && (
        <Icon
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
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
        className={`h-10 w-full rounded-md border border-slate-200 bg-white text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
          Icon ? "pl-9 pr-3" : "px-3"
        }`}
      />
    </div>
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => (
  <div className="min-w-0">
    <label
      htmlFor={name}
      className="mb-1.5 block text-xs font-semibold text-slate-700 sm:text-sm"
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
        className="h-10 w-full appearance-none rounded-md border border-slate-200 bg-white px-3 pr-9 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
      />
    </div>
  </div>
);

const SectionTitle = ({ title, icon: Icon, color }) => (
  <div className={`mb-4 flex items-center gap-3 rounded-md px-3 py-2 ${color}`}>
    <Icon size={20} className="shrink-0" />
    <h2 className="text-sm font-bold sm:text-base">{title}</h2>
  </div>
);

export default function AddStudent() {
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "currentAddress" && prev.sameAddress) {
        updated.permanentAddress = value;
      }

      if (name === "sameAddress" && checked) {
        updated.permanentAddress = prev.currentAddress;
      }

      return updated;
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (step < 2) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Form details are ready for submission.");
    console.log("Student details:", form);
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <>
          <section className="rounded-lg border border-slate-100 p-3 sm:p-4">
            <SectionTitle
              title="Personal Information"
              icon={UserRound}
              color="bg-blue-50 text-blue-700"
            />

            <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
              <Field
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                icon={UserPlus}
                required
              />

              <Field
                label="Date of Birth"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                type="date"
                icon={CalendarDays}
                required
              />

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700 sm:text-sm">
                  Gender <span className="text-red-500">*</span>
                </label>

                <div className="flex h-10 flex-wrap items-center gap-x-4 gap-y-2">
                  {["Male", "Female", "Other"].map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-1.5 text-sm text-slate-700"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={form.gender === option}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 accent-blue-600"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <Field
                label="Father's Name"
                name="fatherName"
                value={form.fatherName}
                onChange={handleChange}
                placeholder="Enter father's name"
                icon={User}
                required
              />

              <Field
                label="Mother's Name"
                name="motherName"
                value={form.motherName}
                onChange={handleChange}
                placeholder="Enter mother's name"
                icon={User}
                required
              />

              <Field
                label="Aadhaar Number"
                name="aadhaar"
                value={form.aadhaar}
                onChange={handleChange}
                placeholder="Enter 12 digit Aadhaar number"
                icon={CreditCard}
                maxLength={12}
              />

              <SelectField
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                options={["General", "OBC", "SC", "ST", "EWS"]}
                required
              />
            </div>
          </section>

          <div className="mt-4 rounded-lg border border-slate-100 p-3 sm:p-4">
            <SectionTitle
              title="Contact Information"
              icon={MapPin}
              color="bg-amber-50 text-amber-900"
            />

            <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
              <Field
                label="Mobile Number"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter 10 digit mobile number"
                icon={Phone}
                type="tel"
                maxLength={10}
                required
              />

              <Field
                label="Email ID"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
                icon={Mail}
                type="email"
                required
              />

              <div>
                <label
                  htmlFor="currentAddress"
                  className="mb-1.5 block text-xs font-semibold text-slate-700 sm:text-sm"
                >
                  Current Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="currentAddress"
                  name="currentAddress"
                  value={form.currentAddress}
                  onChange={handleChange}
                  placeholder="Enter current address"
                  required
                  rows={3}
                  className="w-full resize-y rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <label
                    htmlFor="permanentAddress"
                    className="text-xs font-semibold text-slate-700 sm:text-sm"
                  >
                    Permanent Address
                  </label>

                  <label className="flex cursor-pointer items-center gap-1.5 text-xs text-slate-600">
                    <input
                      type="checkbox"
                      name="sameAddress"
                      checked={form.sameAddress}
                      onChange={handleChange}
                      className="h-4 w-4 accent-blue-600"
                    />
                    Same as current address
                  </label>
                </div>

                <textarea
                  id="permanentAddress"
                  name="permanentAddress"
                  value={form.permanentAddress}
                  onChange={handleChange}
                  placeholder="Enter permanent address"
                  readOnly={form.sameAddress}
                  rows={3}
                  className="w-full resize-y rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 read-only:bg-slate-50"
                />
              </div>
            </div>
          </div>
        </>
      );
    }

    if (step === 1) {
      return (
        <section className="rounded-lg border border-slate-100 p-4">
          <SectionTitle
            title="Contact Information"
            icon={MapPin}
            color="bg-amber-50 text-amber-900"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field
              label="Mobile Number"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter 10 digit mobile number"
              icon={Phone}
              type="tel"
              maxLength={10}
              required
            />
            <Field
              label="Email ID"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              icon={Mail}
              type="email"
              required
            />
            <div>
              <label
                htmlFor="currentAddress"
                className="mb-2 block text-sm font-medium"
              >
                Current Address *
              </label>
              <textarea
                id="currentAddress"
                name="currentAddress"
                value={form.currentAddress}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter current address"
                className="w-full rounded-md border border-slate-200 p-3 text-sm outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="permanentAddress"
                className="mb-2 block text-sm font-medium"
              >
                Permanent Address
              </label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={form.permanentAddress}
                onChange={handleChange}
                rows={4}
                placeholder="Enter permanent address"
                className="w-full rounded-md border border-slate-200 p-3 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="rounded-lg border border-slate-100 p-4">
        <SectionTitle
          title="Review Student Information"
          icon={Check}
          color="bg-blue-50 text-blue-700"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(form)
            .filter(([key]) => key !== "sameAddress")
            .map(([key, value]) => (
              <div key={key} className="rounded-md bg-slate-50 p-3">
                <p className="text-xs capitalize text-slate-500">
                  {key.replace(/([A-Z])/g, " $1")}
                </p>
                <p className="mt-1 break-words text-sm font-medium text-slate-800">
                  {value || "—"}
                </p>
              </div>
            ))}
        </div>
        {photo && (
          <img
            src={photo}
            alt="Student preview"
            className="mt-4 h-24 w-24 rounded-lg object-cover"
          />
        )}
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="mx-auto max-w-[1600px] p-3 sm:p-5">
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          {/* Blue banner */}
          <div className="relative mb-4 flex min-h-20 items-center gap-4 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-700 px-4 py-4 text-white sm:px-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/15">
              <UserPlus size={34} />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold sm:text-2xl">Student Details</h2>
              <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                Fill in the student information carefully
              </p>
            </div>
            <GraduationCap
              size={100}
              className="absolute -right-2 -top-2 rotate-12 text-white/10 sm:right-4 sm:size-28"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
            {/* Sidebar stepper */}
            <aside className="rounded-lg bg-slate-50 p-3 lg:p-4">
              <div className="flex gap-3 overflow-x-auto lg:flex-col lg:gap-0">
                {steps.map((item, index) => {
                  const active = step === index;
                  const complete = step > index;

                  return (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => setStep(index)}
                      className="flex min-w-[145px] flex-1 items-start gap-3 text-left lg:min-w-0 lg:flex-none lg:pb-7"
                    >
                      <div className="flex flex-col items-center">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                            active
                              ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                              : complete
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-200 text-slate-700"
                          }`}
                        >
                          {complete ? <Check size={17} /> : index + 1}
                        </span>
                        {index !== steps.length - 1 && (
                          <span className="hidden h-8 w-0.5 bg-slate-300 lg:block" />
                        )}
                      </div>

                      <div className="pt-1">
                        <p
                          className={`whitespace-nowrap text-xs font-bold sm:text-sm ${active ? "text-blue-700" : "text-slate-800"}`}
                        >
                          {item.title}
                        </p>
                        <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                          {item.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Form */}
            <form
              onSubmit={step === 4 ? handleSubmit : handleNext}
              className="min-w-0"
            >
              {step === 0 && (
                <div className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_180px]">
                  <div className="min-w-0">{renderStep()}</div>
                </div>
              )}

              {step !== 0 && renderStep()}

              {message && (
                <div
                  role="status"
                  className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-700"
                >
                  {message}
                </div>
              )}

              {/* Footer buttons */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setPhoto(null);
                    setStep(0);
                    setMessage("");
                  }}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
                >
                  <X size={15} />
                  Cancel
                </button>

                <div className="ml-auto flex gap-2">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep((prev) => prev - 1)}
                      className="rounded-md border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Back
                    </button>
                  )}

                  {step < 4 ? (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      Submit <Check size={16} />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

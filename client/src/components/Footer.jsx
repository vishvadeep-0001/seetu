import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mx-auto grid max-w-362.5 grid-cols-2 gap-8 px-5 py-10 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-red-600 font-serif text-xl text-white">
              S
            </span>
            <span className="text-xl font-extrabold text-blue-700">Seetu.</span>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-6 text-slate-500">
            Your trusted career guide, helping students discover the right
            colleges, courses and opportunities for a brighter future.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-slate-500">
            <span>f</span>
            <span>◎</span>
            <span>▶</span>
            <span>in</span>
          </div>
        </div>

        {[
          {
            title: "Quick Links",
            links: [
              "Colleges",
              "Exams",
              "Careers",
              "Rankings",
              "Scholarships",
              "Resources",
            ],
          },
          {
            title: "Top Exams",
            links: ["JEE Main", "NEET UG", "CUET UG", "CAT", "CLAT", "UPSC"],
          },
          {
            title: "Popular Courses",
            links: ["B.Tech", "M.B.A", "BCA", "BBA", "MBA", "B.Sc"],
          },
          {
            title: "For Partners",
            links: [
              "Advertise With Us",
              "College Registration",
              "Counselling Login",
              "Become a Partner",
              "Contact Us",
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-xs font-bold">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[11px] text-slate-500 hover:text-blue-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 lg:col-span-1">
          <h3 className="mb-3 text-xs font-bold">Subscribe to Newsletter</h3>
          <p className="mb-3 text-[11px] text-slate-500">
            Get the latest updates on colleges, exams, scholarships and more.
          </p>
          <div className="flex rounded-lg border border-slate-200 p-1">
            <input
              placeholder="Enter your email"
              className="min-w-0 w-full px-2 text-[10px] outline-none"
            />
            <button className="rounded-md bg-blue-600 px-3 py-2 text-[10px] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-362.5 flex-wrap justify-between gap-3 border-t border-slate-100 px-5 py-4 text-[10px] text-slate-500 lg:px-8">
        <p>© 2025 Seetu. All Rights Reserved.</p>
        <div className="flex gap-5">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import logo from "../assets/images/seetu-logo.png";

const Footer = () => {
  return (
    <div>
      <div className="mx-auto grid max-w-362.5 grid-cols-2 gap-8 px-5 py-10 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="" className="shrink-0" />
            </Link>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-6 text-slate-500">
            Your trusted career guide, helping students discover the right
            colleges, courses and opportunities for a brighter future.
          </p>
        </div>

        {[
          {
            title: "Quick Links",
            links: [
              "Colleges",
              "Courses",
              "Comapre",
              "Careers",
              "Blog",
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
                  <Link
                    to={`/${link}`}
                    className="text-[11px] text-slate-500 hover:text-blue-600"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-362.5 flex-wrap justify-between gap-3 border-t border-slate-100 px-5 py-4 text-[14px] text-slate-500 lg:px-8">
        <p>All Rights Reserved. © Seetu </p>
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

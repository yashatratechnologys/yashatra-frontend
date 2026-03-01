import { Link } from "react-router-dom";
import TechCarousel from "../components/TechCarousel/TechCarousel";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative pt-32 pb-24 px-6 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-ai.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Innovation Through <br />
              Artificial Intelligence & Technology
            </h1>

            <p className="mt-6 text-blue-100 text-lg">
              AI Solutions | Software Development | Industrial Training
            </p>

            <p className="mt-4 text-blue-200">
              Yashastra Technologies Pvt Ltd delivers cutting-edge AI solutions,
              software development and advanced training programs designed to
              bridge the gap between education and industry.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Started
              </Link>

              <Link
                to="/courses"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Intelligence",
                icon: "🧠",
                items: [
                  "Machine Learning",
                  "Data Analytics",
                  "Computer Vision",
                  "Automation Systems",
                ],
              },
              {
                title: "Software Development",
                icon: "💻",
                items: [
                  "Web & Mobile Apps",
                  "ERP Solutions",
                  "Custom Software",
                ],
              },
              {
                title: "Industrial Training",
                icon: "🎓",
                items: [
                  "AI & Data Science",
                  "Python & Full Stack",
                  "Internship Programs",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-3">
                  <span className="text-xl">{service.icon}</span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>

                <div className="px-6 py-6">
                  <ul className="space-y-3 text-gray-700">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-blue-600">✔</span> {item}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t my-6"></div>

                  <div className="text-center">
                    <button className="text-blue-900 font-semibold hover:underline">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY SECTION WITH FLOATING STATS ================= */}
      <section
        className="relative text-white pt-40 pb-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-ai.png')" }}
      >
                  {/* Floating Stats */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-30">
            <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white rounded-xl shadow-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 md:min-w-[750px]">

              {[
                { number: "500+", label: "Students Trained" },
                { number: "50+", label: "Live Projects" },
                { number: "20+", label: "Industry Collaborations" },
              ].map((stat, index) => (
                <div key={index} className="flex-1 text-center relative">
                  <h3 className="text-4xl font-bold">{stat.number}</h3>
                  <p className="text-blue-200 mt-2">{stat.label}</p>

                  {index !== 2 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-blue-700"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-blue-800/80"></div>

        <div className="relative max-w-7xl mx-auto">



          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Yashastra Technologies?
              </h2>

              <ul className="space-y-4 text-blue-100">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✔</span>
                  Practical Industry Exposure
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✔</span>
                  Live Project Experience
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✔</span>
                  Placement Skill Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✔</span>
                  Professional Mentorship
                </li>
              </ul>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition shadow-lg">
                Download Brochure
              </button>
            </div>

            <div className="relative">
              <img
                src="/team-working.png"
                alt="Team Working"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-blue-900">
          Start Your Journey With Yashastra Technologies Today
        </h2>
        <p className="mt-4 text-gray-600">
          Transform your career or business with innovative technology solutions.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Contact Us Now
        </Link>
      </section>
      {/* ================= TECHNOLOGY CAROUSEL ================= */}
      <TechCarousel />

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
};

export default Home;
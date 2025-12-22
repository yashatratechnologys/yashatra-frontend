import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-[#1FA6A0] text-[#5FE0D6]"
      : "text-white hover:bg-[#1FA6A0] hover:text-[#5FE0D6]";

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        bg-[#0F2A44]
        transition-all duration-300
        ${scrolled ? "py-2 shadow-xl" : "py-4 shadow-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 ml-0.5">
          <img
            src={Logo}
            alt="Yashastra Technologys"
            className={`transition-all duration-300 ${
              scrolled ? "h-13.75" : "h-17.5"
            }`}
          />
        </NavLink>

        {/* Hamburger */}
        <button
          className="ml-auto md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu */}
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto
          bg-[#0F2A44] md:flex md:items-center md:gap-8`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 px-6 md:px-0 py-6 md:py-0">
            
            {[
              { name: "Home", path: "/", end: true },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Programs", path: "/courses" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${navLinkClass({ isActive })} px-4 py-2 rounded-md transition`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Register Button */}
            <li>
              <NavLink
                to="/register"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-blue-800"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white px-5 py-2 rounded-md transition`
                }
              >
                Register
              </NavLink>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="px-6 pb-6 md:pb-0 md:ml-4">
            <div className="flex items-center bg-white rounded-md px-3 py-2 shadow-md w-full md:w-[260px]">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none text-gray-700"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

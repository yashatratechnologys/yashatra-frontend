import "./Navbar.css";
import Logo from "../../assets/logo.jpeg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <img src={Logo} alt="Logo" className="navbar-logo" />

        {/* Routes */}
        <ul className="navbar-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        {/* Search Bar */}
        <div className="search-bar-wrapper">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <MagnifyingGlassIcon className="search-icon" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

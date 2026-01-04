import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/common/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Courses from "./Pages/Courses";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
// import Login from "./pages/admin/Login";
// import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Padding for fixed navbar */}
      <div className="pt-7.5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin routes (Phase-2) */}
          {/* <Route path="/admin/login" element={<Login />} /> */}
          {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

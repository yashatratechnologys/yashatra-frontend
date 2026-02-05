import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/common/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Public pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Register from "./Pages/Register";
import Courses from "./Pages/Courses";
import Services from "./Pages/Servicess";
import Contact from "./Pages/Contact";
// done with mapping public pages

// Admin pages
import Login from "./Pages/admin/Login";
import AdminLayout from "./Pages/admin/AdminLayout";
import Dashboard from "./Pages/admin/Dashboard";
import Contacts from "./Pages/admin/Contacts";
import Registrations from "./Pages/admin/Registrations";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Padding for fixed navbar */}
      <div className="pt-16">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Login (PUBLIC) */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="registrations" element={<Registrations />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

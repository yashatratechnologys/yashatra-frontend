import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/common/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Services from "./pages/Servicess";
import Contact from "./pages/Contact";

// Admin pages
import Login from "./pages/admin/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Contacts from "./pages/admin/Contacts";
import Registrations from "./pages/admin/Registrations";

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

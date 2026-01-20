import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/common/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Courses from "./Pages/Courses";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./Pages/admin/AdminLayout";
// import Dashboard from "./Pages/admin/Dashboard";
import Contacts from "./Pages/admin/Contacts";
import Registrations from "./Pages/admin/Registrations";

import ProtectedRoute from "./components/ProtectedRoute";




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

          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            </Route>
            {/* <Route path="/admin/login" element={<Login />} />
            <Route index element={<Dashboard />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="registrations" element={<Registrations />} />
          </Route> */}

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
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

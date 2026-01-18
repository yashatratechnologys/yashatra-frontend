import { useState } from "react";
import api from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    department: "",
    qualification: "",
    college: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/register", formData);
      alert("Registration submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        department: "",
        qualification: "",
        college: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20 px-4 mt-9">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Admission / Registration Form
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fill in the details below. Our team will contact you shortly.
        </p>

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 font-medium">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Department</option>
              <option>Computer / IT</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>Electrical</option>
              <option>ENTC</option>
            </select>
          </div>

          {/* Qualification */}
          <div>
            <label className="block mb-1 font-medium">Qualification</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select</option>
              <option>Diploma</option>
              <option>BE / BTech</option>
              <option>BSc</option>
              <option>Other</option>
            </select>
          </div>

          {/* College */}
          <div>
            <label className="block mb-1 font-medium">College Name</label>
            <input
              type="text"
              name="college"
              placeholder="Enter college name"
              value={formData.college}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block mb-1 font-medium">Interested Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Course</option>
              <option>MERN Stack</option>
              <option>Java Full Stack</option>
              <option>Python</option>
              <option>AutoCAD</option>
              <option>Industrial Training</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Message / Query</label>
            <textarea
              rows="4"
              name="message"
              placeholder="Any specific requirement..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-center gap-4 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-800 text-white px-8 py-3 rounded-md hover:bg-blue-900 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            <button
              type="reset"
              onClick={() =>
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  gender: "",
                  department: "",
                  qualification: "",
                  college: "",
                  course: "",
                  message: "",
                })
              }
              className="bg-gray-300 px-8 py-3 rounded-md hover:bg-gray-400 transition"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;

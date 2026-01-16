const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 mt-9">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get in touch with Yashastra Technologys Pvt. Ltd. for training,
            admissions, or collaboration opportunities.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-800 text-white px-8 py-3 rounded-md hover:bg-blue-900 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">

            {/* Info */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Contact Information
              </h2>

              <p className="text-gray-700 mb-2">
                <strong>Address:</strong><br />
                Yashastra Technologys Pvt. Ltd.<br />
                Nandurbar, Maharashtra, India
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong><br />
                +91 9049521349, +91 7767858845
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Email:</strong><br />
                yashastratechnologies@gmail.com
              </p>

              <p className="text-gray-700">
                <strong>Working Hours:</strong><br />
                Mon – Sat: 9:00 AM – 6:00 PM
              </p>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
  title="Yashastra Technologies Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.3441712829267!2d74.23885517431643!3d21.376348875751248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf09b070a4fabb%3A0xdb40df063d75f095!2sYashastra%20Technologies%20PVT.LTD!5e0!3m2!1sen!2sin!4v1768585378418!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

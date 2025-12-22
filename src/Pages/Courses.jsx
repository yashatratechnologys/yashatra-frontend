const courses = [
  {
    branch: "Computer / IT",
    duration: "3 – 6 Months",
    tools: ["MERN Stack", "Java", "Python", "DBMS", "Git"],
    description:
      "Industry-oriented IT programs focusing on software development, full-stack technologies, and real-world projects.",
  },
  {
    branch: "Mechanical Engineering",
    duration: "4 – 8 Weeks",
    tools: ["AutoCAD", "SolidWorks", "CATIA", "ANSYS"],
    description:
      "Practical industrial training with hands-on experience in design, drafting, and analysis tools.",
  },
  {
    branch: "Civil Engineering",
    duration: "4 – 8 Weeks",
    tools: ["AutoCAD", "STAAD Pro", "ETABS"],
    description:
      "Training focused on structural design, drafting, estimation, and real-site oriented practices.",
  },
  {
    branch: "Electrical Engineering",
    duration: "4 – 6 Weeks",
    tools: ["PLC Basics", "Electrical CAD", "Power Systems"],
    description:
      "Skill-based programs covering electrical design, control systems, and industrial applications.",
  },
  {
    branch: "Electronics & Telecommunication",
    duration: "4 – 6 Weeks",
    tools: ["Embedded Systems", "PCB Design", "MATLAB"],
    description:
      "Hands-on training in electronics, embedded concepts, and communication systems.",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 mt-9">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">
            Courses & Training Programs
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer industry-aligned training programs for engineering and diploma
            students, designed to enhance practical skills and career readiness.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                {course.branch}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                Duration: <span className="font-medium">{course.duration}</span>
              </p>

              <p className="text-gray-700 mb-4">
                {course.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-5">
                {course.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="/register"
                className="inline-block bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
              >
                Register Interest
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

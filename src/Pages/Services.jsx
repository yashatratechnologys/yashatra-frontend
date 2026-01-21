const services = [
  {
    title: "IT Training Programs",
    description:
      "Professional IT training programs designed to meet industry requirements, focusing on practical skills, real-time projects, and modern technologies.",
    points: ["MERN Stack", "Java Full Stack", "Python", "Database & Git"],
  },
  {
    title: "Industrial Training",
    description:
      "Hands-on industrial training for diploma and engineering students to bridge the gap between academic knowledge and industry practices.",
    points: ["Mechanical", "Civil", "Electrical", "ENTC"],
  },
  {
    title: "Software Development",
    description:
      "Custom software development services including web applications, enterprise solutions, and automation systems.",
    points: ["Web Applications", "Enterprise Systems", "API Development"],
  },
  {
    title: "eLearning & LMS Solutions",
    description:
      "Digital learning solutions including Learning Management Systems, virtual classrooms, and online assessment platforms.",
    points: ["LMS Platforms", "Virtual Classrooms", "Online Exams"],
  },
  {
    title: "College Collaboration",
    description:
      "Skill development programs and workshops in collaboration with colleges to enhance student employability.",
    points: ["Faculty Training", "Student Workshops", "Skill Certification"],
  },
  {
    title: "Career Guidance & Support",
    description:
      "Career-oriented support services to help students choose the right path and prepare for professional opportunities.",
    points: ["Career Counseling", "Interview Preparation", "Skill Assessment"],
  },
];

const Servicess = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 mt-9">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Yashastra Technologys provides comprehensive training and technology
            solutions focused on quality, innovation, and career growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                {service.title}
              </h2>

              <p className="text-gray-700 mb-4">
                {service.description}
              </p>

              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-6">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <a
                href="/register"
                className="inline-block bg-blue-800 text-white px-5 py-2 rounded-md hover:bg-blue-900 transition"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicess;

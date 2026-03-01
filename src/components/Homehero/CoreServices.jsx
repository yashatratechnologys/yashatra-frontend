const CoreServices = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Artificial Intelligence</h3>
            <ul className="space-y-2 text-blue-100">
              <li>✔ Machine Learning</li>
              <li>✔ Data Analytics</li>
              <li>✔ Automation Systems</li>
            </ul>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Software Development</h3>
            <ul className="space-y-2 text-blue-100">
              <li>✔ Web & Mobile Apps</li>
              <li>✔ ERP Solutions</li>
              <li>✔ Custom Software</li>
            </ul>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Industrial Training</h3>
            <ul className="space-y-2 text-blue-100">
              <li>✔ AI & Data Science</li>
              <li>✔ Python & Full Stack</li>
              <li>✔ Internship Programs</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreServices;

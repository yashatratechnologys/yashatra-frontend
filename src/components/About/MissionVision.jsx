const MissionVision = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Our Mission</h3>
          <p className="text-gray-700">
            To deliver industry-oriented education and training that empowers
            students with practical skills, confidence, and career readiness
            in modern technologies and engineering domains.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Our Vision</h3>
          <p className="text-gray-700">
            To become a trusted center of excellence in professional training and
            technology solutions, shaping skilled professionals for a global workforce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

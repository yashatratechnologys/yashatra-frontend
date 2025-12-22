const reasons = [
  "Industry-experienced trainers",
  "Practical & project-based learning",
  "Modern labs & tools",
  "Career-oriented curriculum",
  "Supportive learning environment",
  "Affordable & value-driven programs",
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Yashastra?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="font-medium text-gray-800">✔ {item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

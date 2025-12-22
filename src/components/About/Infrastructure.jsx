const Infrastructure = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/about/lab.jpg"
          alt="Training Infrastructure"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Infrastructure & Training Approach
          </h2>
          <p className="text-gray-700 mb-4">
            Our training infrastructure is designed to simulate real industry
            environments. We provide modern computer labs, licensed software tools,
            and hands-on sessions for every course.
          </p>
          <p className="text-gray-700">
            Each program includes practical assignments, live demonstrations,
            mini-projects, and real-time problem-solving to ensure students gain
            confidence and job-ready skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;

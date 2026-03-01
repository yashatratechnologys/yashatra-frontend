const HeroSection = () => {
  return (
    <section className="bg-linear-to-r from-blue-950 to-blue-800 text-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering Innovation Through <br />
            Artificial Intelligence & Technology
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Yashastra Technologies Pvt Ltd delivers cutting-edge AI solutions,
            software development, and industrial training programs designed
            to bridge the gap between education and industry.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
              Get Started
            </button>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Explore Programs
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="hidden md:block">
          <img
            src="/ai-hero.png"
            alt="AI Illustration"
            className="rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

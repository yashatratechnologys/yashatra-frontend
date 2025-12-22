const WhoWeAre = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            <strong>Yashastra Technologys Pvt. Ltd.</strong> is a professional
            technology training and software solutions company committed to
            bridging the gap between academic learning and industry requirements.
          </p>
          <p className="text-gray-700">
            We specialize in IT training, industrial training for engineering and
            diploma students, and modern software development solutions. Our
            programs are designed with a strong focus on hands-on experience,
            real-world projects, and skill-based learning.
          </p>
        </div>
        <img
          src="/about/company.jpg"
          alt="Yashastra Technologys"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;

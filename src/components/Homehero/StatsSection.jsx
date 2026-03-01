const StatsSection = () => {
  return (
    <section className="bg-blue-900 text-white py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-8">
        <div>
          <h3 className="text-4xl font-bold">500+</h3>
          <p className="mt-2">Students Trained</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">50+</h3>
          <p className="mt-2">Live Projects</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">20+</h3>
          <p className="mt-2">Industry Collaborations</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

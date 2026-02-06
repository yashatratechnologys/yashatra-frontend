import director1 from "../../assets/hitesh.png";
import director2 from "../../assets/photo.jpeg";
import director3 from "../../assets/harshal.jpeg";

const Directors = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Leadership
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Guiding the organization with vision, innovation, and strategic
          excellence.
        </p>
      </div>

      {/* Directors Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Director 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center
                        transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src={director1}
            alt="Managing Director"
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900">
            Mr. Hitesh Tamboli 
          </h3>
          <p className="text-blue-600 font-medium mb-4">
            Chief Executive Officer (CEO)
          </p>
          <p className="text-gray-600 italic text-sm">
            “Driving innovation and building sustainable business solutions
            through technology and integrity.”
          </p>
        </div>

        {/* Director 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">

  <img
    src={director2}
    alt="Technical Director"
    className="w-36 h-36 mx-auto rounded-full object-cover mb-4 ring-4 ring-blue-100"
  />

  <h3 className="text-xl font-semibold text-gray-900">
    Mr. Vivek Valvi
  </h3>

  <p className="text-blue-600 font-medium">
    Technical Director (CTO)
  </p>

  {/* Credentials */}
  <p className="text-gray-500 text-sm mt-1 mb-4">
    MCA (Master of Computer Applications) | 2+ Years in Teaching & Development
  </p>

  {/* Vision */}
  <p className="text-gray-600 italic text-sm">
    “Focused on delivering scalable, secure, and practical technology
    solutions for real-world impact.”
  </p>
</div>


        {/* Director 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center
                        transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src={director3}
            alt="Operations Director"
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900">
            Mr. Harshal Borse
          </h3>
          <p className="text-blue-600 font-medium mb-4">
            Managing Director ( MD )
          </p>
          <p className="text-gray-600 italic text-sm">
            “Committed to operational excellence, quality delivery, and
            long-term organizational growth.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default Directors;

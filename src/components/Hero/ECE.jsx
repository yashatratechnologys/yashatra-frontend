import "./Department.css";
import etcImg from "../../assets/Department/EC.png";

const ETC = () => {
  return (
    <section className="department-section">
      <div className="department-container">



        {/* Right: Info */}
        <div className="department-info">
          <h2>Electronics & Telecommunication (E&TC)</h2>

          <p className="department-desc">
            The Electronics & Telecommunication program focuses on modern
            communication technologies, embedded systems, and industry-ready
            skills required for electronics and core engineering roles.
          </p>

          <ul className="department-points">
            <li>Embedded Systems & Microcontrollers</li>
            <li>Internet of Things (IoT)</li>
            <li>VLSI Design & Verification</li>
            <li>PCB Design & Hardware Debugging</li>
            <li>Communication Systems & Networking</li>
          </ul>

          <button className="department-btn">
            View E&TC Programs
          </button>
        </div>
        {/* Left: Image */}
        <div className="department-image">
          <img
            src={etcImg}
            alt="Electronics & Telecommunication Department"
          />
        </div>
      </div>
    </section>
  );
};

export default ETC;

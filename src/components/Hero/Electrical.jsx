import "./Department.css";
import electricalImg from "../../assets/Department/EE.png";

const Electrical = () => {
  return (
    <section className="department-section">
      <div className="department-container">



        {/* Right: Info */}
        <div className="department-info">
          <h2>Electrical Engineering</h2>

          <p className="department-desc">
            Electrical Engineering focuses on power systems, automation,
            electric vehicles, and industrial control technologies with
            hands-on practical training.
          </p>

          <ul className="department-points">
            <li>Electric Vehicle (EV) Technology</li>
            <li>PLC & SCADA</li>
            <li>Industrial Automation</li>
            <li>Power Systems & Protection</li>
            <li>Electrical Machines & Drives</li>
          </ul>

          <button className="department-btn">
            View Electrical Programs
          </button>
        </div>
        {/* Left: Image */}
        <div className="department-image">
          <img
            src={electricalImg}
            alt="Electrical Engineering Department"
          />
        </div>
      </div>
    </section>
  );
};

export default Electrical;

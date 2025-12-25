import "./Department.css";
import civilImg from "../../assets/Department/CE.png";

const Civil = () => {
  return (
    <section className="department-section">
      <div className="department-container">

        {/* Left: Image */}
        <div className="department-image">
          <img
            src={civilImg}
            alt="Civil Engineering Department"
          />
        </div>

        {/* Right: Info */}
        <div className="department-info">
          <h2>Civil Engineering</h2>

          <p className="department-desc">
            Civil Engineering focuses on planning, designing, and managing
            infrastructure projects with modern tools, industry standards,
            and sustainable engineering practices.
          </p>

          <ul className="department-points">
            <li>AutoCAD & STAAD Pro</li>
            <li>Structural Design & Analysis</li>
            <li>Construction Planning & Management</li>
            <li>Smart City & Sustainable Engineering</li>
            <li>Quantity Surveying & Estimation</li>
          </ul>

          <button className="department-btn">
            View Civil Programs
          </button>
        </div>

      </div>
    </section>
  );
};

export default Civil;

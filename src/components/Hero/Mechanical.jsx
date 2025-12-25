import "./Department.css";
import mechanicalImg from "../../assets/Department/ME.png";

const Mechanical = () => {
  return (
    <section className="department-section">
      <div className="department-container">

        {/* Left: Image */}
        <div className="department-image">
          <img
            src={mechanicalImg}
            alt="Mechanical Engineering Department"
          />
        </div>

        {/* Right: Info */}
        <div className="department-info">
          <h2>Mechanical Engineering</h2>

          <p className="department-desc">
            Mechanical Engineering focuses on design, manufacturing,
            automation, and modern mechanical systems with hands-on
            industrial training.
          </p>

          <ul className="department-points">
            <li>AutoCAD & SolidWorks</li>
            <li>Robotics & Mechatronics</li>
            <li>Manufacturing Technology</li>
            <li>Industrial Design</li>
            <li>CAD / CAM & CNC Machines</li>
          </ul>

          <button className="department-btn">
            View Mechanical Programs
          </button>
        </div>

      </div>
    </section>
  );
};

export default Mechanical;

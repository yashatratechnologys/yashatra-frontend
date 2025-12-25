import "./Department.css";
import cseImg from "../../assets/Department/IT.png";

const CSE = () => {
  return (
    <section className="department-section">
      <div className="department-container">

        {/* Left: Image */}
        <div className="department-image">
          <img src={cseImg} alt="Computer Science Department" />
        </div>

        {/* Right: Info */}
        <div className="department-info">
          <h2>Computer Science / IT</h2>

          <p className="department-desc">
            Industry-focused training programs designed to make students
            job-ready with hands-on experience and real-time projects.
          </p>

          <ul className="department-points">
            <li>Java Full Stack Development</li>
            <li>Python Full Stack Development</li>
            <li>Web Development (HTML, CSS, React)</li>
            <li>Data Structures & Algorithms</li>
            <li>AI & Machine Learning</li>
          </ul>

          <button className="department-btn">View Programs</button>
        </div>

      </div>
    </section>
  );
};

export default CSE;

import "./CourseDetails.css";
import courseImg from "../../assets/Banners/javafullstack.png";

const CourseDetails = () => {
  return (
    <section className="course-section">
      <div className="course-container">

        {/* Left: Image */}
        <div className="course-image">
          <img src={courseImg} alt="Course" />
        </div>

        {/* Right: Info */}
        <div className="course-info">
          <h2>Full Stack Java Development</h2>

          <p className="course-desc">
            Learn end-to-end Java Full Stack Development with real-time projects,
            industry practices, and placement guidance.
          </p>

          <ul className="course-points">
            <li>✔ Core Java & Advanced Java</li>
            <li>✔ Spring Boot & Hibernate</li>
            <li>✔ React / Frontend Basics</li>
            <li>✔ Real-time Projects</li>
            <li>✔ Interview Preparation</li>
          </ul>

          <button className="course-btn">View Course Details</button>
        </div>

      </div>
    </section>
  );
};

export default CourseDetails;

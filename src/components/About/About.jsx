import "./About.css";
import aboutImg from "../../assets/Department/CE.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left: Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About Yashatra Technologies" />
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2>About Yashatra Technologies</h2>

          <p className="about-desc">
            Yashatra Technologies is a professional training and technology
            solutions company focused on empowering students and professionals
            with industry-ready skills. We specialize in modern technologies,
            practical learning, and career-oriented training programs.
          </p>

          <p className="about-desc">
            Our mission is to bridge the gap between academic learning and
            industry requirements through hands-on training, real-time
            projects, and expert mentorship.
          </p>

          <ul className="about-points">
            <li>Industry-Oriented Training Programs</li>
            <li>Experienced & Certified Trainers</li>
            <li>Hands-on Practical Learning</li>
            <li>Career Guidance & Placement Support</li>
            <li>Authorized MKCL Learning Center</li>
          </ul>

          <button className="about-btn">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;

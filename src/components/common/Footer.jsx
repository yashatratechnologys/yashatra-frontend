import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Mobile Application</li>
            <li>Digital Marketing</li>
            <li>IT Consulting</li>
            <li>IT Solutions</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* Services 2 */}
        <div className="footer-column services-second">
          <ul>
            <li>Data Analytics</li>
            <li>Resource Augmentation</li>
            <li>Blockchain</li>
            <li>Artificial Intelligence (AI)</li>
            <li>Outsourcing Engagement</li>
            <li>IoT (Internet of Things)</li>
          </ul>
        </div>

        {/* CTA Card */}
        <div className="footer-cta">
          <h2>
            Everything <br />
            to Market Your <br />
            Business.
          </h2>
          <button>START TODAY</button>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Yashatra Technologys Pvt.Ltd. All Rights Reserved.</p>

        <div className="social">
          <span>Follow On</span>
          <div className="icons">
            <div>f</div>
            <div>in</div>
            <div>ig</div>
            <div>yt</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

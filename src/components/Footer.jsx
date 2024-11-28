// function Footer() {
//   return (
//     <footer>
//       <small>&copy; Asım Sinan Yüksel 2024</small>{" "}
//     </footer>
//   );
// }
// export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact and details</h4>
          <p className="footer-text">Email: student@sdu.edu.tr</p>
          <p className="footer-text">Phone: +90 246 211 1111</p>
          <p className="footer-text">Student No: 1234567890</p>
        </div>

        {/* Copyright stuff */}
        <div className="footer-section-center">
          <p>&copy; {new Date().getFullYear()} SDÜ Computer Engineering Student</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
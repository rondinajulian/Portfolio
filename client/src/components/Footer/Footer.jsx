import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-parent">
          <img
            src={require("../material/shape-bg.png")}
            alt="No internet connection"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;

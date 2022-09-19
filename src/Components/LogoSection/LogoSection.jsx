import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./LogoSection.scss";

const LogoSection = ({ img }) => {
  return (
    <div id="logo-section">
      <Link to="/">
        <Image src="/images/logo.png" alt="logo image" className="logo-image" />
      </Link>
      {/* <Image src={img} alt="section image" className="section-image" /> */}
    </div>
  );
};
export default LogoSection;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      designed and developed by
      <a href="mailto:sallamrady@gmail.com" className="mail">
        @Sallam Rady
      </a>
    </div>
  );
};

export default React.memo(Footer);

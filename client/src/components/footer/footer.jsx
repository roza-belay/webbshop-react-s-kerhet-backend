import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-brand">TopStyle</p>
      <p>© {new Date().getFullYear()} - Byggd med React, Vite och CSS av <strong>Roza Belay</strong>.</p>
    </footer>
  );
};

export default Footer;

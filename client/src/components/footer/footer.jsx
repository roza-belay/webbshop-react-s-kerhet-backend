import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-brand">TopStyle</p>
      <p>© {new Date().getFullYear()} - Byggd med React, Vite och CSS av <strong>Roza Belay</strong>.</p>
      <Link className="footer-link" to="/portfolio">Öppna Roza portfolio</Link>
    </footer>
  );
};

export default Footer;

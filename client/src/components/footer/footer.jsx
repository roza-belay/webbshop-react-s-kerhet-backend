import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const portfolioUrl = "https://roza-belay-portfolio.netlify.app/";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-dream-lights" aria-hidden="true">
        <span>&lt;</span>
        <span>&gt;</span>
        <span>/</span>
        <span>&lt;/&gt;</span>
        <span>&lt;</span>
        <span>&gt;</span>
        <span>/</span>
        <span>&lt;/&gt;</span>
        <span>&gt;</span>
        <span>&lt;</span>
        <span>/</span>
        <span>&lt;/&gt;</span>
      </div>
      <p className="footer-brand">TopStyle</p>
      <p>© {new Date().getFullYear()} - Byggd med React, Vite och CSS av <strong>Roza Belay</strong>.</p>
      <div className="footer-links">
        <a className="footer-link" href={portfolioUrl} target="_blank" rel="noreferrer">Öppna Roza portfolio</a>
        <Link className="footer-link" to="/contact">Kontakt</Link>
      </div>
    </footer>
  );
};

export default Footer;

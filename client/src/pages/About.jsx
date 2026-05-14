import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";
import sampleProfile from "../assets/profile-sample.jpg";
import "./About.css";

export default function About() {
  return (
    <section className="about container">
      <div className="about-wrapper">
        <div className="about-text">
          <p className="section-kicker">Portfolio Case</p>
          <h2>TopStyle visar React, API-flöden och säkrare användarresor.</h2>
          <p>
            Projektet är en demo-webbshop där besökaren kan bläddra bland produkter,
            söka, logga in och hantera kundvagn. Jag har gjort om presentationen så
            den känns mer som ett modernt case i en portfolio.
          </p>
          <ul className="case-list">
            <li>Responsiv React-layout med Vite</li>
            <li>Produktdetaljer med storlek, färg och antal</li>
            <li>Autentisering och orderflöden via backend-API</li>
            <li>Uppdaterad mörk visuell identitet inspirerad av referensen</li>
          </ul>
          <div className="tech-stack">
            <span>React</span>
            <span>Vite</span>
            <span>Axios</span>
            <span>JWT</span>
            <span>CSS</span>
          </div>
        </div>

        <aside className="contact-card contact-card-pro">
          <div className="contact-card-top">
            <img src={sampleProfile} alt="Roza Belay" className="profile-sample" />
            <span className="availability-badge">Open to frontend work</span>
          </div>

          <div className="about-profile">
            <div>
              <p className="section-kicker">Portfolio Contact</p>
              <h2 className="about-name">Roza Belay</h2>
              <p>Frontendutvecklare</p>
            </div>
          </div>

          <p className="contact-note">
            Jag bygger responsiva React-gränssnitt med fokus på tydlig design,
            produktflöden och kod som är lätt att fortsätta utveckla.
          </p>

          <div className="contact-links contact-links-pro">
            <a href="mailto:rozaybeyn.belay@gmail.com"><FaEnvelope /> Email</a>
            <a href="https://linkedin.com/in/roza-ybeyn-belay-3b9054256" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/Rozabelay339" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          </div>

          <Link to="/portfolio" className="portfolio-card-link">
            <FaUserTie /> Öppna super portfolio
          </Link>
        </aside>
      </div>
    </section>
  );
}

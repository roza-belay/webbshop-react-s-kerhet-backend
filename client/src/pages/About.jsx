import React from "react";
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

        <aside className="contact-card">
          <div className="about-profile">
            <img src={sampleProfile} alt="Roza Belay" className="profile-sample" />
            <div>
              <h2 className="about-name">Roza Belay</h2>
              <p>Frontendutvecklare</p>
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:rozaybeyn.belay@gmail.com">Email</a>
            <a href="https://linkedin.com/in/roza-ybeyn-belay-3b9054256" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Rozabelay339" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="contact-note">
            Söker frontendroller där jag kan kombinera designkänsla med stabil React-kod.
          </p>
        </aside>
      </div>
    </section>
  );
}

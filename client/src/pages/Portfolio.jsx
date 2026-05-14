import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaShoppingBag, FaShieldAlt, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import sampleProfile from "../assets/profile-sample.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-copy">
          <p className="section-kicker">Frontend Portfolio</p>
          <h1>Roza Belay</h1>
          <p className="portfolio-lead">
            Frontendutvecklare med fokus på React, responsiva gränssnitt och
            användarflöden som känns tydliga från första klicket.
          </p>
          <div className="portfolio-actions">
            <a href="mailto:rozaybeyn.belay@gmail.com" className="home-btn">
              <FaEnvelope /> Kontakta mig
            </a>
            <Link to="/products" className="secondary-btn">
              <FaShoppingBag /> Se webshop-case
            </Link>
          </div>
        </div>

        <aside className="portfolio-profile-card">
          <img src={sampleProfile} alt="Roza Belay" />
          <div>
            <span>Available for frontend roles</span>
            <h2>React Developer</h2>
            <p>Bygger moderna, mobilvänliga webbupplevelser med tydlig struktur.</p>
          </div>
        </aside>
      </section>

      <section className="portfolio-grid" aria-label="Portfolio highlights">
        <article className="portfolio-panel large">
          <FaCode />
          <p className="section-kicker">Core Skills</p>
          <h2>React, Vite, CSS och API-integrationer</h2>
          <p>
            Jag gillar rena komponenter, tydlig informationshierarki och UI som
            både ser professionellt ut och går att underhålla.
          </p>
        </article>

        <article className="portfolio-panel accent">
          <FaShieldAlt />
          <h3>Security-minded</h3>
          <p>JWT, skyddade flöden och backend-kopplad autentisering.</p>
        </article>

        <article className="portfolio-panel light">
          <FaShoppingBag />
          <h3>Featured Case</h3>
          <p>TopStyle visar produktlista, detaljsida, kundvagn och orderflöde.</p>
          <Link to="/about" className="inline-case-link">
            Läs caset <FaExternalLinkAlt />
          </Link>
        </article>
      </section>

      <section className="portfolio-contact-band">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Låt oss bygga något snyggt och stabilt.</h2>
        </div>
        <div className="portfolio-socials">
          <a href="mailto:rozaybeyn.belay@gmail.com"><FaEnvelope /> Email</a>
          <a href="https://linkedin.com/in/roza-ybeyn-belay-3b9054256" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/Rozabelay339" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

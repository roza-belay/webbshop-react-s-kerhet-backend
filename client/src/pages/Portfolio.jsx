import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow, FaShoppingBag, FaExternalLinkAlt } from "react-icons/fa";
import sampleProfile from "../assets/profile-sample.jpg";
import "./Portfolio.css";

const portfolioUrl = "https://roza-belay-portfolio.netlify.app/";

const Contact = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-copy">
          <p className="section-kicker">Contact</p>
          <h1>Kontakta Roza</h1>
          <p className="portfolio-lead">
            Vill du prata om praktik, frontendjobb eller samarbeten? Här finns
            de snabbaste vägarna till Roza och hennes publika portfolio.
          </p>
          <div className="portfolio-actions">
            <a href="mailto:rozaybeyn.belay@gmail.com" className="home-btn">
              <FaEnvelope /> Skicka email
            </a>
            <a href={portfolioUrl} className="secondary-btn" target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Öppna portfolio
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
          <FaLocationArrow />
          <p className="section-kicker">Contact route</p>
          <h2>En tydlig kontaktsida istället för en inbyggd portfolio.</h2>
          <p>
            Den fulla portfolion ligger nu på Netlify-länken, medan den här sidan
            samlar kontaktvägar och guidar vidare till webbshop-caset.
          </p>
        </article>

        <article className="portfolio-panel accent">
          <FaEnvelope />
          <h3>Email</h3>
          <p>rozaybeyn.belay@gmail.com</p>
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

export default Contact;

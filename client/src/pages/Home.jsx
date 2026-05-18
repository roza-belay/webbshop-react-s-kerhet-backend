import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/image.jpg";

const portfolioUrl = "https://roza-belay-portfolio.netlify.app/";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="home-hero-copy">
          <h1 className="home-title">TopStyle</h1>
          <p className="home-subtitle">
            En modern klädbutik byggd med React, backend, JWT-autentisering
            och säkra API-flöden.
          </p>

          <div className="home-actions">
            <Link to="/products" className="home-btn">Se produkter</Link>
            <Link to="/about" className="secondary-btn">Läs case</Link>
            <a href={portfolioUrl} className="secondary-btn" target="_blank" rel="noreferrer">
              Roza portfolio
            </a>
          </div>
        </div>

        <div className="hero-bottom-video" aria-label="Animated shopping bags">
          <div className="hero-bag-track" aria-hidden="true">
            <img src={heroImage} alt="" />
            <img src={heroImage} alt="" />
            <img src={heroImage} alt="" />
          </div>
          <span>Secure Fullstack Fashion Store</span>
        </div>

        <div className="hero-bottom-meta">
      
          <p className="eyebrow">Fullstack Webshop Case</p>
        </div>
      </section>

      <section className="home-case-overview" aria-label="Projektets höjdpunkter">
        <div className="home-metrics">
          <div className="metric">
            <strong>React</strong>
            <span>Komponentbaserad frontend</span>
          </div>
          <div className="metric">
            <strong>Auth</strong>
            <span>Login och skyddade flöden</span>
          </div>
          <div className="metric">
            <strong>Cart</strong>
            <span>Kundvagn och orderlogik</span>
          </div>
        </div>

        <article className="showcase-card case-stack-card">
          <span>Stack</span>
          <h3>React, Vite, Axios, JWT</h3>
          <p>En fullstack-demo med backend-API, MongoDB, orderflöde och säkrare användarresa.</p>
        </article>
      </section>

      <section className="home-sections" aria-label="Portfolio highlights">
        <article className="portfolio-note">
          <h3>Designad som case</h3>
          <p>Startsidan berättar snabbt vad projektet visar, inte bara att det är en butik.</p>
        </article>
        <article className="portfolio-note">
          <h3>Rena UI-komponenter</h3>
          <p>Kort, knappar, inputfält och sektioner har fått samma visuella språk.</p>
        </article>
        <article className="portfolio-note">
          <h3>Mobilvänlig layout</h3>
          <p>Gridar och rubriker skalar ned utan att text eller kort kolliderar.</p>
        </article>
      </section>
    </div>
  );
};

export default Home;

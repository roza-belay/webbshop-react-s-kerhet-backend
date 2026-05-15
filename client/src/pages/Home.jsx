import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">React Webshop Case</p>
          <h1 className="home-title">TopStyle</h1>
          <p className="home-subtitle">
            En 
             webbshop byggd med React, autentisering, kundvagn
            och produktflode. Designen är uppdaterad med samma mörka, rena och
            case-baserade känsla som referensportfolion.
          </p>

          <div className="home-actions">
            <Link to="/products" className="home-btn">Se produkter</Link>
            <Link to="/about" className="secondary-btn">Läs case</Link>
            <Link to="/portfolio" className="secondary-btn">Roza portfolio</Link>
          </div>

          <div className="home-metrics" aria-label="Projektets höjdpunkter">
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
        </div>

        <div className="home-showcase" aria-label="Projektöversikt">
          <article className="showcase-card featured">
            <span>Current Focus</span>
            <h2>Webshop med tydlig produktresa</h2>
            <p>
              Från browsing till produktdetalj, val av storlek/färg och order.
            </p>
          </article>
          <article className="showcase-card">
            <span>Stack</span>
            <h3>React, Vite, Axios, JWT</h3>
            <p>En fullstack-demo med backend-API och modern frontend-struktur.</p>
          </article>
        </div>
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

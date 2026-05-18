import React from "react";
import { FaDatabase, FaLock, FaRoute, FaServer, FaShieldAlt, FaShoppingCart } from "react-icons/fa";
import caseImage from "../assets/shopIcon.jpg";
import "./About.css";

export default function About() {
  return (
    <section className="about container">
      <header className="case-hero">
        <div>
          <p className="section-kicker">Portfolio Case</p>
          <h1>Fullstack webshop med säker backend.</h1>
        </div>
        <p>
          TopStyle visar hur en modern React-butik kan kopplas till API,
          autentisering, datamodeller och orderflöden utan att tappa den visuella känslan.
        </p>
      </header>

      <div className="about-wrapper">
        <div className="about-text">
          <p className="section-kicker">Project Story</p>
          <h2>Från produktlista till skyddad order.</h2>
          <p>
            TopStyle är en fullstack demo-webbshop byggd med React, Vite,
            Node/Express och MongoDB. Fokus ligger på ett tydligt köpflöde,
            backend-kopplad produktdata och säker autentisering med JWT.
          </p>
          <ul className="case-list">
            <li>JWT-baserad autentisering för login och register</li>
            <li>Skyddade API-routes med token-verifiering</li>
            <li>Axios-konfiguration för autentiserade requests</li>
            <li>Produkt-, kundvagns- och orderflöde kopplat till backend</li>
          </ul>
          <div className="tech-stack">
            <span>React</span>
            <span>Vite</span>
            <span>Axios</span>
            <span>JWT</span>
            <span>Node</span>
            <span>MongoDB</span>
            <span>CSS</span>
          </div>
        </div>

        <aside className="case-system-card">
          <div className="system-card-header">
            <p className="section-kicker">Security + Backend</p>
            <h3>Projektet visar mer än en frontend.</h3>
          </div>
          <div className="system-feature">
            <FaShieldAlt />
            <div>
              <strong>JWT Security</strong>
              <span>Token-baserad inloggning och skyddade requests.</span>
            </div>
          </div>
          <div className="system-feature">
            <FaServer />
            <div>
              <strong>Express API</strong>
              <span>Routes för produkter, auth och orderhantering.</span>
            </div>
          </div>
          <div className="system-feature">
            <FaDatabase />
            <div>
              <strong>MongoDB Models</strong>
              <span>Strukturerad data för användare, produkter och orders.</span>
            </div>
          </div>
          <div className="system-feature">
            <FaLock />
            <div>
              <strong>Protected Flow</strong>
              <span>Login krävs för order och känsligare funktioner.</span>
            </div>
          </div>
        </aside>
      </div>

      <section className="case-flow" aria-label="Project flow">
        <article>
          <FaRoute />
          <span>01</span>
          <h3>Browse</h3>
          <p>Produktlista, sök och lokala fallback-bilder när backend inte är aktiv.</p>
        </article>
        <article>
          <FaLock />
          <span>02</span>
          <h3>Authenticate</h3>
          <p>Login/register med JWT och skyddade API-anrop.</p>
        </article>
        <article>
          <FaShoppingCart />
          <span>03</span>
          <h3>Order</h3>
          <p>Storlek, färg, antal, kundvagn och orderdata skickas till backend.</p>
        </article>
      </section>

      <section className="case-preview">
        <img src={caseImage} alt="TopStyle webshop preview" />
        <div>
          <p className="section-kicker">Result</p>
          <h2>En portfolio-sida som visar både UI och systemtänk.</h2>
          <p>
            Caset är gjort för att snabbt visa React-komponenter, API-struktur,
            autentisering och ett användarflöde som kan fortsätta byggas ut.
          </p>
        </div>
      </section>
    </section>
  );
}

import React from "react";
import "./LandingPage.css";

const LandingPage = () => (
  <div className="landing-page">
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Cashly.</h1>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="#signup" className="cta">
            Login
          </a>
        </nav>
      </div>
    </header>
    <section className="hero">
      <div className="hero-content">
        <h2>Simplify Your Expenses</h2>
        <p>Track and manage your expenses easily with Cashly.</p>
        <a href="#signup" className="cta-button">
          <i className="fas fa-rocket"></i>
          Get Started
        </a>
      </div>
    </section>

    <footer id="contact">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Cashly. All rights reserved.</p>
        <p>
          Contact us: <a href="mailto:support@cashly.com">support@cashly.com</a>
        </p>
      </div>
    </footer>
  </div>
);

export default LandingPage;

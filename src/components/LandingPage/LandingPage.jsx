import React from "react";
import "./LandingPage.css";
import Chart from "../Chart/Chart";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Cashly</h1>
          </div>
          <nav className="nav">
            <a href="/login" className="cta">
              Login
            </a>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>Simplify Your Expenses</h2>
          <p>Manage and track your finances easily with Cashly.</p>
          <a href="/register" className="cta-button">
            <i className="fas fa-rocket"></i>
            Get Started
          </a>
        </div>
        <div className="chart-container">
          <Chart />
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Cashly. All rights reserved.</p>
          <p>
            Contact us:{" "}
            <a href="mailto:support@cashly.com">support@cashly.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

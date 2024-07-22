import React, { useState } from "react";
import "./LandingPage.css";
import Chart from "./Chart"; // Import the Chart component
import Login from "./Login"; // Import the Login component

const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Cashly</h1>
          </div>
          <nav className="nav">
            <button className="cta" onClick={openLoginModal}>
              Login
            </button>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>Simplify Your Expenses</h2>
          <p>Track and manage your expenses easily with Cashly.</p>
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

      {/* Render the login modal */}
      {isLoginOpen && <Login closeModal={closeLoginModal} />}
    </div>
  );
};

export default LandingPage;

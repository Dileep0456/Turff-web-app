import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

export default class User extends Component {
  render() {
    return (
      <div className="user-container">
        <div className="header">
          <nav>
            <ul>
              <li>
                <Link to="/Feedback">Feedback</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/complaint">Complaint</Link>
              </li>
              <li>
                <Link to="/assist">Assist</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <img src="/curosal4.jpg" alt="not found" />
        </div>
        <div className="hero-content">
          <h1>Leading Turf in Kerala</h1>
          <p>
            The quality of the turf can greatly enhance your playing enjoyment.
            A well-maintained turf with a smooth, even surface ensures a
            consistent bounce and minimal injuries, allowing players to focus on
            the game. High-quality turf also means better drainage, so the field
            remains playable even after rain, and the artificial grass feels
            natural underfoot, adding to the overall experience. Additionally,
            excellent turf conditions create a visually appealing environment,
            which can boost team morale and make matches more enjoyable for both
            players and spectators. Investing in a top-notch turf ensures that
            every game is a pleasure to play. 🌟
          </p>
          <Link to="/login">Book Consultation</Link>
        </div>
        <div className="info-section">
          <h1>Why Choose Us?</h1>
          <div className="info-cards">
            <div className="info-card">
              <img src="/info1.0.jpg" alt="not found" />
              <h2>Planning & Design</h2>
              <p>
                We offer professional planning and estimate of your playground.
              </p>
            </div>
            <div className="info-card">
              <img src="/info2.jpg" alt="not found" />
              <h2>Construction & Installation</h2>
              <p>
                We use high quality and long lasting raw materials to build pitches and play areas.
              </p>
            </div>
            <div className="info-card">
              <img src="/info3.avif" alt="not found" />
              <h2>Fencing and Lighting</h2>
              <p>
                We can build your Football Turf with beautiful and high quality imported lighting and fencing solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="additional-info">
          <div>
          <h1>What We Do</h1>
          </div>
          <div className="services">
         
            <div className="left-section">
              <h2>Professional Turfing</h2>
              <p>
                We provide top-notch turf services for all your turf needs.
              </p>
              <ul>
                <li>High-quality turf</li>
                <li>Professional maintenance and repair</li>
                <li>Customizable play areas</li>
                <li>Premium lighting and fencing solutions</li>
              </ul>
            </div>
            <div className="right-section">
              <h2>Turf Management</h2>
              <p>
                We manage your turf, ensuring it's always in top condition.
              </p>
              <ul>
                <li>Regular maintenance</li>
                <li>Quality control</li>
                <li>Seasonal maintenance</li>
                <li>Training and guidance</li>
              </ul>
            </div>
          </div>
 </div>

        </div>
        
     
    );
  }
}
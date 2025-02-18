import React, { Component } from "react";
import "../../src/App.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about-container">
          <div>
            <h1>About Us</h1>
          </div>
          <div>
            <p>Welcome to Turff, a modern and sustainable playin platform.</p>
            <p>
              Turff is built to help youngsters, students, and all other
              peoples.
            </p>
            <p>
              Our mission is to empower individuals to create beautiful,
              sustainable, and enjoyable play grounds.
            </p>
            <p>
              For more information, please visit our website or contact us at{" "}
              <a href="mailto:info@turff.com">info@turff.com</a>
            </p>
          </div>
          <div className="about-content">
            <div className="left-section">
              <h2>Our Vision</h2>
              <p>
                To create a world where every child can enjoy the joy of play.
              </p>
              <p>
                Our mission is to create a vibrant space where children can play
                freely, learn new skills, and make lasting memories. We strive
                to cultivate a love for the outdoors and a sense of adventure,
                while promoting physical, social, and emotional development.
              </p>
            </div>
            <div className="right-section">
              <h2>Our Mission</h2>
              <p>To provide a safe and healthy young people.</p>

              <img src="/about-1.avif" alt="" />
            </div>
            
          </div>

 <div className="about-more">
            <h2>Our History</h2>
            <p>
              Turff was founded in 2019 by a group of young people who believed
              in the power of play and creativity.
            </p>
            <p>
              We strive to create a beautiful, sustainable, and enjoyable
              playground for everyone.
            </p>
          </div>
          What We Offer Exciting Play Structures: From towering slides to daring
          climbing frames, our playground is designed to challenge and delight.
          Inclusive Design: We are committed to accessibility and inclusivity,
          with equipment and spaces that cater to children of all abilities.
          Nature-Inspired Areas: Our playground incorporates natural elements
          like sand, water features, and greenery to spark curiosity and a love
          for the environment. Community Events: Join us for family-friendly
          events, from storytelling sessions to outdoor yoga, fostering a strong
          sense of community.
        </div>



         
      </div>
    
    );
  }
}

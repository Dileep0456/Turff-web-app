import React, { Component } from 'react';
import '../../src/App.css';
import { Link } from 'react-router-dom';




export default class Homepage extends Component {
  render() {
    return (  
      <div>
       
        <div className="hero-section">
         
          <h1>Welcome  to Turff</h1>
          <p>Discover the magic of Turff's unique farming system.</p>
          <Link to="/Login">
          <button>Book Consultation</button>
          </Link>
           
        </div>
        <div className="homepage-info">
        <h1>Feautured Projects</h1>
        <p>We have completed successful Football Turf grounds across Kerala in the including Malappuram, Kozhikode (Calicut), Kochi, Wayanad, Thrissur, Palakkad etc.</p>
        <div className="home-image">
          <img src="/h-img1.jpg" alt="turff logo"/>
          <img src="/h-img2.jpg" alt="a" />
          <img src="/h-image3.jpg" alt="b" />
          <img src="/h-image4.jpg" alt="c" />

        </div>
        </div>
        
      </div>
    )
  }
}


import React, { Component } from 'react'
import "../../src/App.css"

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-container">
            <div className="footer">
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Press</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="social-media">
                <a href="/facebook"><img src="/fb.png" alt="facebook" /></a>
                <a href="/twitter"><img src="/twitter.png" alt="twitter" /></a>
                <a href="/instagram"><img src="/instagram.webp" alt="instagram" /></a>
                <a href="/linkedin"><img src="/linkedin.png" alt="linkedin" /></a>
                <a href="/youtube"><img src="/youtube.png" alt="youtube" /></a>
  
            </div>
            <div className="address">
                <p>123 Street, City, Country</p>
                <p>Phone: +91 123 456 7890</p>
                <p>Email: info@turff.com</p>
            </div>
            
          </div>
          <div className="copyright">
                <p>�� 2021 Turff. All rights reserved.</p>

            </div>
        
        </div>
   
      
    )
  }
}

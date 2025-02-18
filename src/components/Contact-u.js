import React, { Component } from 'react';
import "../../src/App.css"

export default class Contact extends Component {
 
  render() {
    return (
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
             
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
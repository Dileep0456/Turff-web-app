import React, { Component } from "react";
import"../../src/App.css"

export default class Assist extends Component {
  render() {
    return (
      <div>
        <div className="assist-header">
          <h1>How can i Assist You</h1>
          <p>
            Are you ready to take your game to the next level? TUF Booking
            Assist is here to make reserving your ideal turf playground quick
            and hassle-free. Our platform lets you easily browse and book
            top-notch turf fields for soccer, cricket, or any sport of your
            choice. With user-friendly features, real-time availability updates,
            and secure payment options, you can plan your practice sessions,
            matches, or events with ease. Plus, our dedicated customer support
            team is always available to assist with any questions or concerns.
            Choose TUF Booking Assist for a seamless experience in securing the
            perfect turf playground for your sporting needs. Game on!
          </p>
        </div>
        <div className="assit-container">
          <textarea name="" id="" placeholder="how can i assist you"></textarea>
         
        </div>
        <div className="assist-btn">
        <button type="submit">Submit</button>
        </div>
        

      </div>
    );
  }
}

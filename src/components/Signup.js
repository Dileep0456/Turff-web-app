import React, { Component } from 'react';
import "../components/Login.css"

export default class Signup extends Component {
  render() {
    return (
      <div className="signup-container">
        <div className="signup">
          <h1>Signup</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="date" placeholder="Date of Birth" />
            <select>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <button>Submit</button>
          </form>
          <p>Already have an account? <a href="/Login">Login</a></p>
        </div>
      </div>
    );
  }
}
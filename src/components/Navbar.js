import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../src/App.css"

export default class Navbar extends Component {
  render() {
    return (
      <div>
         <div className="container">
          
            <div className="logo">
              <img src="/logo.png" alt="logo" />
              <h1>Turff</h1>
            </div>
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link to="/Login">Login</Link>
              <Link to="/signup">signup</Link>
              <Link to="/about">about</Link>
              <Link to="/Contact">contact</Link>
            </div>
          </div>
        </div>
      
    )
  }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../../src/App.css"

export default class Admin extends Component {
  render() {
    return (
      <div>
        <div className="admin-container">
          <div className="admin-header">
            <nav>
              <ul>
                <li>
                  <Link to="/Feedback">view Feedback</Link>
                </li>
                <li>
                  <Link to="/Users-complaints">view complaints</Link>
                </li>
               
                <li><Link to="Staff-Analytics">view Staff-Analytics</Link></li>
                <li>
                  <Link to="/Settings">Settings</Link>
                </li>
              </ul>
            </nav>
          </div>

          
        </div>
        <div className="admin-content">
          <h1>Welcome to Admin Page</h1>
          <p>Here you can manage your Turff application.</p>
          
        </div>
        
        </div>
        
      
    
    )
  }
}

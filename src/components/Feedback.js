import React, { Component } from 'react'
import '../App.css'



export default class Feedback extends Component {
  render() {
    return (
      <div>
       
        <div className="f-container">
            <div className="f-header">
            <h1>Feedback</h1>
            <p>Welcome to Feedback Page!</p>
            </div>
            <div className="f-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Feedback"></textarea>
                <button type="submit">Submit</button>
            </div>
            
        </div>
        
      </div>
    )
  }
}

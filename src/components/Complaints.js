import React, { Component } from 'react'

export default class usercomplaint extends Component {
  render() {
    return (
      <div>
        <div className="complaint-header">
            <h1>Submit Complaint</h1>
            <p>Feel free to share any concerns or issues you may have with the Turff system. We are here to help.</p>
        </div>
        <form>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Complaint"></textarea>
            <div className="btn">
            <button type="submit">Submit</button>
            </div>
  
        </form>
        
      </div>
    )
  }
}

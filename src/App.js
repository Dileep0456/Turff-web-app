import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import Staff from './components/Staff';
import User from './components/User';
import Feedback from './components/Feedback';
import Complaints from './components/Complaints';
import Assist from './components/Assist';
import Footer from './components/Footer';
import About from './components/About';
import Contactus from './components/Contact-u';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="/User" element={<User />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Complaint" element={<Complaints />} />
          <Route path="/Assist" element={<Assist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
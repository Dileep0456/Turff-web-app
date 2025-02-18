

import React, { useState } from 'react';
import '../../src/App.css';
import { Link, Navigate } from 'react-router-dom';
import "../components/Login.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectTo, setRedirectTo] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLoginClick = () => {
    const admin = { username: "admin1", password: "123" };
    const staff = { username: "staff1", password: "456" };
    const user = { username: "user1", password: "789" };

    if (username === admin.username && password === admin.password) {   
      setRedirectTo('/Admin');
    } else if (username === staff.username && password === staff.password) {
      setRedirectTo('/Staff');
    } else if (username === user.username && password === user.password) {
      setRedirectTo('/User');
    } else {
      alert('Invalid credentials');
    }
  };

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <button type="button" onClick={handleLoginClick}>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;
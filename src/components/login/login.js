import React from 'react';
import {  Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import TextTransition from '../../utility/TextTransition';
import './login.css';


const Login = () => {
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("./Member");
  };
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  function handleNameChange(event) {
    setFormData({ ...formData, name: event.target.value });
  }

  function handlePasswordChange(event) {
    setFormData({ ...formData, password: event.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const passwordError = validatePassword(formData.password);
    if (nameError || passwordError) {
      setFormErrors({
        name: nameError,
        password: passwordError,
      });
    } else {
      setFormErrors({});
      navigateToMainPage();
    }
  };
  const navigateToRegister = () => {
    // 👇️ navigate to /register
    navigate("/Member");
  };

  function validateName(name) {
    if (!name) {
      return "Name is required";
    }
    //Query database for name
  }

  function validatePassword(password) {
    if (!password) {
      return "Password is required";
    }
    //query database for password
  }

  return (
    <div>
      <div className="container">
        <h1>Please Login</h1>
        <form>
          <div className="form-control">
            <input type="text" onChange={handleNameChange} required></input>
            <label>
              <TextTransition text="Email" />
            </label>
            {formErrors.email && <p className="red">{formErrors.email}</p>}
          </div>

          <div className="form-control">
            <input type="password" onChange={handlePasswordChange} required></input>
            <label>
              <TextTransition text="Password" />
            </label>
            {formErrors.password && (
              <p className="red">{formErrors.password}</p>
            )}
          </div>

          <button className="btn" onClick={handleSubmit}>
            Login
          </button>

          <p className="text">
            Don't have an account?
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login

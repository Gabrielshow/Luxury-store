import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TextTransition from '../../utility/TextTransition';
import './Register.css';
import  Member from '../Membership/Member';
import SuccessCard from '../../utility/SuccessCard';

const Register = () => {
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("./Success");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  function validateName(name) {
    if (!name) {
      return "Name is required";
    }
    if (name.length > 15) {
      return "Name must be 15 characters or less";
    }
    //Query database for name
  }

  function validEmail(email) {
    let email_array = email.split("@");
    let email_provider = email_array[1];
    const email_recognized = ["@gmail", "@yahoo", "@hotmail"];
    for (let i = 0; i < email_recognized.length; i++)
      if (email_recognized[i].indexOf(email) < 0) {
        alert("Email not supported");
        return "Use a valid Email Provider"
      }
  }

  function validateEmail(email) {
    if (!email) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Invalid email address";
    }
    const errorMessage = validEmail(email);
    return errorMessage
    //validEmail.apply(this, email);
  }

  function validatePassword(password) {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    //query database for password
  }

  function validateConfirmPassword(confirmPassword, password) {
    if (!confirmPassword) {
      return "Confirm password is required";
    }
    if (confirmPassword !== password) {
      return "Passwords must match";
    }
      if (confirmPassword.length < 8) {
        return "Password must be at least 8 characters";
      }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.confirmPassword,
      formData.password
    );
    if (nameError || emailError || passwordError || confirmPasswordError) {
      setFormErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    } else {
      setFormErrors({});
       navigateToMainPage();
    }
  }
  function handleNameChange(event) {
    setFormData({ ...formData, name: event.target.value });
  }

  function handleEmailChange(event) {
    setFormData({ ...formData, email: event.target.value });
  }

  function handlePasswordChange(event) {
    setFormData({ ...formData, password: event.target.value });
  };

  function handleConfirmPasswordChange(event) {
    setFormData({ ...formData, confirmPassword: event.target.value });
  }

  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <div className="form-control">
          <input type="text" onChange={handleNameChange} required></input>
          <label>
            <TextTransition text="Username" />
          </label>
          {formErrors.name && <p className="red">{formErrors.name}</p>}
        </div>
        <div className="form-control">
          <input type="email" onChange={handleEmailChange} required></input>
          <label>
            <TextTransition text="Email" />
          </label>
          {formErrors.email && <p className="red">{formErrors.email}</p>}
        </div>
        <div className="form-control">
          <input
            type="password"
            onChange={handlePasswordChange}
            required
          ></input>
          <label>
            <TextTransition text="Password" />
          </label>
          {formErrors.password && <p className="red">{formErrors.password}</p>}
        </div>
        <div className="form-control">
          <input
            type="password"
            onChange={handleConfirmPasswordChange}
            required
          ></input>
          <label>
            <TextTransition text="Confirm Password" />
            {formErrors.confirmPassword && (
              <p className="red">{formErrors.confirmPassword}</p>
            )}
          </label>
        </div>

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register

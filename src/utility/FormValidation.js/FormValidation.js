import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});
  function validateName(name) {
  if (!name) {
    return 'Name is required';
  }
  if (name.length > 15) {
    return 'Name must be 15 characters or less';
  }
}

function validEmail (email) {
 let email_array = email.split('@')
 let email_provider = email_array[1];
 const email_recognized = [ '@gmail', '@yahoo', '@hotmail'];
  for (let i = 0; i < email_recognized.length; i++)
  if (email_recognized[i].indexOf(email) < 0){
    alert("Email not defined")
  }

}

function validateEmail(email, validEmail) {
  if (!email) {
    return 'Email is required';
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Invalid email address';
  }
  validEmail(email);
  //validEmail.apply(this, email);
}

function validatePassword(password) {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
}

function validateConfirmPassword(confirmPassword, password) {
  if (!confirmPassword) {
    return 'Confirm password is required';
  }
  if (confirmPassword !== password) {
    return 'Passwords must match';
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
    // Submit form data
  }
}
function handleNameChange(event) {
  setFormData({ ...formData, name: event.target.value });
}

function handleEmailChange(event) {
  setFormData({ ...formData, email: event.target.value });
}

function handlePasswordChange(event) {
    setFormData({ ...formData, password: event.target.value
    });
}
}

export default MyForm

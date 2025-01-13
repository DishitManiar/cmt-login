import React, { useState } from "react";
import "./loginpage.css";
import Button from 'react-bootstrap/Button';

const Loginpage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
    error: "",
    successMessage: "",
  });

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from reloading

    setFormData({
      ...formData,
      error: "",
      successMessage: "",
    });

    const { email, password } = formData;

    // Email validation: check if email is entered and valid
    if (!email) {
      setFormData({ ...formData, error: "Email is required!!" });
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormData({ ...formData, error: "Please enter a valid email address" });
      return;
    }

    // Password validation: check if password is entered
    if (!password) {
      setFormData({ ...formData, error: "Password is required!!" });
      return;
    }

    // If both fields are valid, you can proceed with your login logic
    setFormData({ ...formData, successMessage: "Login successful!" }); // Display success message
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  return (
    <div className="addUser">
      <h3 style={{ cursor: "pointer" }}>Sign In</h3>
      <form className="addUserForm" onSubmit={handleLogin}>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            autoComplete="off"
            placeholder="Enter your Email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type={formData.showPassword ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            autoComplete="off"
            placeholder="Enter your Password"
          />
            <div className="show-password">
      <input
        type="checkbox"
        id="showPassword"
        checked={formData.showPassword}
        onChange={togglePasswordVisibility}
      />
      <label htmlFor="showPassword">Show Password</label>
    </div>

          {formData.error && <p className="error">{formData.error}</p>} {/* Display error message */}
          {formData.successMessage && <p className="success">{formData.successMessage}</p>} {/* Display success message */}

          <Button variant="success" type="submit">Login</Button> {/* This button submits the form */}
        </div>
      </form>

      <div className="login">
        <p>Don't have an Account?</p>
      </div>
    </div>
  );
};

export default Loginpage;

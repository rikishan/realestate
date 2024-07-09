import React, { useState } from "react";
import useForm from "./useForm";
import validate from "../components/Validate";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function login() {
    // Log email and password to the console
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    
    // Set loggedIn to true
    setLoggedIn(true);
    
    // Navigate to the new page
    navigate('/admin-page'); // Replace '/new-page' with your target route
  }

  return (
    <div style={{ minHeight: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ maxWidth: "600px", width: "100%", padding: "20px" }}>
        <div style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "5px", backgroundColor: "#fff", padding: "20px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ marginBottom: "5px", display: "block" }}>Email Address</label>
              <input
                autoComplete="off"
                style={{ width: "100%", padding: "10px", border: `1px solid ${errors.email ? "red" : "#ccc"}`, borderRadius: "3px" }}
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                required
              />
              {errors.email && <p style={{ color: "red", marginTop: "5px" }}>{errors.email}</p>}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ marginBottom: "5px", display: "block" }}>Password</label>
              <input
                style={{ width: "100%", padding: "10px", border: `1px solid ${errors.password ? "red" : "#ccc"}`, borderRadius: "3px" }}
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password || ""}
                required
              />
              {errors.password && <p style={{ color: "red", marginTop: "5px" }}>{errors.password}</p>}
            </div>
            <button
              type="submit"
              style={{ width: "100%", padding: "10px", backgroundColor: "#17a2b8", color: "#fff", border: "none", borderRadius: "3px", cursor: "pointer" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

// Login.js
import React, { useState } from "react";
import "./Style/General.css";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password) {
      // Here you would typically handle the login logic, such as calling an API
      // For this example, we'll just call the onLogin callback
      onLogin(password);
    } else {
      setError("Introduceți parola!");
    }
  };

  return (
    <div className="mt-4">
      <div className="login-container centered">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Parola</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
            />
          </div>
          {error && <p className="error-message text-danger">{error}</p>}
          <div className="centered mt-2">
            <button type="submit" className="btn btn-primary">
              Logare
            </button>
          </div>
        </form>
      </div>
      <div className="centered">
        <p>Contact: catalindanis14@gmail.com</p>
      </div>
    </div>
  );
};

export default Login;

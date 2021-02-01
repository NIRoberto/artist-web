import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      alert("ok");
    } else {
      alert("wrong");
    }
  };
  return (
    <div className="loginForm">
      <img src="/images/guitar.png" alt="Background" />

      <div className="loginForm-input">
        <form onSubmit={handleSubmit}>
          <h1>Login here</h1>

          <div className="input-div">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="input-div ">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button>Login</button>
          <span style={{ marginTop: "2em" }}>
            {" "}
            If you don't have an account please signup{" "}
            <Link to="register" style={{ color: "#101010", fontSize: "0.8em" }}>
              here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

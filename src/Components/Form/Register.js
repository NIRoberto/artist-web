import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);

  const handleSubmit = () => {};
  return (
    <div className="loginForm">
      <img src="/images/guitar.png" alt="Background" />

      <div className="loginForm-input">
        <form onSubmit={handleSubmit}>
          <h1>Register here</h1>
          <div className="input-div">
            <label htmlFor="Email"> Full name</label>
            <input
              type="email"
              onClick={() => setFocus1(!focus1)}
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-div">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              onClick={() => setFocus1(!focus1)}
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
              onClick={() => setFocus2(!focus2)}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button>Register</button>
          <span>
            If you have an account please login
            <Link
              to="login"
              style={{
                color: " #827e7",
                fontSize: "0.8em",
              }}
            >
              {" "}
              here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

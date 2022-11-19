import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import img from "../images/signin.jpeg";

import { auth, registerWithEmailAndPassword } from "../firebase";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  //Error validation
  const register = () => {
    if (!name) alert("Please enter your name");
    else if (!email) alert("Please enter your email");
    else if (!password) alert("Please enter your password");
    else registerWithEmailAndPassword(name, email, password);
  };

  // Register success
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="register">
      <div class="container">
        <div className="register__container">
          <h1 id="title">Register</h1>

          {/* Name text input */}
          <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />

          {/* Email text input */}
          <input
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />

          {/* Password text input */}
          <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {/* Register button */}
          <button className="register__btn" onClick={register}>
            Register
          </button>

          <div>
            Already have an account? <Link to="/">Login</Link> now.
          </div>
        </div>
        <img src={img} class="register-img" alt="logo" />
      </div>
    </div>
  );
}

export default Register;

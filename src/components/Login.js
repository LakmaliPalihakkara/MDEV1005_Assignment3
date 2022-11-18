import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import img from '../images/login.jpg'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();


  //Error validation
  const login = () => {
    if (!email) alert("Please enter your email");
    else if (!password) alert("Please enter your password");
    else logInWithEmailAndPassword(email, password)
  };

  // Login success
  useEffect(() => {
    if (loading) {

      return;
    }
    if (user) navigate("/register");
  }, [user, loading]);

  return (
    <div className="login">

      <div id ="container">
        <img src={img} class="login-img" alt='logo' />

        <div className="login__container">

        <h1 id="title">Login</h1>

          {/* Email text input */}
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />

          {/* Password text input */}
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {/* Register button */}
          <button
            className="login__btn"
            onClick={login}>
            Login
          </button>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
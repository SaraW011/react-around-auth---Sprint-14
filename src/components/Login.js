import React from "react";
import { Link } from "react-router-dom";

export default function Login({
  email,
  password,
  handleLogin,
  handleEmail,
  handlePassword,
}) {
  
  return (
    <div className="login">
      <p className="login__title">Welcome back!</p>
      <form onSubmit={handleLogin} className="login__form">
        <input
          required
          className="login__input"
          id="email"
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={handleEmail}
        />
        <input
          required
          className="login__input"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" className="login__button">
          Log in
        </button>
      </form>
      <Link to="/signup" className="login__link">
        Not a member yet? Sign up here!
      </Link>
    </div>
  );
}

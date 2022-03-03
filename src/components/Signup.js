import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginimg from "../images/signup svg.jpg";
import "./Login.css";


const Signup = () => {
  const [signupUser, setSignupUser] = useState({username:"", email:"", password:"", confirmPassword:""})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignupUser({...signupUser, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignupUser({ username: "", email: "", password: "", confirmPassword: "" });
  }

  return (
    <div className="login_container signup_container_height">
      <div className="login_container_left">
        <div className="title">
          <h1 style={{ color: "#0a65a4" }}>Signup</h1>
        </div>

        <form className="form_container" onSubmit={handleSubmit}>
          <div className="form_field">
            <label style={{ color: "#0a65a4" }}>
              <b>User Name:</b>
            </label>
            <input type="text" name="username" required value={signupUser.username} onChange={handleChange}></input>
          </div>

          <div className="form_field">
            <label style={{ color: "#0a65a4" }}>
              <b>Email:</b>
            </label>
            <input type="email" name="email" required value={signupUser.email} onChange={handleChange}></input>
          </div>

          <div className="form_field">
            <label style={{ color: "#0a65a4" }}>
              <b>Password:</b>
            </label>
            <input type="password" name="password" required value={signupUser.password} onChange={handleChange}></input>
          </div>

          <div className="form_field">
            <label style={{ color: "#0a65a4" }}>
              <b>Confirm Password:</b>
            </label>
            <input type="password" name="confirmPassword" required value={signupUser.confirmPassword} onChange={handleChange}></input>
          </div>

          <button type="submit" className="btn">
            Login
          </button>
        </form>

        <div className="login_footer">
          Already have an account?
          <Link to="/login" style={{ color: "#0a65a4" }}>
            <b> Login</b>
          </Link>
        </div>
      </div>

      <div className="login_container_right signup_img_height">
        <img src={loginimg} />
      </div>
    </div>
  );
}

export default Signup
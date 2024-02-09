import "./Signup.css";
import Appnavtest from './appnavtest';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"





function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupResult, setSignupResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        email,
        password,
      });
      console.log(response.data)
      setSignupResult(response.data.message); // Assuming backend sends a message upon successful signup
    } catch (error) {
      console.error(error.response.data)
      setSignupResult(error.response.data.error); // Assuming backend sends an error message upon failed signup
    }
  };

  return (
    <div className="main-c">
      <div>
        <Appnavtest />
      </div>
      <div className="small-c">
        <div className="lg-im">
          <img
            className="undraw-login-re"
            alt="Undraw login re"
            src="https://cdn.animaapp.com/projects/65bbd071206cc4fa9aea7174/releases/65bbd40c718196d9982eb9d6/img/undraw-login-re-4vu2-1.svg"
          />
        </div>
        <div className="fom">
          <form onSubmit={handleSubmit}>
            <div className="text-wrapper-2">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className="frame-3"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            <div className="text-wrapper-2">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                className="frame-3"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="text-wrapper-2">
              <button className="google-btn">
                <img
                  className="google"
                  alt="Google"
                  src="https://cdn.animaapp.com/projects/65bbd071206cc4fa9aea7174/releases/65be0f8fd422316e119bb896/img/google-2.svg"
                />
                <div className="text-wrapper-5">Sign Up with Google</div>
              </button>
            </div>

            <div className="lgin">
              <button type="submit" className="div-wrapper">
                Signup
              </button>
            </div>
          </form>
          {signupResult && <div className="resultsingnup">{signupResult}</div>}
        </div>
      </div>
    </div>
  );
}

export default Signup;

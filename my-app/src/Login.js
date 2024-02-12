
import "./Login.css";
import Appnavtest from './appnavtest';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"


function Login(){
  const history=useNavigate();
  const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')

    async function submit(e) {
      e.preventDefault();
  
      try {
          const response = await axios.post("http://localhost:3001/login", {
              email,
              password
          });
  
          if (response.status === 200) {
              alert(response.data.message); // Display success message
              history("/"); // Redirect to homepage
          } else if (response.status === 404) {
              alert(response.data.error); // Display user not found error
          } else if (response.status === 401) {
              alert(response.data.error); // Display invalid password error
          } else {
              alert("An error occurred while logging in");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while logging in");
      }
  }
  
    
    

    


  return (
    
    <div className="main-c">
    
    <div>
    <Appnavtest/>
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
      <form  onSubmit={submit}>
        <div className="text-wrapper-2">
          
          <label htmlFor="email">Email</label>
           <br/>
           <input type="email" id="email" name="email" className="frame-3" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
         </div>


         <div className="text-wrapper-2">
        
           <label htmlFor="password">Password</label>
           <br/>
           <input type="password" id="password" name="password" className="frame-3" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
         </div>

         <div className="text-wrapper-2">
         <button className="google-btn">
    <img
      className="google"
      alt="Google"
      src="https://cdn.animaapp.com/projects/65bbd071206cc4fa9aea7174/releases/65be0f8fd422316e119bb896/img/google-2.svg"
    />
    <div className="text-wrapper-5">Login with Google</div>
  </button>
         </div>

        <div className="b-di">
          <div>
          <p className="span">
           Don’t you have an account ?
           
         </p></div>
         <div >
         <a href="/Signup" type="submit" className="frame-5">
           Sign Up
         </a></div>
         </div>
        <div className="lgin">
         <button type="submit" className="div-wrapper">
           Login
         </button>
         </div>
       </form>
      </div>
     </div>
    </div>


  );

  

};

export default Login;
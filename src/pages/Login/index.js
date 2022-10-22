import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../../styles/Pages/Login/Login.css'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const checkUser = (e) => {
    e.preventDefault();
    if (username === "niki@gmail.com") {
      if (password === "niki123") {
        alert("Login Success!");
        window.location.replace("/");
      } else {
        alert("Please check your password again!");
      }
    } else {
      alert("User not found, please register first!");
    }
  };

  return (
    <div className="container-fluid row g-0" id="login">
      <div className="col-6 col-md-7 border" id="left-side">
        <h1 className="my-5 mx-4 title-left">Book is a window<br />To the world.</h1>
      </div>

      <div className="col-6 col-md-5 border" id="right-side">
        <div className="logo float-end mb-5 mt-2 me-2">
          <Icon icon="fluent:library-20-regular" width="50" height="50" />
        </div>
        <div className="content mt-5 px-5">
          <h1>Login</h1>
          <strong
          ><p>Welcome back!<br />Please login to your account.</p></strong>
          <form>

            <FloatingLabel controlId="floatingInput" label="Email Address">
              <Form.Control type="email" placeholder="Email Address" className="rounded-0 border-bottom-0" onChange={(e) => usernameChange(e)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control type="password" placeholder="Password" className="rounded-0 " onChange={(e) => passwordChange(e)}/>
            </FloatingLabel>

            <div className="mb-3">
              <div className="input-group mb-3 d-flex justify-content-between">
                <div className="checkbox">
                  <input className="form-check-input mx-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                  <label className="form-label">Remember Me</label>
                </div>
                <Link to={"/"} className="text-dark"><p><strong>Forgot Password?</strong></p></Link>
              </div>
            </div>
            <Link to={"/"} className="btn login-btn shadow btn-lg me-2" onClick={(e) => checkUser(e)}>
              Login
            </Link>
            <Link to={"/register"} className="btn signup-btn shadow btn-lg ms-1">
              Register
            </Link>
          </form>
        </div>

        <footer className="mt-5 ms-1">
          <p>
            By signing up, you agree to Book's <br />
            <strong>Terms and Conditions</strong> & <strong>Privacy Policy</strong>.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Login
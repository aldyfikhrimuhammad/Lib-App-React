import React from 'react'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Register = () => {
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
          <h1>Register</h1>
          <strong
          ><p>Welcome back!<br />Please register to create account.</p></strong>
          <form>
          <FloatingLabel controlId="floatingInput" label="Username">
              <Form.Control type="text" placeholder="Username" className="rounded-0 border-bottom-0" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Full Name">
              <Form.Control type="text" placeholder="Full Name" className="rounded-0 border-bottom-0" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email Address">
              <Form.Control type="email" placeholder="Email Address" className="rounded-0 border-bottom-0" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control type="password" placeholder="Password" className="rounded-0 " />
            </FloatingLabel>
            <Link to={"/login"} className="btn login-btn shadow btn-lg me-2 mt-3">
              Login
            </Link>
            <Link to={"/"} className="btn signup-btn shadow btn-lg ms-1 mt-3">
              Register
            </Link>
          </form>
        </div>

        <footer className="mt-5 ms-2">
          <p>
            By signing up, you agree to Book's <br />
            <strong>Terms and Conditions</strong> & <strong>Privacy Policy</strong>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Register
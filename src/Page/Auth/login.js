import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import maskGroup from "../../Image/MaskGroup.png";
import logo from "../../Image/logo.png";
import { ToastContainer } from "react-toastify";
import facebook from "../../Image/face.png";
import apple from "../../Image/apple.png";
import google from "../../Image/google.png";
import loginHook from "../../Hook/auth/login-hook";

const LoginPage = () => {
  const [email, password, loading, onChangeEmail, onChangePassword, onClick] =
    loginHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className=" d-flex justify-content-center hieght-search">
        <Col sm="6" className="mt-3 d-flex flex-column ">
          <div>
            <img src={logo} className="logo" alt="" />
          </div>

          <div className="mt-3 my-4 d-flex justify-content-between res">
            <span className="welcome">Welcome Back</span>
            <span className="require">* Required</span>
          </div>

          <div className="d-flex">
            <a href="https://www.google.com" target="_blank">
              <img className="icons" src={google} />
            </a>
            <a href="https://www.apple.com" target="_blank">
              <img className="icons" src={apple} />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img className="icons" src={facebook} />
            </a>
          </div>

          <div className="d-flex">
            <hr />
            <span className="or px-2">or</span>
            <hr />
          </div>
          <br />
          <label className="labelName">
            E-Mail<span className="star">*</span>
          </label>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="mail@website.com"
            type="text"
            className="user-input my-3 px-3"
          />
          <label className="labelName my-2">
            password<span className="star">*</span>
          </label>
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="min 8 character"
            type="password"
            className="user-input px-3"
          />
          <div className="d-flex justify-content-between res my-4">
            <div>
              <input type="checkbox" checked="checked" className="check" />
              <span class="checkmark">Remember Me</span>
            </div>
            <div>
              <a href="" style={{ color: "#000" }}>
                Forget Password
              </a>
            </div>
          </div>

          <button onClick={onClick} className=" btn-login mt-4">
            Login{" "}
          </button>
          <button className="continue  mt-4">Continue as a guest </button>
          <label className=" my-4">
            Not registered yet?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className=" createAccount">
                Create an account
              </span>
            </Link>
          </label>
          <h4 className="reserved my-4">@2022 Recounts All rights reserved</h4>
        </Col>
        <Col sm="6">
          <div>
            <img src={maskGroup} className="sideImage" alt="" />
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;

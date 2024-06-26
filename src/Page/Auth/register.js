import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import maskGroup from "../../Image/MaskGroup515.png";
import logo from "../../Image/logo.png";
import { ToastContainer } from "react-toastify";
import RegisterHook from "../../Hook/auth/register-hook";
import "react-phone-number-input/style.css";
import facebook from "../../Image/face.png";
import apple from "../../Image/apple.png";
import google from "../../Image/google.png";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const RegisterPage = () => {
  const [
    fName,
    lName,
    email,
    phone,
    password,
    errors,
    loading,
    onChangeFname,
    onChangeLname,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onClick,
  ] = RegisterHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className=" d-flex justify-content-center hieght-search">
        <Col sm="6" className="mt-3 d-flex flex-column ">
          <div>
            <img src={logo} className="logo" alt="" />
          </div>

          <div className="mt-3 d-flex justify-content-between res">
            <span className="welcome">Create Account</span>
            <span className="require">* Required</span>
          </div>
          <label className=" my-4">
            Already have account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className=" createAccount">
                Login
              </span>
            </Link>
          </label>

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

          <label className="labelName">
            E-Mail<span className="star">*</span>
          </label>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="mail@website.com"
            type="text"
            className="user-input  px-3"
          />
          {errors.emailError && (<span className="error">{errors.emailError}</span>)}
          <div
            className="d-flex justify-content-between"
            style={{ width: "70%" }}
          >
            <div>
              <label className="labelName">
                First Name<span className="star">*</span>
              </label>
              <input
                value={fName}
                onChange={onChangeFname}
                placeholder="Rob"
                type="text"
                className="user-input2  px-3"
              />
            {errors.fNameError && (<span className="error">{errors.fNameError}</span>)}
            </div>

            <div>
              <label className="labelName">Last Name</label>
              <input
                value={lName}
                onChange={onChangeLname}
                placeholder="Smith"
                type="text"
                className="user-input2  px-3"
              />
              {errors.lNameError && (<span className="error">{errors.lNameError}</span>)}
            </div>
          </div>

          <label className="labelName">
            password<span className="star">*</span>
          </label>
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="min 8 character"
            type="password"
            className="user-input px-3"
          />
          {errors.passwordError && (<span className="error">{errors.passwordError}</span>)}
          <label className="labelName">City</label>
          <input
            placeholder="Toranto"
            type="text"
            className="user-input  px-3"
          />

          <div>
            {/* <div>
              <label className="labelName">
                Country<span className="star">*</span>
              </label>
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={onChangePhone}
              />
            </div> */}

            <div>
              <label className="labelName">Mobile Number</label>
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={onChangePhone}
              />
              {errors.phoneError && (<div className="error">{errors.phoneError}</div>)}
            </div>
            
          </div>

          <label className="labelName">Salutation</label>
          <div className="d-flex my-3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Mr
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Miss
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3">
                Mrs
              </label>
            </div>
          </div>

          <label className="labelName my-2" for="birthdaytime">
            Birth Date
          </label>
          <input
            type="date"
            className="user-input"
            id="birthdaytime"
            name="birthdaytime"
          />

          <div className="my-3" style={{ color: "#D80073" }}>
            "Add your date of birth if you want receive FREE gifts in your
            birthday"
          </div>

          <div>
            <input type="checkbox" checked="checked" className="check" />
            <span class="checkmark"></span>I Accept Rescounts{" "}
            <span style={{ color: "#D80073" }}>Terms & Conditions</span> And{" "}
            <span style={{ color: "#D80073" }}>Privacy Policyp</span>
          </div>

          <button onClick={onClick} className="btn-login mt-4 my-5">
            Sign up{" "}
          </button>

          <h4 className="reserved">@2022 Recounts All rights reserved</h4>
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

export default RegisterPage;

import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        className="footer text-center text-lg-start text-white"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container">
          <div className="row list">
          <div className="col-md-4 mt-4 d-flex flex-column justify-content-center col-12 icons px-4">
            <img src="assets/images/footer_logo.svg" style={{width: '50%'}} alt="" />
              <p className='mt-2'>
              © 2023 Propy, Inc. All rights reserved
              </p>
              <h4>Terms & Conditions | Privacy | Cookies</h4>
            </div>
            <div className="col-md-2 mt-5 col-12">
              <ul className="list-unstyled">
                <p style={{margin: '0px'}}>ONBOARDING</p>
                <li>
                  <a href="#">Get Started</a>
                </li>
                <li>
                  <a href="#">I'm an Agent</a>
                </li>
                <li>
                  <a href="#">I'm a Buyer</a>
                </li>
                <li>
                  <a href="#">I'm a Seller</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mt-5 col-12">
              <ul className="list-unstyled">
                <p style={{margin: '0px'}}>OFFERINGS</p>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">About Propy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mt-5 col-12">
              <ul className="list-unstyled">
                <p style={{margin: '0px'}}>EDUCATION</p>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">Webinars</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
              </ul>
            </div>
           
            <div className="col-md-2 mt-5 col-12">
              <ul className="list-unstyled">
                <p style={{margin: '0px'}}>PRESS</p>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
           
          </div>
     
        </div>
      </footer>
    </>
  )
}

export default Footer
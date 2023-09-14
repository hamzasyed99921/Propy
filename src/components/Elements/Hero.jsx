import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        className="hero_section"
      >
        <div className="container hero_inner">
        <div className="img_2">
              <img src="assets/images/hero2.webp" style={{width: '55%',position: 'absolute'}}  alt="" />
              </div>
          <div className="row">
            <div className="col-md-6 col-12 ">
              <h2>24/7 Real Estate Closings Powered by Tech</h2>
              <p>
                Propy Title and Escrow leverages AI and blockchain technology
                for smoother & more <br /> secure transactions.
              </p>
              <h4>Watch Video <BiPlayCircle size={24} color="#000" /></h4>
            </div>
            <div className="col-lg-6 col-md-12  col-12">
              <div className="form">
                <div className="head">
                <div className="d-flex align-items-center form_top">
                <img src="assets/images/logo.svg" alt="" />
                  <h2>How may we help?</h2>
                </div>
                <div className="btn_main">
                  <Link>i'm an agent</Link>
                </div>
                <div className="btn_main">
                  <Link>i'm a seller</Link>
                </div>
                <div className="btn_main">
                  <Link>i'm a buyer</Link>
                </div>
                <div className="bottom_link d-flex justify-content-center align-items-center">
                  <Link>i'm just curious </Link>
                  <IoIosArrowForward size={14} style={{marginLeft: '4px'}}/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { BsFillFlagFill } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className='top_div'>
        <div className="inner_div">
        <img src="assets/images/logo.svg" alt="" />
        <h3>propy ai</h3>
        <p>Close faster and more securely with Propy AI</p>
        <Link>Try it now <FaLongArrowAltRight color='#38a6fa' /></Link>
        
        </div>
      </div>
       <nav className="navbar navbar-expand-lg fixed-top " id="header">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" style={{width: '10%'}} to="/">
            <img
              src="assets/images/nav-brand.svg"
              className="img-fluid "
              style={{width:'80%'}}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav text-center d-flex justify-content-center mb-2  mb-lg-0" style={{width: '60%'}}>
              <li className="nav-item ">
                <Link className="nav-link buy" aria-current="page" to="/">
                  Buy 
                  <BiChevronDown color='gray' size={25}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Sell 
                  <BiChevronDown color='gray' size={25}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Buy & Sell
                  <BiChevronDown color='gray' size={25}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <img src="assets/images/escrow.svg" style={{marginInline: 6}} alt="" />
                  Title & Escrow
                </Link>
              </li>   
        
            </ul>
            <ul className="navbar-nav text-center d-flex justify-content-center align-items-center mb-2  mb-lg-0" style={{width: '60%'}}>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                  <BsFillFlagFill color='#38a6fa' style={{marginInline: 6}}/>
                  Get Started
                </Link>
              </li> 
            <li className="nav-item">
                <Link className="nav-link" to="/">
                  <img src="assets/images/help.svg" style={{marginInline: 6,width: '22px'}} alt="" />
                  Help
                </Link>
              </li> 
            <li className="nav-item">
                <Link className=" signin_btn" to="/">
                  sign in
                </Link>
              </li> 
            </ul>
          </div>
        </div>
        <div className="navd position-absolute " style={{marginTop: '22rem'}} >
                  <div className="container-fluid">
                    <div className="row p-4" >
                      <div className="col-md-4 col-6">
                        <h3 >Sell with Propy</h3>
                        <p>
                        Purchase your next home with next-generation tech and agents.
                        </p>
                        <div className="bottom_btn">
            <a href="#">i'm a buyer</a>
          </div>
                      </div>
                      <div className="col-md-3 mt-4 col-6 nav_hov">
                        <ul>
                          <li>Title & Escrow</li>
                          <li>Browse All Listings</li>
                          <li>Featured Listings</li>
                          <li>Find an Agent</li>
                          <li>Crypto Certified Agent Course</li>
                        </ul>
                      </div>
                      <div className="col-md-3 mt-4 col-6 nav_hov">
                        <ul>
                          <li>Pricing</li>
                          <li>Transaction Platform</li>
                          <li>Offer Management</li>
                          <li>Meta Agent Course</li>
                        </ul>
                      </div>
                      <div className="col-md-2 mt-4 col-6 nav_hov">
                        <ul>
                          <li>"How To" Guides</li>
                          <li>Case Studies</li>
                          <li>Propy Blog</li>
                          <li>Webinars</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
      </nav>
      
    </>
  )
}

export default Header
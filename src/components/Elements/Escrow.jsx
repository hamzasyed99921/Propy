import React from 'react'

const Escrow = () => {
  return (
   <>
     <div className="Escrow_sec">
        <div className="container">
          <div className="bg_img">
            <div className="row">
              
              <div className="col-md-4 d-flex justify-content-center">
                <div className="img_main" data-aos="fade-down">
                  <img
                    src="assets/images/phone2.webp"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-8" data-aos="zoom-in">
                <h2>Title & Escrow by Propy </h2>
                <p>
                Close your next real estate transaction with business-class
                  <span style={{ fontWeight: "600" }}>Title & Escrow</span>{" "}
                  services by the Propy team
                </p>
                <div className="d-flex bottom_btn mb-4">
                  <a href="#">get started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Escrow
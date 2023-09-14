import React from 'react'

const Newsletter = () => {
  return (
    <>
         <div className="newsletter_sec">
        <div className="container">
          <div className="bg_img">
            <div className="row">
              <div className="col-md-8" data-aos="zoom-in">
                <h2>Subscribe to Newsletter</h2>
                <p>
                Receive the
                  <span style={{ fontWeight: "600" }}> Real Estate, Proptech & Web3 Pulse: Your Weekly Digest</span>{" "}
                  covering the latest innovations and news
                </p>
                <div className="d-flex bottom_btn mb-4">
                  <a href="#">join free</a>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="img_main" data-aos="fade-down">
                  <img
                    src="assets/images/phone.webp"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter
import React from "react";

const Funds = () => {
  return (
    <>
      <div className="funds_sec">
        <div className="container">
          <div className="bg_img">
            <div className="row">
              <div className="col-md-8" data-aos="zoom-in">
                <h2>Generate Proof of Funds</h2>
                <p>
                  Get ahead of your next transaction with{" "}
                  <span style={{ fontWeight: "600" }}>secure & provable</span>{" "}
                  funding for bank transfers or cryptocurrency
                </p>
                <div className="d-flex bottom_btn mb-3">
                  <a href="#">get started</a>
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
  );
};

export default Funds;

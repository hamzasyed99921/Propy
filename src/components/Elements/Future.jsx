import React from "react";

const data = [
    {id: 1, Image: 'assets/images/card1.svg',title: 'Transaction Platform', para: ' Exchange properties 24/7 around the globe.',link: 'learn more'},
    {id: 2, Image: 'assets/images/card2.svg',title: 'Title & Escrow', para: 'Quickly and securely close with confidence.',link: 'learn more'},
    {id: 3, Image: 'assets/images/card3.svg',title: 'Crypto Certifications', para: ' Prove crypto fluency or find certified agents.',link: 'learn more'},
    {id: 4, Image: 'assets/images/card4.svg',title: 'Get Started Today', para: ' Complete a quick form and let’s get started.',link: 'begin now'},
]

const Future = () => {
    const blueTextStyle = {
        backgroundColor: '#007bda',
        color: '#fff'
      };
  return (
    <>
      <div className="future_section">
        <div className="container">
          <h2 className="text-center" data-aos="fade-down">The Future of Homebuying is Now</h2>
          <p className="text-center" data-aos="fade-down">
            Streamline your transaction from payment to closing
          </p>
          <div className="row mt-4">
            {
                data.map((val) => {
                    return (
                        <>
                            <div className="col-lg-3 col-md-6  col-12 mt-3" data-aos="zoom-in">
            <div className="card" style={val.id === 4 ? blueTextStyle : null }>
            <div className="card-body">
              <div className="d-flex justify-content-center">
              <img src={val.Image} alt="" />
              </div>
              <div className="d-flex justify-content-center ">
              <h6 className="mb-2 " style={val.id === 4 ? blueTextStyle : null }>
              {val.title}
              </h6>
              </div>
              <p className="card-text">
              {val.para}
              </p>
              <div className="text-center mt-3">
              <a href="#" className="card-link">
                {val.link}
              </a>
              </div>
            </div>
          </div>
            </div>
                        </>
                    )
                })
            }
            
          </div>
          <div className="bottom_text d-flex justify-content-center" data-aos="fade-up">
            <p className="text-center ">Over $4 billion in transactions processed with Propy partners across the USA
Featured Listings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Future;

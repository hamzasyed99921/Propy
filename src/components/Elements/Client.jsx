import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Client = () => {
  return (
    <>
      <div className="client_sec">
        <div className="container">
          <h2 className="text-center" data-aos="fade-down">From our Clients</h2>
          <p className="text-center" data-aos="fade-down">
            Hear about Propy from the clients we work with
          </p>
          <div className="card_main mt-5" data-aos="flip-left">
            <Carousel
              responsive={responsive}
              arrows
              autoPlay
              autoPlaySpeed={3000}
              draggable
              showArrows={true}
              focusOnSelect={false}
              infiniteLoop={true}
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
            >
              <div>
                <div className="d-flex justify-content-center img_main">
                  <img src="assets/images/t1.png" alt="" />
                </div>
                <h3 className="text-center mt-3">Erin Blakeslee</h3>
                <h4 className="text-center">Coldwell Banker Realty</h4>
                <div className="d-flex justify-content-center">
                  <p className="text-center  w-75 my-4">
                    "Propy is the future of real estate. It is cohesive in
                    integrating all parties and all documents into one place.
                    This is the platform that all realtors, lenders, escrow
                    companies and title companies need to adapt."
                  </p>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-center img_main">
                  <img src="assets/images/t2.webp" alt="" />
                </div>
                <h3 className="text-center mt-3">Amanda Joslin</h3>
                <h4 className="text-center">NFT Buyer</h4>
                <div className="d-flex justify-content-center">
                  <p className="text-center  w-75 my-4">
                    "I’ve been a traditional homeowner in the past, I’ve gone
                    through the traditional process, and then going through this
                    process it is like night and day! It was not only a
                    wonderful deal that we got in this purchase but also the
                    process as I say was just super streamlined and easy."
                  </p>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-center img_main">
                  <img src="assets/images/t3.jpeg" alt="" />
                </div>
                <h3 className="text-center mt-3">Kyle Barbre</h3>
                <h4 className="text-center">Keller Williams</h4>
                <div className="d-flex justify-content-center">
                  <p className="text-center  w-75 my-4">
                    "This platform has the ability to link your deed to the
                    blockchain which makes it unique and immutable. Ultimately
                    being able to sell your home as an NFT and convey ownership
                    quicker & safer than traditional mediums!"
                  </p>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-center img_main">
                  <img src="assets/images/t4.webp" alt="" />
                </div>
                <h3 className="text-center mt-3">Gabrielle & Ryan Channell</h3>
                <h4 className="text-center">NFT Buyer</h4>
                <div className="d-flex justify-content-center">
                  <p className="text-center  w-75 my-4">
                    "We were able to buy this condo as an NFT because we were
                    able to use the Propy platform and the whole team was there
                    all the time. Any questions we had they were on it, and they
                    were replying within minutes. It was a super cool
                    experience."
                  </p>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-center img_main">
                  <img src="assets/images/t5.webp" alt="" />
                </div>
                <h3 className="text-center mt-3">Jeanie Halloran</h3>
                <h4 className="text-center">MD Real Estate Agent</h4>
                <div className="d-flex justify-content-center">
                  <p className="text-center  w-75 my-4">
                    "Propy is revolutionizing my industry, and I am so excited
                    and thankful to be a part of this movement!"
                  </p>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-center img_main">
                  <img src="assets/images/t6.png" alt="" />
                </div>
                <h3 className="text-center mt-3">Joshua DeDecker</h3>
                <h4 className="text-center">
                  Real Estate Operations Consultant
                </h4>
                <div className="d-flex justify-content-center">
                  <p className="text-center  w-75 my-4">
                    "Propy has laid ground work for the first real estate NFT
                    transactions. We identified the need to become crypto/NFT
                    certified at Patriot Property Collective to fill this new
                    and growing demand!"
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;

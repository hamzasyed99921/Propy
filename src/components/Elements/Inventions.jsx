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

const Inventions = () => {
  return (
    <>
      <div className="invention_sec">
        <div className="container">
          <h2 className="text-center" data-aos="fade-down">Research-backed Inventions</h2>
          <p className="text-center" data-aos="fade-down">
            Contributing to extensive scientific research from the world’s top
            academic institutions
          </p>
          <div className="d-flex justify-content-around row_img">
            <img src="assets/images/a1.png" alt="" />
            <img src="assets/images/a2.png" alt="" />
            <img src="assets/images/a3.png" alt="" />
            <img src="assets/images/a4.png" alt="" />
            <img src="assets/images/a5.png" alt="" />
            <img src="assets/images/a6.png" alt="" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card_main mt-5" data-aos="flip-left">
                <h3>
                  Propy Awarded as Technology Pioneer by World Economic Forum
                </h3>
                <p>
                  "Propy and its fellow pioneers are developing technologies
                  that can help society solve some of its most pressing issues."
                </p>
                <div className="d-flex align-items-center card_bottom">
                  <img
                    src="assets/images/w1.webp"
                    style={{ width: "15%" }}
                    alt=""
                  />
                  <div className="mx-3">
                    <h4>Susan Nesbitt</h4>
                    <h5>Head of the Global Innovators Community, WEF</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
                  <div className="card_right">
                    <div className="d-flex">
                      <img
                        src="assets/images/p1.webp"
                        style={{ width: "18%" }}
                        alt=""
                      />
                    </div>
                    <h3 className="my-3">
                      Three Ways Blockchain Technology Will Revolutionize Real
                      Estate in 2019
                    </h3>
                    <p>
                      "Propy and its fellow pioneers are developing technologies
                      that can help society solve some of its most pressing
                      issues."
                    </p>
                  </div>
                  <div className="card_right">
                    <div className="d-flex">
                      <img
                        src="assets/images/p2.webp"
                        style={{ width: "18%" }}
                        alt=""
                      />
                    </div>
                    <h3 className="my-3">
                      Most Innovative Real Estate Company
                    </h3>
                    <p>
                      Propy wants to streamline real estate transfers using
                      technology. It successfully launched a blockchain pilot in
                      Vermont to establish a secure digital process for
                      delivering electronic deeds, placing it at the forefront
                      of real estate companies leveraging blockchain.
                    </p>
                  </div>
                  <div className="card_right">
                    <div className="d-flex">
                      <img
                        src="assets/images/p3.webp"
                        style={{ width: "18%" }}
                        alt=""
                      />
                    </div>
                    <h3 className="my-3">
                      A blockchain-verified platform for selling houses
                    </h3>
                    <p>
                      ...almost one-fifth of millennials have now thought about
                      buying a home because of the lock-downs induced by the
                      COVID-19 pandemic, meaning that many will be looking for
                      an easy way to transact, especially if it has the ease of
                      use Propy has.
                    </p>
                  </div>
                  <div className="card_right">
                    <div className="d-flex">
                      <img
                        src="assets/images/p4.webp"
                        style={{ width: "18%" }}
                        alt=""
                      />
                    </div>
                    <h3 className="my-3">
                      National Association of Realtors®’ VC Arm Invests in Propy
                    </h3>
                    <p>
                      Propy also integrated the favorite tools of agents such as
                      DocuSign and addressed the main cybersecurity problem of
                      the industry – wire fraud.
                    </p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventions;

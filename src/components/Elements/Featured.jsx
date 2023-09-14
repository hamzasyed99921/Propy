import React from "react";
import { BiBed,BiBuildings } from "react-icons/bi";
import { TbBath } from "react-icons/tb";

const data = [
    {id: 1,image: 'assets/images/c1.jpg',head: '$ 7,650,000',para: '50 Pelican Circle, Inlet Beach, FL 32461, US',bd: '8',ba: '10',ft: '535'},
    {id: 2,image: 'assets/images/c2.jpg',head: '$ 10,850,000',para: '60 Harris Lee Court, Santa Rosa Beach, FL 32459, US',bd: '6',ba: '7',ft: '697'},
    {id: 3,image: 'assets/images/c3.jpg',head: '$ 7,500',para: '0 Brook St, California City, CA 93505, US',bd: '3',ba: '2',ft: '397'},
    {id: 4,image: 'assets/images/c4.jpg',head: '$ 350,000',para: '803 19th Ave, Columbus, MS 39701, US',bd: '5',ba: '3',ft: '337'},
    {id: 5,image: 'assets/images/c5.jpg',head: '$ 659,000',para: '1705 Chickasaw Dr, Columbus, MS 39705, US',bd: '7',ba: '5',ft: '598'},
    {id: 6,image: 'assets/images/c6.jpeg',head: '$ 10,000,000',para: 'Journeys End Rd, Miami, FL 33156, USA',bd: '6',ba: '10',ft: '929'},
    {id: 7,image: 'assets/images/c7.jpg',head: '$ 935,000',para: '5618 Avenue O, Brooklyn, NY 11234, USA',bd: '5',ba: '11',ft: '429'},
]

const Featured = () => {
  return (
    <>
      <div className="featured_sec">
        <div className="container-fluid">
          <h2 className="text-center" data-aos="fade-down">Featured Listings</h2>
          <p className="text-center" data-aos="fade-down">
            A curated collection of our favorite properties
          </p>
          <div className="row mt-4">
            
            {data.map((res) => {
                return(
                    <>
                    {res.id === 1 ? <div className="col-lg-6 col-md-12 col-12" data-aos="zoom-in">
              <div className="card" >
                <img src="assets/images/c1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">$ 7,650,000</h5>
                  <p className="card-text">
                  50 Pelican Circle, Inlet Beach, FL 32461, US
                  </p>
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                        <BiBed/>
                        <p style={{fontWeight: '500',marginLeft: '6px'}}>8 <span style={{fontWeight: '400'}}>bd</span></p>
                    </div>
                    <div className="d-flex align-items-center mx-3">
                        <TbBath/>
                        <p style={{fontWeight: '500',marginLeft: '6px'}}>10 <span style={{fontWeight: '400'}}>ba</span></p>
                    </div>
                    <div className="d-flex align-items-center">
                        <BiBuildings/>
                        <p style={{fontWeight: '500',marginLeft: '6px'}}>535 <span style={{fontWeight: '400'}}>ft</span></p>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary">
                    View Listing
                  </a>
                </div>
              </div>
            </div> : <div className="col-lg-3 col-md-12 col-12" data-aos="zoom-in">
            <div className="card" >
                <img src={res.image} className="card-img-top " alt="..." />
            
                <div className="card-body">
                  <h5 className="card-title">{res.head}</h5>
                  <p className="card-text">
                  {res.para}
                  </p>
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                        <BiBed/>
                        <p style={{fontWeight: '500',marginLeft: '6px'}}>{res.bd} <span style={{fontWeight: '400'}}>bd</span></p>
                    </div>
                    <div className="d-flex align-items-center mx-3">
                        <TbBath/>
                        <p style={{fontWeight: '500',marginLeft: '6px'}}>{res.ba} <span style={{fontWeight: '400'}}>ba</span></p>
                    </div>
                    <div className="d-flex align-items-center">
                        <BiBuildings/>
                        <p style={{fontWeight: '500',marginLeft: '6px'}}>{res.ft} <span style={{fontWeight: '400'}}>ft</span></p>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary mt-1">
                    View Listing
                  </a>
                </div>
              </div>
            </div> }
                        
                    </>
                )
            })}
            
          </div>
          <div className="d-flex justify-content-center align-items-center bottom_btn" data-aos="fade-up">
            <a href="#">view more listing</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;

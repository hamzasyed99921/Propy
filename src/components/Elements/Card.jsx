import React from 'react'

const Card = () => {
  return (
    <>
        <div className="card_sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mb-3" data-aos="fade-down"  data-aos-duration="1000">
                     <div className="bg_img1">
                          <div className='p-3 d-flex flex-column justify-content-between' style={{height: '100%'}}>
                          <h2>Los Angeles, CA</h2>
                          <div className='d-flex'>
                          <a href='#'>Los Angeles homes for sale</a>
                          </div>
                          </div>
                     </div>
                    </div>
                    <div className="col-md-4 mb-3" data-aos="fade-down"  data-aos-duration="1500">
                     <div className="bg_img2">
                          <div className='p-3 d-flex flex-column justify-content-between' style={{height: '100%'}}>
                          <h2>Austin, TX</h2>
                          <div className='d-flex'>
                          <a href='#'>Austin homes for sale</a>
                          </div>
                          </div>
                     </div>
                    </div>
                    <div className="col-md-4 mb-3" data-aos="fade-down"  data-aos-duration="2000">
                     <div className="bg_img3">
                          <div className='p-3 d-flex flex-column justify-content-between' style={{height: '100%'}}>
                          <h2>Miami, FL</h2>
                          <div className='d-flex'>
                          <a href='#'>Miami homes for sale</a>
                          </div>
                          </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
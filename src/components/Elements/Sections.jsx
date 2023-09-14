import React from 'react'

const data = [
    {id: 1, image: 'assets/images/m1.webp',title: 'MetaAgents', para: 'The first NFT avatars specifically for real estate agents, with holder benefits'},
    {id: 2, image: 'assets/images/m2.webp',title: 'NFT Marketplace', para: 'List and sell real-world properties online as Non-Fungible Tokens (NFTs)'},
    {id: 3, image: 'assets/images/m3.webp',title: 'Blog', para: 'Stay up to speed with Propy & the emergence of next-gen of Real-Estate technology'},
    {id: 4, image: 'assets/images/m4.webp',title: 'Resource Center', para: 'From step-by-step guides to e-books and educational videos for the modern real estate professional'},
    {id: 5, image: 'assets/images/m5.webp',title: 'Crypto Agent Certifications', para: 'Learn and validate cryptocurrency and blockchain understanding'},
    {id: 6, image: 'assets/images/m6.webp',title: 'Webinars by Propy', para: 'Learn about blockchain technology and real estate with experts in the industry'},
]

const Sections = () => {
  return (
    <>
        <div className="section">
            <div className="container">
            <h2 className="text-center" data-aos="fade-down">Featured by Propy</h2>
          <p className="text-center" data-aos="fade-down">
          Explore various product offerings to super power your real estate business
          </p>
          <div className="row my-4">
            {data.map((res) => {
                return(
                    <div className="col-md-6 mt-3" data-aos="flip-right">
                <div className="card_main">
                    <div className='d-flex card_left align-items-center'>
                        <img src={res.image} className='img-fluid' alt="" />
                        <div className='mx-3 card_right'>
                            <h3>{res.title}</h3>
                            <p>{res.para}</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
                )
            })}
            
          </div>
            </div>
        </div>
    </>
  )
}

export default Sections
import React from 'react'
import Cardimg from '../assets/images/webp/cardimg.webp'
const BlogsSection = () => {
    return (
        <section className='bg-black  position-relative -mt-2'   id='blog'>
            <div className="gradient-box position-absolute w-100 "></div>
            <div className="container max-w-1140">
                <div className="d-flex justify-content-center" data-aos="zoom-in">                    
                    <h2 className=' text-uppercase text-white ff-poppins fw-extra-bold fs-52 lh-62 mb-0  max-w-578 text-center'>explore our<span className="fw-normal   position-relative  z_1 bg-blogs-red bg-red">  <em>   blogs </em></span></h2>
                </div>
                <div className="row pb-lg-262 pb-sm-140 pb-60 pt-83">
                    <div className="col-lg-4 col-sm-6 col-12" data-aos="zoom-in">
                        <div className="mycar">
                            <div className=" position-relative">
                                <img src={Cardimg} alt="cardImg" className='w-100' />
                                <div className="red-box position-absolute cursor-pointer">
                                    <h5 className='mb-0 ff-dm-sans fw-normal fs-14 lh-21 text-white'>10-March-2024</h5>
                                </div>
                            </div>
                            <h5 className=' mb-0 ff-dm-sans fw-medium  lh-23 fs-18 text-white pt-15 mb-0  pb-27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</h5>
                            <button className='common-btn text-white ff-chivo  fs-16 lh-24 fw-black text-uppercase '>read more</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 pt-5 pt-sm-0" data-aos="zoom-in">
                        <div className="mycar">
                            <div className=" position-relative">
                                <img src={Cardimg} alt="cardImg" className='w-100' />
                                <div className="red-box position-absolute cursor-pointer">
                                    <h5 className='mb-0 ff-dm-sans fw-normal fs-14 lh-21 text-white'>10-March-2024</h5>
                                </div>
                            </div>
                            <h5 className=' mb-0 ff-dm-sans fw-medium  lh-23 fs-18 text-white pt-15 mb-0  pb-27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</h5>
                            <button className='common-btn text-white ff-chivo  fs-16 lh-24 fw-black text-uppercase '>read more</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 pt-5 pt-lg-0 mx-auto" data-aos="zoom-in">
                        <div className="mycar">
                            <div className=" position-relative">
                                <img src={Cardimg} alt="cardImg" className='w-100' />
                                <div className="red-box position-absolute cursor-pointer">
                                    <h5 className='mb-0 ff-dm-sans fw-normal fs-14 lh-21 text-white'>10-March-2024</h5>
                                </div>
                            </div>
                            <h5 className=' mb-0 ff-dm-sans fw-medium  lh-23 fs-18 text-white pt-15 mb-0  pb-27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</h5>
                            <button className='common-btn text-white ff-chivo  fs-16 lh-24 fw-black text-uppercase '>read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogsSection
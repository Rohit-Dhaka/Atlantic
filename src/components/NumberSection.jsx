import React from 'react'
import Ellipse852 from '../assets/images/svg/Ellipse852.svg'
import Icon1 from '../assets/images/webp/icon1.webp'
import Icon2 from '../assets/images/webp/icon2.webp'
import Icon3 from '../assets/images/webp/icon3.webp'
import Icon4 from '../assets/images/webp/icon4.webp'

const NumberSection = () => {
    return (
        <section className='bg-black  position-relative  box- img overflow-hidden'  id='about'>
            <div className=" position-absolute z-0 Ellipse852">
                <img src={Ellipse852} alt="ellipse" />
            </div>
            <div className="pt-lg-137 pt-sm-140 pt-60 z-1  position-relative">
                <div className="half-circle ">
                    <div className=" d-sm-none d-flex gap-3 icon-box py-3  ">
                        <div className="icon"><img src={Icon1} alt="icon" className='w-100' /></div>
                        <div className="icon"><img src={Icon2} alt="icon" className='w-100' /></div>
                        <div className="icon"><img src={Icon3} alt="icon" className='w-100' /></div>
                        <div className="icon"><img src={Icon1} alt="icon" className='w-100' /></div>
                        <div className="icon"><img src={Icon2} alt="icon" className='w-100' /></div>
                        <div className="icon"><img src={Icon3} alt="icon" className='w-100' /></div>
                        <div className="icon"><img src={Icon4} alt="icon" className='w-100' /></div>
                    </div>
                    <div className="container max-w-1140 position-relative  d-sm-block d-none">

                        <div className=" position-absolute icon1" data-aos="zoom-in">
                            <img src={Icon1} alt="icon" />
                        </div>
                        <div className=" position-absolute icon2" data-aos="zoom-in">
                            <img src={Icon1} alt="icon" />
                        </div>
                        <div className=" position-absolute icon3" data-aos="zoom-in">
                            <img src={Icon1} alt="icon" />
                        </div>
                        <div className=" position-absolute icon4" data-aos="zoom-in">
                            <img src={Icon2} alt="icon" />
                        </div>
                        <div className=" position-absolute icon5" data-aos="zoom-in">
                            <img src={Icon2} alt="icon" />
                        </div>
                        <div className=" position-absolute icon6" data-aos="zoom-in">
                            <img src={Icon3} alt="icon" />
                        </div>
                        <div className=" position-absolute icon7" data-aos="zoom-in">
                            <img src={Icon4} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" position-absolute red-ellipse  z-1 ">
            </div>

            <div className="box-img">
                <div className="container max-w-1140 -mt-sm-263 -mt-400">
                    <div className="d-flex justify-content-center z-1  position-relative" data-aos="zoom-in">
                        <h2 className=' text-uppercase text-white ff-poppins fw-extra-bold fs-52 lh-62 mb-0  max-w-578 text-center'>our <span className="fw-normal position-relative z_1 bg-number px-2"><em>numbers</em></span> say about us</h2>
                    </div>
                    <div className="row pb-lg-288 pb-sm-140 pb-60 pt-75">
                        <div className="col-lg-3 col-sm-6 col-12  z_1" data-aos="zoom-in">
                            <div className=" d-flex flex-column align-items-center ">
                                <h5 className='number ff-poppins fw-extra-bold fs-80 lh-96 text-white duration-300 mb-0'>20K+</h5>
                                <h6 className='mb-0 ff-dm-sans fw-medium  fs-16 lh-24 text-white '>Happy customers</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 pt-4 pt-sm-0 z_1" data-aos="zoom-in">
                            <div className=" d-flex flex-column align-items-center ">
                                <h5 className='number ff-poppins fw-extra-bold fs-80 lh-96 text-white duration-300 mb-0'>35%</h5>
                                <h6 className='mb-0 ff-dm-sans fw-medium  fs-16 lh-24 text-white '>Export Volume</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 pt-4 pt-lg-0 z_1" data-aos="zoom-in">
                            <div className=" d-flex flex-column align-items-center ">
                                <h5 className='number ff-poppins fw-extra-bold fs-80 lh-96 text-white duration-300 mb-0'>20%</h5>
                                <h6 className='mb-0 ff-dm-sans fw-medium  fs-16 lh-24 text-white '>Market Share</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 pt-4 pt-lg-0 z_1" data-aos="zoom-in">
                            <div className=" d-flex flex-column align-items-center ">
                                <h5 className='number ff-poppins fw-extra-bold fs-80 lh-96 text-white duration-300 mb-0'>65+</h5>
                                <h6 className='mb-0 ff-dm-sans fw-medium  fs-16 lh-24 text-white '>Country</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NumberSection
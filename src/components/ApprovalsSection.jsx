import React from 'react'
import BlueEllips from '../assets/images/svg/Ellipseblue.svg'
const ApprovalsSection = () => {
    return (
        <section className='bg-black  overflow-hidden'>
            <div className="container pb-78 max-w-1140">
                <div className="d-flex pt-sm-140 pt-60" data-aos="fade-right">
                    <h2 className=' text-uppercase text-white ff-poppins fw-extra-bold fs-52 lh-62 mb-0 max-w-745'>OEM <span className="fw-normal bg-red position-relative z_1 bg-blue-img">  <em> Approvals</em></span>   <span className="d-flex flex-nowrap"></span></h2>
                </div>
                <div className="row pt-53 position-relative  ">
                    <div className="BlueEllips position-absolute   " data-aos="fade-left">
                        <img src={BlueEllips} alt="ellipse" className='w-100' />
                    </div>
                    <div className="blue-img position-absolute d-lg-block d-none " data-aos="fade-left"></div>
                    <div className="left-white-img position-absolute  "></div>
                    <div className="col-lg-6 col-12 pt-sm-59 pt-4   z_1" data-aos="fade-right">
                        <h6 className=' ff-dm-sans fw-nomal  fs-24 lh-36  gray-200 pb-17 mb-0 max-w-lg-567'>At Atlantic Grease and Lubricants, we have<span className="fw-bold color-black"> secured approvals</span>  leading automobile manufacturers. Thus, we demonstrate our commitment to delivering the best possible outcomes to our customers.</h6>
                        <h6 className=' ff-dm-sans  fw-normal  fs-24 lh-36  gray-200 pb-45 mb-0  max-w-lg-567'>Recognising the<span className="fw-bold color-black">significance of quality</span> to our valued customers, we uphold the utmost standards of excellence in all our endeavors.</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ApprovalsSection
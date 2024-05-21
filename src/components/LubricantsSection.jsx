import React from 'react'
import Ellipse853 from '../assets/images/svg/Ellipsegold.svg'
import GoldenImg from '../assets/images/webp/GoldenImg.webp'


const LubricantsSection = () => {

  return (
    <section className='bg-black  overflow-hidden '  id='Testimonials' >
      <div className="container max-w-1160 pb-85  ">
        <div className="d-flex justify-content-lg-end justify-content-start pt-lg-168 pt-sm-140 pt-60" data-aos="fade-left">
          <h2 className=' text-uppercase text-white ff-poppins fw-extra-bold fs-52 lh-62 mb-0 max-w-745 '>Pioneers of <span className="fw-normal  position-relative z_1  bg-lubricants px-2">  <em> Lubricants</em></span>   <span className="d-flex flex-nowrap">& Grease Manufacturing</span></h2>
        </div>
        <div className="row justify-content-end position-relative pt-45 ">
          <div className="Ellipse853 position-absolute d-sm-block d-none ">
            <img src={Ellipse853} alt="ellipse" />
          </div>
          <div className="golden-img position-absolute d-lg-block d-none  " data-aos="fade-right">
            <img src={GoldenImg} alt="golden" className='w-100' />
          </div>
          <div className="bg-white-img position-absolute z-0 "></div>
          <div className="col-lg-6 col-12 pt-sm-68 pb-sm-68 py-4 z_1 " data-aos="fade-left">
            <h6 className=' ff-dm-sans  fw-normal  fs-24 lh-36  gray-200 pb-45 mb-0 '>Atlantic Grease & Lubricants is one of the leading manufacturers in the <span className="fw-bold  color-black">automotive industry</span> providing high-performance products certified by renowned European and American automobile industries.</h6>
            <button className='common-btn text-white ff-chivo  fs-16 lh-24 fw-black text-uppercase '>read our story</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LubricantsSection
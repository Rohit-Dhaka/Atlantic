import React from 'react'
import Logo from '../assets/images/svg/logo.svg'
import Search from '../assets/images/svg/Search.svg'
import Emoimg from '../assets/images/webp/EemImg.webp'
import Arrow from '../assets/images/svg/arrow.svg'
const HeroSection = () => {
    return (
        <header className='hero-background min-vh-100 d-flex flex-column position-relative  overflow-hidden '>
            <div className=" position-absolute emoimg d-md-block d-none">
                <img src={Emoimg} alt="img" />
            </div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary"  data-aos="fade-down">
                <div class="container-fluid">
                    <div className="pr-55"><img src={Logo} alt="logo" /></div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-28 ">
                            <li class="nav-item">
                                <a class="nav-link active " aria-current="page" href="#" className='text-white fw-normal fs-16 lh-24 ff-dm-sans underline position-relative'>About Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" className='text-white fw-normal fs-16 lh-24 ff-dm-sans underline position-relative pe-1'>
                                    Categories
                                </a>
                                <img src={Arrow} alt="" />
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true" className='text-white fw-normal fs-16 lh-24 ff-dm-sans underline position-relative'>Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true" className='text-white fw-normal fs-16 lh-24 ff-dm-sans underline position-relative'>Testimonials</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true" className='text-white fw-normal fs-16 lh-24 ff-dm-sans underline position-relative'>Blogs</a>
                            </li>
                        </ul>
                        <div className="input-box p-3 d-flex gap-12 me-3">
                            <img src={Search} alt="search" />
                            <input type="search" placeholder='Search' className=' ff-dm-sans fw-normal fs-17 lh-22 border-0 outline-none bg-transparent text-white' />
                        </div>
                        <button className='common-btn text-white ff-chivo  fs-16 lh-24 fw-black text-uppercase'>Get in touch</button>
                    </div>
                </div>
            </nav>
            <div className="container flex-grow-1 d-flex align-items-end max-w-1140" data-aos="fade-up">
                <div className="d-flex  align-items-end  w-100 justify-content-between pb-15   flex-lg-nowrap flex-wrap">
                    <h1 className=' ff-poppins fw-extra-bold text-white lh-72 fs-60 max-w-800 text-uppercase mb-0'>Optimising your Vehicle <span className="fw-normal font-italic"><em>Performance</em></span></h1>
                    <button className='common-btn text-white ff-chivo  fs-16 lh-24 fw-black text-uppercase  mt-lg-0 mt-3'>explore</button>
                </div>
            </div>
        </header>
    )
}
export default HeroSection
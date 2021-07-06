import React from  'react'
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image'




const MainSlider = (props) =>{

 SwiperCore.use([Autoplay])

  const params = {
      loop: true,
      observer: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: true,
    }

       return(
                <div>
                    <div className="animated-icon1 rotate-me"><img src="/img/icons/anim-icon-1.png" alt="..."/></div>
             	     <div className="animated-icon2 rotate-me d-none d-md-block"><img src="/img/icons/anim-icon-2.png" alt="..."/></div>
                    <div className="animated-icon3 rotate-me d-none d-md-block"><img src="/img/icons/anim-icon-3.png" alt="..."/></div>
                  <Swiper {...params}>  
                          
                           
                <div className="swiper-slide"style={{height:"570px"}}>
                                
                              <div className="container d-flex flex-column">
                               <div className="row align-items-center min-vh-100">
                                <div className="col-12">
                                    <div className="row align-items-center py-12 py-lg-10"style={{marginTop:'-120px'}}>
                                        <div className="col-lg-6 mt-1-6 mt-lg-0 order-2 order-lg-1 position-relative">
                                            <h6 className="text-primary">You are in secure hands</h6>
                                            <h1 className="display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 font-weight-700 text-shadow">We provide <strong className="text-primary font-weight-700">Covid-19</strong> services</h1>
                                            <p className="mb-1-6 mb-lg-2-2 w-95 w-md-75 display-29 display-md-28">COVID-19 is a new illness which can have an effect on your lungs to airways.</p>
                                            <ul className="list-style5 mb-1-6 mb-lg-5 pl-0">
                                                <li>Quarantine Center</li>
                                                <li>Covid Testing Lab</li>
                                                <li>24X7 Ambulance</li>
                                            </ul>
                                            <a href="#!" className="butn white-hover">Contact Now</a>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src="/img/banner/corona-banner.svg" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

               </div>

                             
                             
                <div className="swiper-slide"style={{height:"570px"}}>
                                
                              <div className="container d-flex flex-column">
                               <div className="row align-items-center min-vh-100">
                                <div className="col-12">
                                    <div className="row align-items-center py-12 py-lg-10"style={{marginTop:'-120px'}}>
                                        <div className="col-lg-6 mt-1-6 mt-lg-0 order-2 order-lg-1 position-relative">
                                            <h6 className="text-primary">You are in secure hands</h6>
                                            <h1 className="display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 font-weight-700 text-shadow">We provide <strong className="text-primary font-weight-700">Covid-19</strong> services</h1>
                                            <p className="mb-1-6 mb-lg-2-2 w-95 w-md-75 display-29 display-md-28">COVID-19 is a new illness which can have an effect on your lungs to airways.</p>
                                            <ul className="list-style5 mb-1-6 mb-lg-5 pl-0">
                                                <li>Quarantine Center</li>
                                                <li>Covid Testing Lab</li>
                                                <li>24X7 Ambulance</li>
                                            </ul>
                                            <a href="#!" className="butn white-hover">Contact Now</a>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src="/img/banner/corona-banner.svg" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                     </div>





                      <div className="swiper-slide"style={{height:"570px"}}>
                                
                              <div className="container d-flex flex-column">
                               <div className="row align-items-center min-vh-100">
                                <div className="col-12">
                                    <div className="row align-items-center py-12 py-lg-10"style={{marginTop:'-120px'}}>
                                        <div className="col-lg-6 mt-1-6 mt-lg-0 order-2 order-lg-1 position-relative">
                                            <h6 className="text-primary">You are in secure hands</h6>
                                            <h1 className="display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 font-weight-700 text-shadow">We provide <strong className="text-primary font-weight-700">Covid-19</strong> services</h1>
                                            <p className="mb-1-6 mb-lg-2-2 w-95 w-md-75 display-29 display-md-28">COVID-19 is a new illness which can have an effect on your lungs to airways.</p>
                                            <ul className="list-style5 mb-1-6 mb-lg-5 pl-0">
                                                <li>Quarantine Center</li>
                                                <li>Covid Testing Lab</li>
                                                <li>24X7 Ambulance</li>
                                            </ul>
                                            <a href="#!" className="butn white-hover">Contact Now</a>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src="/img/banner/corona-banner.svg" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                      </div>
                  
                         </Swiper>
                      
                 </div>

       	    )



       }



export default MainSlider
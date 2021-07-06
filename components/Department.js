import React from 'react'
import {isMobile} from 'react-device-detect';
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.css'
const Department =()=>{

 SwiperCore.use([Autoplay])
  if(isMobile)
   { 

    var params = {
      observer: true,
      centeredSlide:true,
      slidesPerView:'auto',
      loop: true,
      mousewheel: true,
      spaceBetween:2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: true,
    }

  }
  else
  { 
    var params = {
      observer: true,
      centeredSlide:true,
      slidesPerView:4,
      loop: true,
      mousewheel: true,
      spaceBetween:2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: true,
    }
  }
    return(
        <>
         <section class="pb-lg-20">
            <div class="container">
                <div class="text-center mb-5 w-95 w-md-90 w-lg-70 w-xl-60 mx-auto">
                    <span class="text-uppercase letter-spacing-2 font-weight-700 small mb-3 d-block">our department</span>
                    <h2 class="mb-0 font-weight-700 h1 text-secondary">We offer different departments to diagnose <span class="text-primary">your diseases</span></h2>
                </div>
                <div class="row">
                    
                 <Swiper {...params} >

                 <div className="swiper-slide">
                   <div className="item">
                        <div className="text-center bg-white border border-width-5 p-4">
                            <span className="mb-3 d-inline-block">
                            <img src="/img/icons/icon-urology.png" alt="..."/></span>
                            <h3 className="h5 mb-3">Urology</h3>
                            <div className="separator-line-horrizontal-medium-light bg-primary mx-auto mb-3"></div>
                            <p>We provide best care.It is safe &amp; compassionate care at its best for everyone.</p>
                            <a href="urology.html" className="butn transparent small"><span className="alt-font">Read more</span></a>
                        </div>
                    </div>
                 </div>

                  <div className="swiper-slide">
                   <div className="item">
                        <div className="text-center bg-white border border-width-5 p-4">
                            <span className="mb-3 d-inline-block">
                            <img src="/img/icons/icon-urology.png" alt="..."/></span>
                            <h3 className="h5 mb-3">Urology</h3>
                            <div className="separator-line-horrizontal-medium-light bg-primary mx-auto mb-3"></div>
                            <p>We provide best care.It is safe &amp; compassionate care at its best for everyone.</p>
                            <a href="urology.html" className="butn transparent small"><span className="alt-font">Read more</span></a>
                        </div>
                    </div>
                 </div>


                   <div className="swiper-slide">
                    <div className="item">
                        <div className="text-center bg-white border border-width-5 p-4">
                            <span className="mb-3 d-inline-block">
                            <img src="/img/icons/icon-gastrology.png" alt="..."/></span>
                            <h3 className="h5 mb-3">Gastrology</h3>
                            <div className="separator-line-horrizontal-medium-light bg-primary mx-auto mb-3"></div>
                            <p>We provide best care.It is safe &amp; compassionate care at its best for everyone.</p>
                            <a href="gastrology.html" className="butn transparent small"><span className="alt-font">Read more</span></a>
                        </div>
                    </div>
                 </div>


                     

                  <div className="swiper-slide">
                    <div className="item">
                        <div className="text-center bg-white border border-width-5 p-4">
                            <span className="mb-3 d-inline-block">
                            <img src="/img/icons/icon-neurology.png" alt="..."/></span>
                            <h3 className="h5 mb-3">Neurology</h3>
                            <div className="separator-line-horrizontal-medium-light bg-primary mx-auto mb-3"></div>
                            <p>We provide best care.It is safe &amp; compassionate care at its best for everyone.</p>
                            <a href="neurology.html" className="butn transparent small">Read more</a>
                        </div>
                    </div>
                 </div>
    
                   
                   <div className="swiper-slide">
                     <div className="item">
                        <div className="text-center bg-white border border-width-5 p-4">
                            <span className="mb-3 d-inline-block">
                            <img src="/img/icons/icon-gynecology.png" alt="..."/></span>
                            <h3 className="h5 mb-3">Gynecology</h3>
                            <div className="separator-line-horrizontal-medium-light bg-primary mx-auto mb-3"></div>
                            <p>We provide best care.It is safe &amp; compassionate care at its best for everyone.</p>
                            <a href="gynecology.html" className="butn transparent small">Read more</a>
                        </div>
                    </div>
                 </div>



                 </Swiper>
                </div>
            </div>
        </section>
        </>
    )
}

export default Department;
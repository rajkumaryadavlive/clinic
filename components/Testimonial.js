import React from 'react'
const Testimonial=()=>{

    return (
        <>
        <section className="pt-0">
            <div className="container">
                <div className="text-center mb-5 w-95 w-md-90 w-lg-70 w-xl-60 mx-auto">
                    <span className="text-uppercase letter-spacing-2 font-weight-700 small mb-3 d-block">testimonial</span>
                    <h2 className="mb-0 font-weight-700 h1 text-secondary">What our patients say about our medical <span className="text-primary">treatments</span></h2>
                </div>
                <div className="testimonial-style1 owl-theme owl-carousel" data-slider-id="1">
                    <div className="text-center">
                        <div className="testmonial-text">
                            <i className="ti-quote-left text-primary display-10"></i>
                            <p className="mb-0 mt-3 mx-auto">“It's exactly what I've been looking for. Medical health care service has got everything I need. I like Medical health care service more and more each day because it makes my life a lot easier.”</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="testmonial-text">
                            <i className="ti-quote-left text-primary display-10"></i>
                            <p className="mb-0 mt-3 mx-auto">“The service was excellent. I will let my mum know about this, she could really make use of Medical service! I STRONGLY recommend Medical service to EVERYONE. Thank you for making it painless.”</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="testmonial-text">
                            <i className="ti-quote-left text-primary display-10"></i>
                            <p className="mb-0 mt-3 mx-auto">“We're loving it. Wow what great service, I love it! Medical service is worth much more than I paid. Medical service is the real deal! Medical service is worth much more than I paid.”</p>
                        </div>
                    </div>
                </div>
                <div className="owl-thumbs text-center mt-2-9" data-slider-id="1">
                    <button className="owl-thumb-item bg-transparent">
                        <img src="public/img/avatar/avatar-03.jpg" className="rounded-circle" alt="..."/>
                    </button>
                    <button className="owl-thumb-item bg-transparent">
                        <img src="public/img/avatar/avatar-04.jpg" className="rounded-circle" alt="..."/>
                    </button>
                    <button className="owl-thumb-item bg-transparent">
                        <img src="public/img/avatar/avatar-05.jpg" className="rounded-circle" alt="..."/>
                    </button>
                </div>
            </div>
        </section>
        </>
    )

}

export default Testimonial;
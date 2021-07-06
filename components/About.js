import React from 'react'

const About=()=>{
    return (
        <>
          <section>
            <div className="container">
                <div className="row align-items-xl-center about-style1">
                    <div className="col-lg-6 mb-2-9 mb-lg-0">
                        <div className="about-image pr-lg-3 pr-xl-5">
                            <div className="box">
                                <p><span className="d-block countup">18</span>Years Experience</p>
                            </div>
                            <div className="text-center text-lg-left">
                                <img src="/img/content/about-05.jpg" className="border-radius-10" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pl-lg-5">
                            <span className="text-uppercase letter-spacing-2 font-weight-700 small">Welcome to iCall Health</span>
                            <h2 className="mt-3 mb-4 font-weight-700 h1 text-secondary">We promise ourselves to clinic <span className="text-primary">excellence.</span></h2>
                            <div className="border-bottom mb-2-9 pb-2-9">
                                <p className="w-95 mb-1-9">Our factor is to offer you and your own circle of relatives with the very best nice of care accessible. Us that you have ideal admittance to your PCP, the wellbeing group and other network suppliers just as the most exceptional wellbeing data. We will probably assist you with accomplishing ideal wellbeing and prosperity.</p>
                                <h6 className="font-weight-500 font-italic mb-0">- Jamie Hurtado</h6>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-12 col-xl-4 mb-3 mb-xl-0">
                                    <div className="media align-items-top">
                                        <i className="far fa-calendar display-24 text-primary"></i>
                                        <div className="media-body ml-3">
                                            <h5 className="mb-0 display-29">Online Appointment!</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-12 col-xl-4 mb-3 mb-xl-0">
                                    <div className="media align-items-top">
                                        <i className="fas fa-map-marker-alt display-24 text-primary"></i>
                                        <div className="media-body ml-3">
                                            <h5 className="mb-0 display-29">Available at Your Location</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-12 col-xl-4">
                                    <div className="media align-items-top">
                                        <i className="fas fa-clock display-24 text-primary"></i>
                                        <div className="media-body ml-3">
                                            <h5 className="mb-0 display-29">Work Improvements</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default About
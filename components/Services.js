import React from 'react'
const Services=()=>{
    return (
        <>
           <section className="bg-light">
            <div className="container">
                <div className="text-center mb-5 w-95 w-md-90 w-lg-70 w-xl-60 mx-auto">
                    <span className="text-uppercase letter-spacing-2 font-weight-700 small mb-3 d-block">our services</span>
                    <h2 className="mb-0 font-weight-700 h1 text-secondary">We offer best types of services for your <span className="text-primary">health care</span></h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                        <div className="card border-0 border-radius-10 card-style3">
                            <div className="card-img">
                                <img src="/img/services/service-09.jpg" alt="..."/>
                                <span className="icon"><i className="fas fa-tooth"></i></span>
                            </div>
                            <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                                <h3 className="h5 mb-3"><a href="#!" className="text-dark">Dental Service</a></h3>
                                <p>We believe in providing best treatment and skilled dental services</p>
                                <a href="#!" className="text-primary">read more<i className="fas fa-arrow-right small align-middle ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                        <div className="card border-0 border-radius-10 card-style3">
                            <div className="card-img">
                                <img src="/img/services/service-10.jpg" alt="..."/>
                                <span className="icon"><i className="fas fa-x-ray"></i></span>
                            </div>
                            <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                                <h3 className="h5 mb-3"><a href="#!" className="text-dark">Family Care</a></h3>
                                <p>We believe in providing best treatment and skilled family care services</p>
                                <a href="#!" className="text-primary">read more<i className="fas fa-arrow-right small align-middle ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 border-radius-10 card-style3">
                            <div className="card-img">
                                <img src="/img/services/service-11.jpg" alt="..."/>
                                <span className="icon"><i className="fas fa-brain"></i></span>
                            </div>
                            <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                                <h3 className="h5 mb-3"><a href="#!" className="text-dark">Neurology Service</a></h3>
                                <p>We believe in providing best treatment and skilled neurology services</p>
                                <a href="#!" className="text-primary">read more<i className="fas fa-arrow-right small align-middle ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 text-center mt-5">
                        <a href="services-2.html" className="butn">view more services</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services;
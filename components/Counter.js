import React from 'react'
const Counter =()=>
{
    return(
        <>
           <section className="pt-0 overflow-visible bg-transparent mt-lg-4 mt-xl-0">
            <div className="container">
                <div className="bg-white p-1-9 p-lg-5 counter-style1">
                    <div className="row">
                        <div className="col-6 col-lg-3 mb-1-9 mb-lg-0">
                            <div className="text-center">
                                <img src="/img/icons/icon-opration.png" className="mb-3" alt="..."/>
                                <p className="mb-3 font-weight-600">Happy Patients</p>
                                <h3 className="countup mb-0 font-weight-600 h2">563</h3>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3 mb-1-9 mb-lg-0">
                            <div className="text-center">
                                <img src="public/img/icons/icon-checkup.png" className="mb-3" alt="..."/>
                                <p className="mb-3 font-weight-600">Expert Doctors</p>
                                <h3 className="countup mb-0 font-weight-600 h2">120</h3>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="text-center">
                                <img src="public/img/icons/icon-doctor.png" className="mb-3" alt="..."/>
                                <p className="mb-3 font-weight-600">Departments</p>
                                <h3 className="countup mb-0 font-weight-600 h2">302</h3>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="text-center">
                                <img src="public/img/icons/icon-ambulance.png" className="mb-3" alt="..."/>
                                <p className="mb-3 font-weight-600">Departments</p>
                                <h3 className="countup mb-0 font-weight-600 h2">784</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Counter;
import React from 'react'

const AppointmentComponent =()=>{
    return (
        <>
         <section className="bg-primary pt-lg-0 overflow-visible">
            <div className="container">
                <div className="row get-appointment align-items-center">
                    <div className="col-lg-6">
                        <div className="py-3">
                            <span className="text-uppercase letter-spacing-2 text-white font-weight-700 small">need a doctor for checkup?</span>
                            <h2 className="mt-3 mb-4 font-weight-700 text-white h1">Make an appointment and you’re done!</h2>
                            <p className="lead text-white mb-1">Get your quote or call:</p>
                            <h4 className="text-white mb-4">+1 234 567 890</h4>
                            <a href="appointment" className="butn white">get appointment</a>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-lg-block">
                        <div className="appiontment-img">
                            <img src="public/img/content/doctor-note.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AppointmentComponent;
import React from 'react'

const HeaderContainer=()=>{
    return (
        <>
          <div className="container">
                <div className="navbar-header-custom row justify-content-between align-items-center">
                    <div className="col-md-4 d-none d-lg-block">
                        <div className="media">
                            <i className="far fa-clock header-icon2 text-primary"></i>
                            <div className="media-body ml-3">
                                <span className="d-block display-30">TIME: 09:00 - 17:00</span>
                                <span className="font-weight-600">Sat - Sun: CLOSED</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-lg-4 text-left text-lg-center">
                    
                        <a href="index.html" className="navbar-brand xs-width-145px d-inline-block no-transition mr-lg-0">
                            <img id="logo" src="public/img/logo/logo.png" alt="logo"/></a>
                        
                    </div>

                    <div className="col-md-4 d-none d-lg-block">
                        <div className="media">
                            <div className="media-body text-end mr-3">
                                <span className="d-block display-30">CALL US</span>
                                <span className="font-weight-600">+91 9098650975</span>
                            </div>
                            <i className="fas fa-mobile-alt header-icon2 text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderContainer;
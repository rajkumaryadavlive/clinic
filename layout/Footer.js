const Footer=()=>{
	return(<>
           <footer>
            <div className="footer-style2 bg-light py-6 py-sm-8 py-xl-10">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                            <img src="public/img/logo/logo.png" className="w-50 mb-3" alt="..."/>
                            <p className="w-95 w-xl-80 mb-1-6 display-30">Our factor is to offer you and your own hover of family members with the absolute best pleasant of care open.</p>
                            <a href="#!" className="d-block"><i className="ti-mobile display-24 text-primary align-middle"></i> +91 7999169022</a>
                            <a href="appointment" className="butn mt-4">Request an Appoinment</a>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                            <div className="row">
                                <div className="col-6">
                                    <h3 className="h6 mb-4">Departments</h3>
                                    <ul className="footer-list mb-0">
                                        <li><a href="cardiology.html">Cardiology</a></li>
                                        <li><a href="gastrology.html">Gastrology</a></li>
                                        <li><a href="gynecology.html">Gynecology</a></li>
                                        <li><a href="laboratory.html">Laboratory</a></li>
                                        <li><a href="neurology.html">Neurology</a></li>
                                        <li><a href="orthopedics.html">Orthopedics</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <div className="pl-lg-3">
                                        <h3 className="h6 mb-4">Quick Links</h3>
                                        <ul className="footer-list mb-0">
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="our-team.html">Our team</a></li>
                                            <li><a href="facilities.html">Facilities</a></li>
                                            <li><a href="portfolio-grid-3-column.html">Portfolio</a></li>
                                            <li><a href="contact.html">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="bg-white p-1-9 border-radius-10">
                                <h3 className="h6 mb-4">Contacts</h3>
                                <div className="row g-0 justify-content-between mb-3 small">
                                    <div className="col-4"><strong>Address:</strong></div>
                                    <div className="col-8 text-right">Damoh ,Madhya Pradesh -470772.</div>
                                </div>
                                <div className="row g-0 justify-content-between mb-3 small">
                                    <div className="col-4"><strong>Phone:</strong></div>
                                    <div className="col-8 text-right">+91 9098650975</div>
                                </div>
                                <div className="row g-0 justify-content-between mb-3 small">
                                    <div className="col-4"><strong>Opening Hours:</strong></div>
                                    <div className="col-8 text-right">Mo-Fr: 07:00-23:00</div>
                                </div>
                                <ul className="footer-social-icon list-unstyled mb-4">
                                    <li>
                                        <a href="#!"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                                <div>
                                    <a href="contact.html" className="butn transparent small">Directions</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-white py-1-9">
                <div className="container">
                    <div className="text-center">
                        <p className="font-weight-600 mb-0">&copy; 2020 icall is Powered by <a href="https://www.icallasia.com/" target="_blank">iCall Technology</a></p>
                    </div>
                </div>
            </div>
        </footer>
		   </>
		   )
}
export default Footer;
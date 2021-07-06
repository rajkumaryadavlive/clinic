
const Appointment=()=>{
    return (
        <>
          <section>
            <div className="container">

                <div className="mb-5 text-center">
                    <h2 className="text-primary mb-3">Book Appointment</h2>
                    <p className="mx-auto mb-0 w-95 w-md-80 w-lg-60 w-xl-50">Our management and help workforce all have super humans competencies and skilled to help you with all clinical enquiries.</p>
                </div>

                <div className="row box-shadow g-0 rounded">
                    <div className="col-lg-6 bg-img cover-background d-none d-lg-block rounded-left" data-overlay-dark="0" data-background="public/img/bg/contact-bg.jpg"></div>
                    <div className="col-lg-6">
                        <div className="p-4 p-sm-5">
                            <h3 className="mb-1-6 text-primary">Call us or fill the form</h3>

                            <form className="quform" action="quform/book-appointment.php" method="post" enctype="multipart/form-data" onclick="">
                                <div className="quform-elements">

                                    <div className="row">

                
                                        <div className="col-sm-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input className="form-control" id="name" type="text" name="name" placeholder="First Name" />
                                                </div>
                                            </div>

                                        </div>
                        

                
                                        <div className="col-sm-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input className="form-control" id="last_name" type="text" name="last_name" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                

                                    
                                        <div className="col-sm-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone number" />
                                                </div>
                                            </div>

                                        </div>
                                

                                    
                                        <div className="col-sm-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input className="form-control" id="email" type="text" name="email" placeholder="Your email" />
                                                </div>
                                            </div>
                                        </div>
                                        

                                    
                                        <div className="col-sm-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input className="form-control date form_date" data-date-format="dd MM yyyy" data-link-format="yyyy-mm-dd" size="16" type="text" id="date" name="date" value="" placeholder="Appoinment date"/>
                                                </div>
                                            </div>
                                        </div>
                                

                        
                                        <div className="col-sm-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input className="form-control date form_time" data-date="" data-date-format="hh:ii" data-link-format="hh:ii" size="16" type="text" id="time" name="time" value="" placeholder="Appoinment time"/>
                                                </div>
                                            </div>
                                        </div>
                                

                    
                                        <div className="col-sm-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <select className="form-control form-select" id="department" name="department">
                                                        <option value="">-- Select Department --</option>
                                                        <option value="Cardiology">Cardiology</option>
                                                        <option value="Gynecology">Gynecology</option>
                                                        <option value="Neurology">Neurology</option>
                                                        <option value="Orthopedics">Orthopedics</option>
                                                        <option value="Pulmonology">Pulmonology</option>
                                                        <option value="Gastrology">Gastrology</option>
                                                        <option value="Urology">Urology</option>
                                                        <option value="Laboratory">Laboratory</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    

                            
                                        <div className="col-sm-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <select className="form-control form-select" id="doctors" name="doctors">
                                                        <option value="">-- Choose Your Doctor --</option>
                                                        <option value="Jama Karle">Jama Karle</option>
                                                        <option value="Keir Prestonly">Keir Prestonly</option>
                                                        <option value="Finley Walkeror">Finley Walkeror</option>
                                                        <option value="Dont know">Dont know</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                        

                    
                                        <div className="col-md-12">
                                            <div className="quform-element form-group">

                                        
                                                <div className="quform-input">

                                                    <div className="custom-file">
                                                        <input className="custom-file-input" type="file" id="files" name="files" />
                                                        <label className="custom-file-label" data-browse="Browse">Choose file</label>
                                                    </div>

                                                    <p className="quform-description">All files allowed. Maximum size 10MB.</p>

                                                </div>
                        

                                            </div>

                                        </div>
                                       
                                        <div className="col-md-12">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <textarea className="form-control" id="message" name="message" rows="3" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                       

                            
                                        <div className="col-md-12">
                                            <div className="quform-element">
                                                <div className="form-group">
                                                    <div className="quform-input">
                                                        <input className="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="quform-captcha">
                                                        <div className="quform-captcha-inner">
                                                            <img src="quform/images/captcha/courier-new-light.png" alt="..."/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    

                                
                                        <div className="col-md-12">
                                            <div className="quform-submit-inner text-center">
                                                <button className="butn w-100" type="submit"><span>Submit Now</span></button>
                                            </div>
                                            <div className="quform-loading-wrap"><span className="quform-loading"></span></div>
                                        </div>
                                        

                                    </div>

                                </div>
                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </section>
        </>

    )
}
Appointment.layout=page=> <Layout children={page} />
export default Appointment;
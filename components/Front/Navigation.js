import React ,{useState}from 'react'
const Navigation =({open})=>{
   
   return (
    <>
          
    <div className="attr-nav ml-auto position-absolute end-0">
                          <ul>
                              <li className="dropdown">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                      <i className="fas fa-shopping-cart"></i>
                                      <span className="badge bg-primary">3</span>
                                  </a>
                                  <ul className="dropdown-menu cart-list">
                                      <li>
                                          <a href="#!" className="photo"><img src="img/shop/cart-thumb01.jpg" className="cart-thumb" alt="..."/></a>
                                          <h6><a href="#!">Thermometers </a></h6>
                                          <p>2x - <span className="price">$61.00</span></p>
                                      </li>
                                      <li>
                                          <a href="#!" className="photo"><img src="img/shop/cart-thumb02.jpg" className="cart-thumb" alt="..."/></a>
                                          <h6><a href="#!">Weight Loss Measuring</a></h6>
                                          <p>1x - <span className="price">$115.00</span></p>
                                      </li>
                                      <li>
                                          <a href="#!" className="photo"><img src="img/shop/cart-thumb03.jpg" className="cart-thumb" alt="..."/></a>
                                          <h6><a href="#!">Hand Gloves</a></h6>
                                          <p>2x - <span className="price">$24.00</span></p>
                                      </li>
                                      <li className="total bg-primary">
                                          <span className="pull-left"><strong>Total</strong>: $200.00</span>
                                          <a href="#!" className="butn small btn-cart white"><span>View Cart</span></a>
                                      </li>
                                  </ul>
                              </li>
                              <li className="search ml-2 ml-sm-3 ml-lg-0"><a href="#!"><i className="fas fa-search"></i></a></li>
                              <li className="ml-2">
                                  <a href="javascript::void()"onClick={open} className="butn appointment">
                                      <i className="far fa-calendar-plus mr-1 align-middle display-28"></i> <span className="alt-font align-middle d-none d-lg-inline-block">Book Appoinment</span>
                                  </a>
                              </li>
                          </ul>
      </div>
  </>    
    );
}

export default Navigation;
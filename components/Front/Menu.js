import React from 'react'
import Link from 'next/link'

const Menu =()=>{
    return (
        <>
              <ul className="navbar-nav" id="nav">
                                <li><Link  href="/"><a>Home</a></Link>
                                </li>
                                <li><Link href="/about"><a>About Us</a></Link>
                                </li>
                                <li><Link href="/department">
                                 <a >Departments</a>
                                 </Link>
                                    <ul>
                                        <li><a href="department">Cardiology</a></li>
                                        <li><a href="department">Gynecology</a></li>
                                        <li><a href="department">Neurology</a></li>
                                        <li><a href="department">Orthopedics</a></li>
                                        <li><a href="department">Pulmonology</a></li>
                                        <li><a href="department">Gastrology</a></li>
                                        <li><a href="department">Urology</a></li>
                                        <li><a href="department">Laboratory</a></li>
                                    </ul>
                                </li>
                                <li><Link href="doctors">
                                <a>Doctors</a>
                                </Link>
                                </li>
                                <li><a href="services">Services</a>
                                   {/*} <ul>
                                        <li><a href="blog-minimal-1.html">Blog Minimal 01</a></li>
                                        <li><a href="blog-minimal-2.html">Blog Minimal 02</a></li>
                                        <li><a href="blog-grid.html">Blog Grid 01</a></li>
                                        <li><a href="blog-grid-2.html">Blog Grid 02</a></li>
                                        <li><a href="blog-grid-3.html">Blog Grid 03</a></li>
                                        <li><a href="blog-grid-4.html">Blog Grid 04</a></li>
                                        <li><a href="blog-post.html">Blog Single Post</a></li>
                                 */}
                                </li>
                                <li><a href="#!">Shop</a>
                                   {/*} <ul>
                                        <li><a href="shop-product-grid.html">Shop Product Grid</a></li>
                                        <li><a href="shop-product-detail.html">Shop Product Detail</a></li>
                                        <li><a href="shop-cart.html">Shop Cart</a></li>
                                        <li><a href="shop-checkout.html">Shop Checkout</a></li>
                                    </ul>
                                */}
                                </li>
                                <li><a href="#!">More</a>
                                   {/* <ul className="row megamenu">
                                        <li className="col-lg-3 col-sm-12">
                                            <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-600 display-30">Elements 01</span>
                                            <ul>
                                                <li><a href="accordions.html"><i className="fas fa-sliders-h mr-2"></i>Accordions</a></li>
                                                <li><a href="alerts.html"><i className="far fa-bell mr-2"></i>Alerts</a></li>
                                                <li><a href="blockquote.html"><i className="fas fa-vector-square mr-2"></i>Blockquote</a></li>
                                                <li><a href="buttons.html"><i className="fas fa-link mr-2"></i>Buttons</a></li>
                                                <li><a href="call-to-action.html"><i className="far fa-square mr-2"></i>Call to Action</a></li>
                                                <li><a href="carousel-slider.html"><i className="far fa-images mr-2"></i>Carousel Slider</a></li>
                                            </ul>
                                        </li>
                                        <li className="col-lg-3 col-sm-12">
                                            <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-600 display-30">Elements 02</span>
                                            <ul>
                                                <li><a href="count-down.html"><i className="far fa-flag mr-2"></i>Count Down</a></li>
                                                <li><a href="counters.html"><i className="fas fa-compress mr-2"></i>Counters</a></li>
                                                <li><a href="dropcaps.html"><i className="far fa-closed-captioning mr-2"></i>Dropcaps</a></li>
                                                <li><a href="forms.html"><i className="fab fa-wpforms mr-2"></i>Forms</a></li>
                                                <li><a href="font-icons.html"><i className="far fa-check-square mr-2"></i>Font Icons</a></li>
                                                <li><a href="google-map.html"><i className="fas fa-map-marker-alt mr-2"></i>Google Map</a></li>
                                            </ul>
                                        </li>
                                        <li className="col-lg-3 col-sm-12">
                                            <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-600 display-30">Elements 03</span>
                                            <ul>
                                                <li><a href="grid-system.html"><i className="fas fa-th mr-2"></i>Grid System</a></li>
                                                <li><a href="highlights.html"><i className="fas fa-highlighter mr-2"></i>Highlights</a></li>
                                                <li><a href="icon-with-text.html"><i className="fab fa-fonticons-fi mr-2"></i>Icon With Text</a></li>
                                                <li><a href="list-styles.html"><i className="fas fa-list-ul mr-2"></i>List Styles</a></li>
                                                <li><a href="media-object.html"><i className="fas fa-photo-video mr-2"></i>Media Object</a></li>
                                                <li><a href="modal.html"><i className="fas fa-expand mr-2"></i>Modal</a></li>
                                            </ul>
                                        </li>
                                        <li className="col-lg-3 col-sm-12">
                                            <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-600 display-30">Elements 04</span>
                                            <ul>
                                                <li><a href="pagination.html"><i className="far fa-caret-square-right mr-2"></i>Pagination</a></li>
                                                <li><a href="progress-bars.html"><i className="fas fa-tasks mr-2"></i>Progress Bars</a></li>
                                                <li><a href="tables.html"><i className="fas fa-table mr-2"></i>Tables</a></li>
                                                <li><a href="tabs.html"><i className="fas fa-sliders-h mr-2"></i>Tabs</a></li>
                                                <li><a href="typography.html"><i className="fas fa-text-height mr-2"></i>Typography</a></li>
                                                <li><a href="videos.html"><i className="fas fa-video mr-2"></i>Videos</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                            */}
                                    </li>
                            </ul>
        </>
    );
}

export default Menu;
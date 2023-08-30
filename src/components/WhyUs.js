import React from 'react';
import './why.css'
const WhyUs = () => {
    return (
        <section id="why-us" className="why-us section-bg">
            <div className="container-fluid" >
                <div class="section-title text-center position-relative mb-5 mx-auto" style={{ maxWidth: 600 + 'px' }}>
                    <h1 class="mb-0 text-uppercase text-primary fw-bold">Pourquoi Nous?</h1>
                </div>

                <div className="row">

                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                        <div className="content">
                            <h3>Une Solution  <strong>Millimetrer</strong> a votre buisness.</h3>
                            <div className='service'>
                                <div class="service-icon text-center">
                                    <i class="fa fa-laptop text-white"> </i>

                                </div>
                                <div className="link-animated d-flex flex-column justify-content-start">
                                    <a className="text-light mb-2" href="#"><i
                                        className="bi bi-arrow-right text-primary me-2"></i>Developpement web/Mobile</a>
                                    <a className="text-light mb-2" href="#"><i
                                        className="bi bi-arrow-right text-primary me-2"></i>Developpement API</a>
                                    <a className="text-light mb-2" href="#"><i
                                        className="bi bi-arrow-right text-primary me-2"></i>SEO Optimized</a>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img img-why" data-aos="zoom-in" data-aos-delay="150">

                    </div>
                </div>

            </div>
        </section >

    );
};

export default WhyUs;
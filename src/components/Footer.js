import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='container-fluid bg-dark-footer text-light mt-5 '>
                <div className='container'>
                    <div className='row gx-5'>
                        <div className='col-lg-4 col-md-6 footer-about'>

                            <div className='d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4'>
                                <Link to={'/'} className='navbar-brand'>
                                    <h1 class="m-0 text-white">Epsylon</h1>
                                </Link>
                                <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos
                                    sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet
                                    et kasd eos duo.</p>

                                <button className="btn-footer">Sign Up</button>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-6 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Nous contacter</h3>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-primary me-2"></i>
                                        <p className="mb-0">Ambohijatovo, Antananarivo, Madagascar</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-primary me-2"></i>
                                        <p className="mb-0">info@example.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-primary me-2"></i>
                                        <p className="mb-0">+012 345 67890</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-primary btn-square me-2" href="#"><i
                                            className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="#"><i
                                            className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="#"><i
                                            className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square" href="#"><i
                                            className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5 footer-service">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Nos Services</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <a className="text-light mb-2" href="#"><i
                                            className="bi bi-arrow-right text-primary me-2"></i>Developpement web/Mobile</a>
                                        <a className="text-light mb-2" href="#"><i
                                            className="bi bi-arrow-right text-primary me-2"></i>SEO Optimized</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
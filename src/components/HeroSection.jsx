import React from 'react';
import './hero.css'
import Image from './hero-img.png';


const HeroSection = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                            <h1>Better Solutions For Your Business</h1>
                            <h2>Creative & Innovative Digital Solution</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">

                            <img src={Image} className="img-fluid animated" alt="image test" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default HeroSection;
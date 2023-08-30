import React from 'react';
import './navbar.css';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 sticky-top shadow-sm">
                <a className="navbar-brand p-0">
                    <h1 className="m-0">Epsylon</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="/" className="nav-item nav-link active">Home</a>

                        <a href="/About-us" className="nav-item nav-link">About</a>
                        <a href="#" className="nav-item nav-link">Services</a>
                        <a href="#" className="nav-items nav-link">Pages</a>
                        <a href="#" class="nav-item nav-link">Contact</a>
                    </div>
                    <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal"
                        data-bs-target="#searchModal"><i class="fa fa-search"></i></button>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
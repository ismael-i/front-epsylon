import React from 'react';
import Navbar from '../Navbar'
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import WhyUs from '../WhyUs';

const Home = () => {
    return (
        <>
            <Navbar />

            <HeroSection />
            <WhyUs />
            <Footer />
        </>
    );
};

export default Home;
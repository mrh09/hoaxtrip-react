import React from 'react';
import HeroSection from '../HeroSection';
import '../../App.css';
import CardComp from '../CardComp';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <CardComp />
            <Footer />
        </>
    )
}

export default Home;
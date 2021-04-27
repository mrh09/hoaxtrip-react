import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <img src="/img/ntb_2.jpg" />
            <h1>ADVENTURE AWAITS</h1>
            <p>Plan your vocation on the most beautiful places of Indonesia</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection

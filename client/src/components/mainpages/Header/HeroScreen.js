import React from 'react'
import { Link } from 'react-router-dom';
import "../Header/hero-screen.css"


function HeroScreen() {
  return (
    <div className='container hero-container'>
      <div className="row">
        <div className="col-lg-6">
          <div className="hero-text-box">
            <span>Welcome to Body Cares</span>
            <h2>We are dedicated to giving you a good body treatment.</h2>
            <Link to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



export default HeroScreen


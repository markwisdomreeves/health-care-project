import React from 'react'


function OurOffer() {
  return (
    <div id="our-offer-container">
      <div className="our-offer-title">
        <h3>Why Choose Us</h3>
        <h4>Offer for you</h4>
      </div>
      <section className="offer-container">
        <div className="single-offer-box">
          <div className="icon-box">
          <i className="fa fa-medkit" aria-hidden="true"></i>
          </div>
          <h3>Qualified doctors</h3>
          <p>
           Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

        <div className="single-offer-box">
          <div className="icon-box">
            <i className="fa fa-stethoscope" aria-hidden="true"></i>
          </div>
          <h3>Certified services</h3>
          <p>
           Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

        <div className="single-offer-box">
          <div className="icon-box">
            <i className="fa fa-hospital-o" aria-hidden="true"></i>
          </div>
          <h3>Advanced care</h3>
          <p>
           Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

        <div className="single-offer-box">
          <div className="icon-box">
            <i className="fa fa-heartbeat" aria-hidden="true"></i>
          </div>
          <h3>Emergency care</h3>
          <p>
           Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

      </section>
    </div>
  )
}


export default OurOffer


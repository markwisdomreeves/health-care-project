import React from 'react'
import { Link } from 'react-router-dom'


function OurServices() {
  return (
    <div id="services-container">
      <div className="services-info-container">
        <div className="services-title">
          <h5>Our Services</h5>
          <h2>Offer for you</h2>
        </div>
        <div className="services-link-btn">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>

      <section className="services-items-container">
        <div className="service-box services-flex-items">
          <div className="services-icon-box">
            <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596259/healthCare/flat_icons_butt_bv9jau.png"  alt="" />
          </div>
          <div className="services-text-box">
            <h5>Butts Procedures</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
            </p>
          </div>
        </div>

        <div className="service-box services-flex-items">
          <div className="services-icon-box">
            <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596259/healthCare/flat_icons_beauty_ae8fby.png"  alt="" />
          </div>
          <div className="services-text-box">
            <h5>Breast procedures</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
            </p>
          </div>
        </div>

        <div className="service-box services-flex-items">
          <div className="services-icon-box">
            <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596259/healthCare/flat_icons_head_puf5km.png"  alt="" />
          </div>
          <div className="services-text-box">
            <h5>Facial Procedures</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
            </p>
          </div>
        </div>

        <div className="service-box services-flex-items">
          <div className="services-icon-box">
            <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596259/healthCare/flat_icons_waist_dxldxq.png"  alt="" />
          </div>
          <div className="services-text-box">
            <h5>Waist Procedures</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}


export default OurServices


import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/pageComponents/Footer'


function PriceScreen() {

  const contactRef = useRef(null)

  // Dymically scroll element at the top when a user visits the page
  const contactScroll = () => contactRef.current.scrollIntoView(0)

  useEffect(() => {
    contactScroll()
  }, [])


  return (
    <>
      <div id="global-top-image-container" ref={contactRef}>
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Prices</h1>
             <div className="global-header-title-container">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  Prices
                </span>
              </div>
          </div>
        </section>
      </div>


      <section id="prices-page-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="prices-page-items-container">
                <div className="prices-page-items-title-box">
                  <p>Breast</p>
                  <h3>Dr. Mary Jone</h3>
                  <span>Breast Plastic Surgeon</span>
                </div>
                <ul className="prices-page-ul-list-box">
                  <li>
                    <h6>Flat Breast (Body Lift)</h6>
                    <span>$11, 19</span>
                  </li>
                  <li>
                    <h6>Thigh Breast (Arm Lift)</h6>
                    <span>$23, 11</span>
                  </li>
                  <li>
                    <h6>Small Breast (Whole Body)</h6>
                    <span>$88, 14</span>
                  </li>
                  <li>
                    <h6>Large Breast (Butt Life)</h6>
                    <span>$74, 37</span>
                  </li>
                </ul>
                <div className="prices-link-container">
                  <Link to="/contact-us">
                    Book Now
                  </Link>
              </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="prices-page-items-container">
              <div className="prices-page-items-title-box">
                <p>Waist</p>
                <h3>Dr. Diva Queo</h3>
                <span>Waist Plastic Surgeon</span>
              </div>
              <ul className="prices-page-ul-list-box">
                <li>
                  <h6>Long Waist (Body Lift)</h6>
                  <span>$20, 790</span>
                </li>
                <li>
                  <h6>Thigh Waist (Arm Lift)</h6>
                  <span>$15, 12</span>
                </li>
                <li>
                  <h6>Brachioplasty (Whole Body)</h6>
                  <span>$89, 12</span>
                </li>
                <li>
                  <h6>Large Waist (Butt Life)</h6>
                  <span>$32, 40</span>
                </li>
              </ul>
              <div className="prices-link-container">
                <Link to="/contact-us">
                  Book Now
                </Link>
              </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
             <div className="prices-page-items-container">
              <div className="prices-page-items-title-box">
                <p>Face</p>
                <h3>Dr. Urau Meon</h3>
                <span>Face Plastic Surgeon</span>
              </div>
              <ul className="prices-page-ul-list-box">
                <li>
                  <h6>Burn Face (Body Lift)</h6>
                  <span>$111, 70</span>
                </li>
                <li>
                  <h6>Large Face (Arm Lift)</h6>
                  <span>$190, 12</span>
                </li>
                <li>
                  <h6>Brachioplasty (Whole Body)</h6>
                  <span>$89, 49</span>
                </li>
                <li>
                  <h6>Large Waist (Butt Life)</h6>
                  <span>$70, 10</span>
                </li>
              </ul>
              <div className="prices-link-container">
                <Link to="/contact-us">
                  Book Now
                </Link>
              </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      <Footer />

    </>
  )

}


export default PriceScreen


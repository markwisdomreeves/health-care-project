/* eslint-disable react/style-prop-object */
import React from 'react'
import SubFooter from "./SubFooter"
import {Link} from 'react-router-dom'
import ScrollToTopButton from "./ScrollToTopButton"


function Footer() {

  return (
    <>
      <div id="footer-container">
        <div className="container custom-footer-box">
        <SubFooter />
          <div className="row" id="custom-footer-links-container">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 mb-4 footer-items-links-container">
              <h5 className="text-uppercase text-white mb-0 footer-h5 text-left">Links</h5>
              <ul className="list-unstyled mb-0 footer-items-links-box text-left">
                <li>
                <i className="fa fa-link" aria-hidden="true"></i>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                 <i className="fa fa-link" aria-hidden="true"></i>
                  <Link to="/services" className="text-white">
                    Services
                  </Link>
                </li>
                <li>
                 <i className="fa fa-link" aria-hidden="true"></i>
                  <Link to="/blogs" className="text-white">
                    Blogs
                  </Link>
                </li>
                <li>
                 <i className="fa fa-link" aria-hidden="true"></i>
                  <Link to="/about-us" className="text-white">
                    About Us
                  </Link>
                </li>
                <li>
                 <i className="fa fa-link" aria-hidden="true"></i>
                  <Link to="/contact-us" className="text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 mb-4 footer-items-links-container">
              <h5 className="text-uppercase text-white mb-0 footer-h5 text-left">Our Services</h5>
              <ul className="list-unstyled mb-0 footer-items-links-box text-white text-left">
                <li>
                  <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  Body Lifts
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  Face & Neck
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  Fat Reduction
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  Breast Surgery
                </li>
                <li>
                 <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  Butt Reduction
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 mb-4 text-white footer-items-links-container">
              <h5 className="text-uppercase text-white mb-0 footer-h5 text-left">Contacts</h5>
                <ul className="list-unstyled mb-0 footer-items-links-box text-left">
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Viale Bovio, Teramo
                  </li>
                  <li>
                  <i className="fa fa-building" aria-hidden="true"></i>
                    Main Office, France
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    (+39) 351 080 2563
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    reeves@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    Mon-Sat, 08AM-06PM
                  </li>
                </ul>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3 mb-4">
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe id="my-custom-map-style" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6146976.806107893!2d8.223663855457053!3d41.211886348932815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sit!4v1618434818896!5m2!1sen!2sit" width="400" height="250"
                allowFullScreen="" loading="lazy"></iframe>
            </div>

          </div>

        </div>

        <div className="right-reserved-container">
          <span>
            All Rights Reserved
          </span>
          <a href="####">
              Terms & Use
          </a>
          <a href="####">
            Privacy Policy
          </a>
        </div>

      </div>

      <ScrollToTopButton />
    </>
  )
}


export default Footer


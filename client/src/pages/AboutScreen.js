/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Link } from 'react-router-dom'
import OurOffer from "../components/pageComponents/OurOffer"
import OurTeam from "../components/pageComponents/OurTeam"
import Footer from "../components/pageComponents/Footer"
import Testimonials from '../components/pageComponents/Testimonials'


function AboutScreen() {
  return (
    <>
      <div id="global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">About Us</h1>
              <div className="global-header-title-container">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  About Us
                </span>
              </div>
          </div>
        </section>
      </div>

      <section id="about-us-page-container">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6">
              <article className="about-us-clinic-video-box">
              <iframe width="560" height="225" src="https://www.youtube.com/embed/WrPICvl7sJU?rel=0&amp;autoplay=none&mute=1" frameBorder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowFullScreen="" id="about-us-video-width"></iframe>
              </article>
            </div>

            <div className="col-lg-6 col-md-6">
              <article className="about-clinic-text-container">

                <div className="about-us-clinic-title">
                  <span>About Our Clinic</span>
                  <h2>Welcome to the Body Cares</h2>
                </div>

                <div className="about-us-para-text">
                  <p>
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>

                <ul>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Routine and medical care
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Excellence in Healthcare every
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Building a healthy environment
                  </li>
                </ul>

                <div className="about-us-btn-container">
                  <Link to="/contact-us">
                    Contact Us
                  </Link>
                </div>
              </article>
            </div>

          </div>

          <hr id="bottom-line" />
        </div>

      </section>

      <OurOffer />

      <Testimonials />

      <OurTeam />
      <Footer />
    </>
  )
}

export default AboutScreen


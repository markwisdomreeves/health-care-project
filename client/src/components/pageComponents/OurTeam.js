import React from 'react'
import { Link } from "react-router-dom";


function OurTeam() {
  return (
    <section id="our-team-container">
      <div className="container">

        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="our-team-details-box">
              <Link to="/doctor-details">
                <div className="doctor-details-btn-box">
                  Doctor's Details
                </div>
              </Link>
              <Link to="/price">
                <div className="doctor-details-btn-box">
                  Price's Details
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="our-team-title-box">
              <span>Our Team</span>
              <h2>Our Expert Doctors</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <section className="our-team-item-box">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596258/healthCare/doctor-1_huiwnl.jpg" alt="doctor-1" />
              <div className="our-team-title">
                <h5>Dr. Mary Jones</h5>
                <span>Breast Surgeon</span>
              </div>
              <div className="our-team-social-icons">
                <a href="####">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="####">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="####">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="####">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </section>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <section className="our-team-item-box">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596258/healthCare/doctor-3_m9b8fq.jpg" alt="doctor-1" />
              <div className="our-team-title">
                <h5>Dr. Divad Quelo</h5>
                <span>Waist Surgeon</span>
              </div>
              <div className="our-team-social-icons">
                <a href="####">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="####">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="####">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="####">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </section>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <section className="our-team-item-box">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596259/healthCare/doctor-2_faud1t.jpg" alt="doctor-1" />
              <div className="our-team-title">
                <h5>Dr. Grace Meon</h5>
                <span>Face Surgeon</span>
              </div>
              <div className="our-team-social-icons">
                <a href="####">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="####">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="####">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="####">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </section>
          </div>

        </div>

      </div>

    </section>
  )
}


export default OurTeam


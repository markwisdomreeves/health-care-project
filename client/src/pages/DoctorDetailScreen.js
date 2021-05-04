import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from "../components/pageComponents/Footer"


function DoctorDetailScreen() {

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
            <h1 className="global-h1-text">Doctors</h1>
              <div className="global-header-title-container">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  Doctor's Details
                </span>
              </div>
          </div>
        </section>
      </div>


      <section id="doctor-detail-page-container">
        <div className="container">

          <div className="doctor-detail-page-items-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="doctor-page-img-container">
                  <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596258/healthCare/doctor-1_huiwnl.jpg" alt="doctorImg" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="doctor-page-text-container custom-page-style-1">
                  <span>MBBS, MRCP(UK), CCST(DERM)</span>
                  <h2>DR. MARY JONES</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.sis.
                  </p>
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
                  <div className="doctor-page-social-icons-container">
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
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="doctor-detail-page-items-container">
            <div className="row doctor-detail-page-custom-style-container">
              <div className="col-lg-6">
                <div className="doctor-page-text-container custom-page-style-2 single-custom-style">
                  <span>MBBS, MRCP(UK), CCST(DERM)</span>
                  <h2>DR. DIVAD QUELO</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.sis.
                  </p>
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
                  <div className="doctor-page-social-icons-container">
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
                </div>
              </div>
              <div className="col-lg-6">
                  <div className="doctor-page-img-container">
                  <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596258/healthCare/doctor-3_m9b8fq.jpg" alt="doctorImg" />
                  </div>
                </div>
            </div>
          </div>
          <hr />
          <div className="doctor-detail-page-items-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="doctor-page-img-container">
                 <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618596259/healthCare/doctor-2_faud1t.jpg" alt="doctorImg" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="doctor-page-text-container custom-page-style-3">
                  <span>MBBS, MRCP(UK), CCST(DERM)</span>
                  <h2>DR. GRACE MEON</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.sis.
                  </p>
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
                  <div className="doctor-page-social-icons-container">
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

export default DoctorDetailScreen


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiHealthBookLine } from "react-icons/ri"
import AccordionParent from '../components/pageComponents/AccordionParent'
import { showErrMsg, showSuccessMsg } from "../components/mainpages/utils/Notification/Notification"
import { isEmpty, isEmail } from "../components/mainpages/utils/Validation/Validation"
import Footer from '../components/pageComponents/Footer'
import { useSelector } from 'react-redux'
import axios from 'axios'


const initialState = {
  name: '',
  email: '',
  services: '',
  date: '',
  err: '',
  success: '',
}

function ServiceScreen() {
  const auth = useSelector(state => state.auth)
  const { isLogged, isAdmin } = auth

  const [appointment, setAppointment] = useState(initialState)
  const {name, email, services, date, err, success} = appointment

  const handleAppointmentInput = e => {
    const {name, value} = e.target;
    setAppointment({...appointment, [name]:value, err: '', success: ''})
  }

  const submitAppointment = async e => {
    e.preventDefault()

    if(isEmpty(name) || isEmpty(email) || isEmpty(services) || isEmpty(date))
      return setAppointment({...appointment, err: "All fields are required", success: ''})

    if(!isEmail(email))
      return setAppointment({...appointment, err: "Please enter a valid Email", success: ''})

    try {

      const res = await axios.post('/api/appointments', {name, email, services, date})

      setAppointment({...appointment, err: '', success: res.data.msg})

      window.location.href = "/"

    } catch (err) {
      err.response.data.msg &&
      setAppointment({...appointment, err: err.response.data.msg, success: ''})
    }

  }


  return (
    <>
      <div id="global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Our Services</h1>
              <div className="global-header-title-container">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  Services
                </span>
              </div>
          </div>
        </section>
      </div>

      <section id="main-services-page-container">
        <div className="container">
          <div className="row">

            {/* first sidebar section */}
            <div className="col-lg-4 col-xl-4 col-xxl-4 order-lg-1 services-page-sidebar-1-container">

              <div className="services-page-sidebar-box">
                <div className="services-page-title-box">
                  <h4>
                  <RiHealthBookLine className="services-page-form-icons" />
                    All services
                  </h4>
                </div>
                <AccordionParent />
              </div>

              <div id="appointment-container">
                <div id="appointment-form-container">
                  <section className="appointment-form">
                    <div className="form-title">

                      {err && showErrMsg(err)}
                      {success && showSuccessMsg(success)}

                      <span>REQUEST FOR YOUR</span>
                      <h2>Consultation</h2>
                    </div>
                    <form onSubmit={submitAppointment}>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        autoComplete="off"
                        value={name}
                        onChange={handleAppointmentInput}
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="off"
                        value={email}
                        onChange={handleAppointmentInput}
                      />
                      <div className="date-picker-box">
                        <input
                          type="date"
                          name="date"
                          id="date"
                          placeholder="Date"
                          value={date}
                          onChange={handleAppointmentInput}
                        />
                      </div>
                      <select
                        name="services"
                        id="services"
                        value={services}
                        onChange={handleAppointmentInput}
                      >
                        <option value="">Type of services</option>
                        <option value="butt surgery">Butt Surgery</option>
                        <option value="skin surgery">Skin Surgery</option>
                        <option value="waist surgery">Waist Surgery</option>
                        <option value="facial surgery">Facial Surgery</option>
                        <option value="breast surgery">Breast Surgery</option>
                        <option value="emergency care">Emergency care</option>
                      </select>

                      {
                        !isAdmin && !isLogged ?
                        <>
                          <Link to="/login">
                            <button type="submit" className="appointment-btn">
                              { !isAdmin && !isLogged ? "Login to book an Appointment" : "Book Appointment" }
                            </button>
                          </Link>
                        </>
                        :
                        <button type="submit" className="appointment-btn">
                          Book an Appointment
                        </button>
                      }
                    </form>
                  </section>
                </div>
              </div>

            </div>
            {/* end of first sidebar section */}

            {/* second sidebar section */}
            <div className="col-lg-8 col-xl-8 col-xxl-8 order-lg-2 services-page-sidebar-2-container">
              <div className="services-page-details-container">
                <div className="services-page-price-and-title">
                    <div className="services-page-details-title-box">
                      <span>Facial Procedures</span>
                      <h3>Smooth Facelift</h3>
                    </div>

                    <div className="services-page-price-ratings-container">
                      <div className="ratings-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <h3>$ 300.75</h3>
                    </div>
                </div>

                <div className="services-details-img-box-1">
                  <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618598114/healthCare/gallery-11_yyag5v.jpg" alt="" />
                </div>
                <div className="services-details-text-box">
                  <p>
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley
                  </p>
                  <p>
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="services-page-details-img-item">
                      <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618598113/healthCare/gallery-2_smsxsr.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="services-page-details-img-item">
                      <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618598113/healthCare/gallery-3_jzvrae.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="services-page-details-img-item">
                      <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618598113/healthCare/gallery-5_axpflc.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="services-details-desc-items">
                  <p>
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley
                  </p>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <ul className="services-details-ul-items">
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Cumsan lacus vel facilisis.
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Routine and medical care.
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Building a healthy environment.
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Excellence in Healthcare every.
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <ul className="services-details-ul-items">
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Cumsan lacus vel facilisis.
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Routine and medical care.
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Building a healthy environment.
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Excellence in Healthcare every.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley
                  </p>
                </div>
              </div>
            </div>
            {/* end of second sidebar section */}

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


export default ServiceScreen


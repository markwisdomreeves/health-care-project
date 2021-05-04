import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { showErrMsg, showSuccessMsg } from "../components/mainpages/utils/Notification/Notification"
import { isEmpty, isEmail, validURL } from "../components/mainpages/utils/Validation/Validation"
import Footer from "../components/pageComponents/Footer"


const initialState = {
  name: '',
  email: '',
  website: '',
  message: '',
  err: '',
  success: '',
}


function ContactScreen() {
  const contactRef = useRef(null)

  const [contact, setContact] = useState(initialState)
  const {name, email, website, message, err, success} = contact

  const handleContactInput = e => {
    const {name, value} = e.target;
    setContact({...contact, [name]:value, err: '', success: ''})
  }

  // Dymically scroll element at the top when a user visits the page
  const contactScroll = () => contactRef.current.scrollIntoView(0)

  useEffect(() => {
    contactScroll()
  }, [])


  const submitContact = async e => {
    e.preventDefault()

    if(isEmpty(name) || isEmpty(email) || isEmpty(website) || isEmpty(message))
      return setContact({...contact, err: "All fields are required", success: ''})

    if(!isEmail(email))
      return setContact({...contact, err: "Please enter a valid Email", success: ''})

    if(!validURL(website))
      return setContact({...contact, err: "Invalid website address", success: ''})

    try {
      const res = await axios.post('/api/contact', {name, email, website, message})

      setContact({...contact, err: '', success: res.data.msg})

      window.location.href = "/contact-us"

    } catch (err) {
      err.response.data.msg &&
      setContact({...contact, err: err.response.data.msg, success: ''})
    }

  }


  return (
    <>
      <div id="global-top-image-container" ref={contactRef}>
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Contact Us</h1>
              <div className="global-header-title-container">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  Contact us
                </span>
              </div>
          </div>
        </section>
      </div>

      <section id="contact-page-container">
        <div className="container">
          <div className="row">
            <div className="contact-page-info-container col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="contact-page-info-item-box">
                <div className="contact-page-icon-box">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="contact-page-text-box">
                  <h4>Address</h4>
                  <p>Viale Bovio, Teramo, Italia</p>
                </div>
              </div>
            </div>

            <div className="contact-page-info-container col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="contact-page-info-item-box">
                <div className="contact-page-icon-box">
                <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact-page-text-box">
                  <h4>Hotline</h4>
                  <p>+39 351 080 2563</p>
                </div>
              </div>
            </div>

            <div className="contact-page-info-container col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="contact-page-info-item-box">
                <div className="contact-page-icon-box">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="contact-page-text-box">
                  <h4>Email</h4>
                  <p>reeves@gmail.com</p>
                </div>
              </div>
            </div>
          </div>


          <div className="contact-form-content-container">
            <div className="row">
              <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6">
                <div className="contact-form-img-container">
                  <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618705299/healthCare/contact-form-img_dvbwo7.jpg" alt="contact-form-img" />
                </div>
              </div>

              <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6">
                <div className="contact-form-container">

                  {err && showErrMsg(err)}
                  {success && showSuccessMsg(success)}

                  <h4>Get in touch</h4>
                  <form onSubmit={submitContact}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      autoComplete="off"
                      value={name}
                      onChange={handleContactInput}
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      autoComplete="off"
                      value={email}
                      onChange={handleContactInput}
                    />
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="form-control"
                      placeholder="Website Address"
                      autoComplete="off"
                      value={website}
                      onChange={handleContactInput}
                    />
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="6"
                      cols="45"
                      placeholder="What's on you mind?"
                      className="contact-textarea"
                      value={message}
                      onChange={handleContactInput}
                    >
                    </textarea>
                    <div className="contact-form-btn-box">
                     <button
                     type="submit"
                     className="btn btn-lg btn-primary">
                       Send Message
                      </button>
                    </div>
                  </form>
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


export default ContactScreen


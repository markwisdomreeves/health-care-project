/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import AppointmentForm from "./AppointmentForm"


function Appointment() {

  return (
    <div id="appointment-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <AppointmentForm />
          </div>

          <div className="col-lg-8">
            <div className="appointment-info-box">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <section className="appointment-info-item">
                    <div className="apponitment-info-title">
                      <span>Welcome to Body Care</span>
                      <h2>
                        Find the best Doctors for <b className="bold-text">Fat Reduction</b>
                      </h2>
                    </div>
                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </section>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="appointment-video">
                    <iframe width="560" height="225" src="https://www.youtube.com/embed/WrPICvl7sJU?rel=0&amp;autoplay=none&mute=1" frameBorder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowFullScreen="" id="custom-video-width"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}


export default Appointment


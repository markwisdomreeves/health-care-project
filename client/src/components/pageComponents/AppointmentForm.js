/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
import axios from "axios"
import { showErrMsg, showSuccessMsg } from "../mainpages/utils/Notification/Notification"
import { isEmpty, isEmail } from "../mainpages/utils/Validation/Validation"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const initialState = {
  name: '',
  email: '',
  services: '',
  date: '',
  err: '',
  success: '',
}


function AppointmentForm() {
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
  )
}


export default AppointmentForm


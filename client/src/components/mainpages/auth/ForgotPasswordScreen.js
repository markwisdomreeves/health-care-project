import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

import { isEmail, isEmpty } from '../utils/Validation/Validation'
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification'


const initialState = {
  email: '',
  err: '',
  success: ''
}


function ForgotPasswordScreen() {

    const [data, setData] = useState(initialState)

    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const forgotPassword = async (e) => {
        e.preventDefault()

        if(isEmpty(email))
          return setData({...data, err: "The email field is required.", success: ''})

        if(!isEmail(email))
          return setData({...data, err: "This email is invalid.", success: ''})

        try {
            const res = await axios.post('/user/forgot', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }

    return (
      <div className="container" id="custom-password-container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">

              <div className="card card-signin my-2">
                  <div className="card-body">

                      {err && showErrMsg(err)}
                      {success && showSuccessMsg(success)}

                      <h5 className="card-title text-center">Forgot Password</h5>

                      <form className="form-signin">
                        <div className="form-label-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            autoComplete="off"
                            autoFocus
                            value={email}
                            onChange={handleChangeInput}
                          />
                        </div>

                        <div className="reset-password-box">
                          <i className="fa fa-check" aria-hidden="true"></i>
                          <span>Send me a reset password link</span>
                        </div>

                        <button
                          className="btn btn-lg btn-block"
                          type="submit"
                          id="custom-button-style"
                          onClick={forgotPassword}
                        >
                          Verify your email
                        </button>

                        <div className="custom-control mb-3" id="forgot_and_register-box">
                          <h5 className="register-and-login-style">
                           <Link to="/login">Login</Link>
                          </h5>
                        </div>
                        <hr className="my-4" />
                      </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
}


export default ForgotPasswordScreen

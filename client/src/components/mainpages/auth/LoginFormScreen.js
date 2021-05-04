import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification'
import { isEmpty, isEmail, isLength } from '../utils/Validation/Validation'
import { dispatchLogin } from '../../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {
    REACT_APP_GOOGLE_CLIENT_ID,
    REACT_APP_FACEBOOK_APP_ID,
} from "../../../config/config";

const eye = <i className="fa fa-eye-slash" aria-hidden="true"></i>;
const eyeSlash = <i className="fa fa-eye" aria-hidden="true"></i>;


const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}


function LoginFormScreen() {
  const [passwordShown, setPasswordShown] = useState(false);

  const [data, setData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const {email, password, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const handleSubmit = async e => {
        e.preventDefault()

        if(isEmpty(email) || isEmpty(password))
          return setData({...data, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
          return setData({...data, err: "This email is invalid.", success: ''})

        if(isLength(password))
          return setData({...data, err: "Password must be at least 6 chars long.", success: ''})

        try {
            const res = await axios.post('/user/login', {email, password})
            setData({...data, err: '', success: res.data.msg})

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push("/")

        } catch (err) {
            err.response.data.msg &&
            setData({...data, err: err.response.data.msg, success: ''})
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

            setData({...data, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg &&
            setData({...data, err: err.response.data.msg, success: ''})
        }
    }

    const responseFacebook = async (response) => {
        try {
            const {accessToken, userID} = response
            const res = await axios.post('/user/facebook_login', {accessToken, userID})

            setData({...data, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg &&
            setData({...data, err: err.response.data.msg, success: ''})
        }
    }


    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">

              <div className="main-demo-account-box">
                <h3>LOGIN DEMO</h3>
                <span className="user">user@gmail.com</span>
                <span className="user">user12345</span>
                <span className="admin">admin@gmail.com</span>
                <span className="admin">admin12345</span>
              </div>

              <div className="card card-signin my-2">
                  <div className="card-body">

                      {err && showErrMsg(err)}
                      {success && showSuccessMsg(success)}

                      <h5 className="card-title text-center">Login Form</h5>

                      <form className="form-signin" onSubmit={handleSubmit}>
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
                        <div className="form-label-group custom-password-wrapper">
                          <input
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={handleChangeInput}
                        />
                        <i onClick={togglePasswordVisiblity}>
                          {passwordShown ? eyeSlash : eye}
                        </i>
                        </div>
                        <button
                          className="btn btn-lg btn-block"
                          type="submit"
                          id="custom-button-style"
                        >
                          Login
                        </button>
                        <div className="custom-control mb-3" id="forgot_and_register-box">
                          <Link to="/register">Register</Link> |
                          <Link to="/forgot_password">Forgot Password?</Link>
                        </div>
                        <hr className="my-4" />
                      </form>

                      <div className="social-media-box-google">
                        <GoogleLogin
                          clientId={REACT_APP_GOOGLE_CLIENT_ID}
                          buttonText="Login with google"
                          onSuccess={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                          id="google-custom-login"
                        />
                      </div>

                      <div className="social-media-box-facebook">
                        <FacebookLogin
                          appId={REACT_APP_FACEBOOK_APP_ID}
                          autoLoad={false}
                          fields="name,email,picture"
                          callback={responseFacebook}
                          id="facebook-custom-login"
                        />
                      </div>

                  </div>
              </div>
          </div>
        </div>
      </div>
    );

}


export default LoginFormScreen

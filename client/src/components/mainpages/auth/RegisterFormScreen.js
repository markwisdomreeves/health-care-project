import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification'
import { isEmpty, isEmail, isLength, isMatch } from '../utils/Validation/Validation'

const eye = <i className="fa fa-eye-slash" aria-hidden="true"></i>;
const eyeSlash = <i className="fa fa-eye" aria-hidden="true"></i>;


const initialState = {
  name: '',
  email: '',
  password: '',
  comfirmPassword: '',
  err: '',
  success: ''
}


function RegisterFormScreen() {
    const [passwordShown, setPasswordShown] = useState(false);

    const [data, setData] = useState(initialState)

    const {name, email, password, comfirmPassword, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setData({...data, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setData({...data, err: "This email is invalid.", success: ''})

        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 chars long.", success: ''})

        if(!isMatch(password, comfirmPassword))
            return setData({...data, err: "Password do not match.", success: ''})

        try {
            const res = await axios.post('/user/register', {
                name, email, password
            })
            setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg &&
            setData({...data, err: err.response.data.msg, success: ''})
        }
    }

    return (
      <div className="container">
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">

                        {err && showErrMsg(err)}
                        {success && showSuccessMsg(success)}

                        <h5 className="card-title text-center">Register Form</h5>

                       <div class="alert alert-primary d-flex align-items-center" role="alert">
                          <div>
                            We will email you an account activation link to activate your account.
                          </div>
                        </div>

                        <form className="form-signin" onSubmit={handleSubmit}>
                        <div className="form-label-group">
                          <input
                            type="name"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="User name"
                            autoComplete="off"
                            autoFocus
                            value={name}
                            onChange={handleChangeInput}
                          />
                        </div>
                        <div className="form-label-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            autoComplete="off"
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
                        <div className="form-label-group custom-password-wrapper">
                          <input
                            type={passwordShown ? "text" : "password"}
                            name="comfirmPassword"
                            id="comfirmPassword"
                            className="form-control"
                            placeholder="Comfirm Password"
                            value={comfirmPassword}
                            onChange={handleChangeInput}
                        />
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                          <label
                            className="custom-control-label"
                            id="custom-check-box"
                            htmlFor="customCheck1"
                          >
                            Subscribe to our Newsletter
                          </label>
                        </div>
                        <button
                          className="btn btn-lg btn-block"
                          type="submit"
                          id="custom-button-style"
                        >
                          Register
                        </button>
                        <div className="custom-control mb-3" id="forgot_and_register-box">
                          <h5 className="register-and-login-style">Already a Costumers? <Link to="/login">Login</Link></h5>
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


export default RegisterFormScreen

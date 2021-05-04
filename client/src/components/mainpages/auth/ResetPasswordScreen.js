import React, {useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification'
import { isLength, isMatch, isEmpty } from '../utils/Validation/Validation'


const eye = <i className="fa fa-eye-slash" aria-hidden="true"></i>;
const eyeSlash = <i className="fa fa-eye" aria-hidden="true"></i>;


const initialState = {
    password: '',
    comfirmPassword: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [passwordShown, setPasswordShown] = useState(false);

    const [data, setData] = useState(initialState)
    const {token} = useParams()

    const {password, comfirmPassword, err, success} = data

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }


    const handleResetPassword = async (e) => {
        e.preventDefault()

        if(isEmpty(password) || isEmpty(comfirmPassword))
            return setData({...data, err: "Both fields are required.", success: ''})

        if(isLength(password))
            return setData({...data, err: "Password must be aleast 6 chars long.", success: ''})

        if(!isMatch(password, comfirmPassword))
            return setData({...data, err: "Password do not match.", success: ''})

        try {
            const res = await axios.post('/user/reset', {password}, {
                headers: {Authorization: token}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
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
                    <h5 className="card-title text-center">Reset Your Password</h5>

                      <form className="form-signin">
                        <div className="form-label-group custom-password-wrapper">
                          <input
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter New Password"
                            autoComplete="off"
                            autoFocus
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
                            id="comfirmPassword"
                            name="comfirmPassword"
                            className="form-control"
                            placeholder="Comfirm New Password"
                            autoComplete="off"
                            value={comfirmPassword}
                            onChange={handleChangeInput}
                          />
                        </div>

                        <button
                          className="btn btn-lg btn-block"
                          type="submit"
                          id="custom-button-style"
                          onClick={handleResetPassword}
                        >
                          Reset Password
                        </button>
                      </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
}


export default ResetPassword

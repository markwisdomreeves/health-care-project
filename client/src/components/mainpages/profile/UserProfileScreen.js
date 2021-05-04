import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from "../../mainpages/utils/Loading/Loading"
import { isLength, isMatch } from '../utils/Validation/Validation'
import { showSuccessMsg, showErrMsg } from '../utils/Notification/Notification'
import { fetchAllUsers, dispatchGetAllUsers } from '../../../redux/actions/usersAction'

import { AiFillCamera } from "react-icons/ai"
import { RiDeleteBin7Fill } from "react-icons/ri"
import { BiEdit } from "react-icons/bi"

const eye = <i className="fa fa-eye-slash" aria-hidden="true"></i>
const eyeSlash = <i className="fa fa-eye" aria-hidden="true"></i>


const initialState = {
    name: '',
    password: '',
    comfirmPassword: '',
    err: '',
    success: ''
}


function Profile() {
    const [passwordShown, setPasswordShown] = useState(false);
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const users = useSelector(state => state.users)

    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const {name, password, comfirmPassword, err, success} = data

    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback, setCallback] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(isAdmin){
            fetchAllUsers(token).then(res =>{
                dispatch(dispatchGetAllUsers(res))
            })
        }
    },[token, isAdmin, dispatch, callback])

    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const changeAvatar = async(e) => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

            if(file.size > 1024 * 1024)
                return setData({...data, err: "Size too large." , success: ''})

            if(file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png')
                return setData({...data, err: "File format is incorrect." , success: ''})

            let formData =  new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload_avatar', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })

            setLoading(false)
            setAvatar(res.data.url)

        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updateInfor = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name : user.name,
                avatar: avatar ? avatar : user.avatar
            },{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updatePassword = () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, comfirmPassword))
            return setData({...data, err: "Password did not match.", success: ''})

        try {
            axios.post('/user/reset', {password},{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
        if(name || avatar) updateInfor()
        if(password) updatePassword()
    }

    const handleDelete = async (id) => {
        try {
            if(user._id !== id){
                if(window.confirm("Are you sure you want to delete this account?")){
                    setLoading(true)
                    await axios.delete(`/user/delete/${id}`, {
                        headers: {Authorization: token}
                    })
                    setLoading(false)
                    setCallback(!callback)
                }
            }

        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    return (
        <>
            <div>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                {loading && <Loading />}
            </div>

           <div className="profile_page">

            {
                !isAdmin ?
                <>
                 <div className="col-left">
                    <h2>{isAdmin ? "Admin Profile": "User Profile"}</h2>

                    <div className="avatar">
                        <img src={avatar ? avatar : user.avatar} alt=""/>
                        <span>
                            <AiFillCamera />
                            <p>Change</p>
                            <input type="file" name="file" id="file_up" onChange={changeAvatar} />
                        </span>
                    </div>

                    <div className="form-group">
                        <input type="text" name="name" id="name" defaultValue={user.name}
                        placeholder="Your name" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" id="email" defaultValue={user.email}
                        placeholder="Your email address" disabled />
                    </div>

                    <div className="form-group custom-password-wrapper">
                        <input
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Your password"
                            autoComplete="off"
                            value={password}
                            onChange={handleChange}
                        />

                        <i onClick={togglePasswordVisiblity}>
                          {passwordShown ? eyeSlash : eye}
                        </i>
                    </div>

                    <div className="form-group custom-password-wrapper">
                        <input
                            type={passwordShown ? "text" : "password"}
                            name="comfirmPassword"
                            id="comfirmPassword"
                            placeholder="Confirm password"
                            autoComplete="off"
                            value={comfirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <em style={{color: "crimson"}}>
                        * If you update your password here, you will not be able
                            to login quickly using google and facebook.
                        </em>
                    </div>

                    <button disabled={loading} onClick={handleUpdate}>Update</button>
                  </div>
                </>
                :
                <>
                    <div className="col-left">
                        <h2>{isAdmin ? "Admin Profile": "User Profile"}</h2>

                        <div className="avatar">
                            <img src={avatar ? avatar : user.avatar} alt=""/>
                            <span>
                                <AiFillCamera />
                                <p>Change</p>
                                <input type="file" name="file" id="file_up" onChange={changeAvatar} />
                            </span>
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={user.name}
                                placeholder="Your name"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                defaultValue={user.email}
                                placeholder="Your email address"
                                disabled
                            />
                        </div>

                        <div className="form-group custom-password-wrapper">
                            <input
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Your password"
                                autoComplete="off"
                                value={password}
                                onChange={handleChange}
                            />

                            <i onClick={togglePasswordVisiblity}>
                            {passwordShown ? eyeSlash : eye}
                            </i>
                        </div>

                        <div className="form-group custom-password-wrapper">
                            <input
                                type={passwordShown ? "text" : "password"}
                                name="comfirmPassword"
                                id="comfirmPassword"
                                placeholder="Confirm password"
                                autoComplete="off"
                                value={comfirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <em style={{color: "crimson"}}>
                            * If you update your password here, you will not be able
                                to login quickly using google and facebook.
                            </em>
                        </div>

                        <button disabled={loading} onClick={handleUpdate}>Update</button>
                    </div>


                    <div className="col-right">
                        <h2>{isAdmin ? "Users" : "My Orders"}</h2>

                        <div style={{overflowX: "auto"}}>
                            <table className="customers">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Admin</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => (
                                            <tr key={user._id}>
                                                <td>{user._id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    {
                                                        user.role === 1
                                                        ? <i className="fa fa-check" title="Admin" aria-hidden="true"></i>
                                                        : <i className="fa fa-times" title="User" aria-hidden="true"></i>

                                                    }
                                                </td>
                                                <td>
                                                    <Link to={`/edit_user/${user._id}`}>
                                                        <i><BiEdit className="edit_icons" /></i>
                                                    </Link>
                                                    <span onClick={() => handleDelete(user._id)}>
                                                        <i><RiDeleteBin7Fill className="delete_icons" /></i>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            }

        </div>
      </>
    )
}


export default Profile

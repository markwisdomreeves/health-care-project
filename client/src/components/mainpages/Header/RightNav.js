import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import axios from "axios"
import { Ul, Icons } from './RightNavElement'


const RightNav = ({ open, closeMobileMenu }) => {
  const auth = useSelector(state => state.auth)
  const { user, isLogged } = auth

  const handleLogout = async () => {
    try {
      await axios.get('/user/logout')
      localStorage.removeItem('firstLogin')
      window.location.href = "/"
    } catch (err) {
      window.location.href = "/"
    }
  }


  const userLink = () => {
    return (
      <div className="drop-nav">
        <li className="custom-li-styles">
          <div id="custom-user-info-box">
            <Link to="#">
              <img src={user.avatar} alt=""/>
              <span>{user.name}</span>
            </Link>
          </div>
        </li>
        <ul className="dropdown custom-li-styles" id="my-custom-dropdown">
          <li><Link to="/profile">Profile</Link></li>
          <li className="logout-button-style"><Link to="/" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>
    )
  }

  return (
      <Ul open={open}>

        <div className='menu-icon' id="custom-logo-container">
          <Icons className={open ? 'fa fa-times' : ''} onClick={closeMobileMenu} />
        </div>

        <li>
          <Link to='/' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/services' onClick={closeMobileMenu}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to='/blogs' onClick={closeMobileMenu}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to='/about-us' onClick={closeMobileMenu}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to='/contact-us' onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </li>

        {
        isLogged
        ? userLink()
        : <li className="login-button-style">
            <Link
              to='/login' onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        }

      </Ul>
  )
}


export default RightNav

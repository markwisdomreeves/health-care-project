import React from 'react'
import Burger from './Burger';
import { Nav, LogoIcon } from "./NavbarElements"
import TopHeader from '../Header/TopHeader'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <TopHeader />
    <Nav>
      <div className="logo">
        <Link to="/">
          <LogoIcon className="fa fa-heartbeat" aria-hidden="true"></LogoIcon>
        </Link>
      </div>
      <Burger />
    </Nav>
    </>
  )
}


export default Navbar

import React, { useState } from 'react';
import RightNav from './RightNav';
import { StyledBurger } from "./BurgerElement"


const Burger = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(!open)
  const closeMobileMenu = () => setOpen(false)


  return (
    <>
      <StyledBurger open={open} onClick={handleClick}>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
      <RightNav open={open} closeMobileMenu={closeMobileMenu} />
    </>
  )
}


export default Burger

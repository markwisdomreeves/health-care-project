import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';


const Button = styled.div`
   position: fixed;
   width: 100%;
   left: 43%;
   bottom: 60px;
   height: 20px;
   font-size: 2rem;
   z-index: 1;
   cursor: pointer;
   color: #13a2b7;
`


const ScrollToTopButton = () =>{

  const [visible, setVisible] = useState(false)


   const toggleVisible = () => {

      const scrolled = document.documentElement.scrollTop;

        if (scrolled > 710){
          setVisible(true)
        }
        else if (scrolled <= 100){
          setVisible(false)
        }
    };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // or auto
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button>
     <FaArrowCircleUp onClick={scrollToTop}
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}


export default ScrollToTopButton

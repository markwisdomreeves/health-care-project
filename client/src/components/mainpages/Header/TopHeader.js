import React from 'react'
import "./top-header.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const Facebook = <FontAwesomeIcon icon={faFacebook} />
const Instagram = <FontAwesomeIcon icon={faInstagram} />
const Linkin = <FontAwesomeIcon icon={faLinkedin} />
const Twitter = <FontAwesomeIcon icon={faTwitter} />


function TopHeader() {

  return (
    <div id="top-header-container">

      <div className="contact-info-container">
        <span>
          <i className="fa fa-phone" aria-hidden="true"></i>
         (+39) 351 080 2563
        </span>
        <span>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          Viale Bovio, Teramo, Italia
        </span>
        <span>
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          Mon to Sat 9:00am to 18:00pm
        </span>
      </div>

      <div className="social-media-icons-container">
        <a href="####">
          <i>{Facebook}</i>
        </a>
        <a href="####">
          <i>{Instagram}</i>
        </a>
        <a href="####">
          <i>{Linkin}</i>
        </a>
        <a href="####">
          <i>{Twitter}</i>
        </a>
      </div>
    </div>
  )
}


export default TopHeader




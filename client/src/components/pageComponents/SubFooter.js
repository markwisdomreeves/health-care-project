import React from 'react'


function SubFooter() {
  return (
    <div className="main-sub-footer-container">
      <div id="sub-footer-container">
        <div className="sub-footer-logo">
          <h3>Body Cares</h3>
        </div>
        <form>
          <div className="sub-footer-form">
            <input type="email" name="email" id="email" placeholder="Email" required />
            <button>
              Subscribe
            </button>
          </div>
        </form>
        <div className="sub-footer-social-icons">
          <a href="####">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="####">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="####">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="####">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  )
}


export default SubFooter


import React from 'react'
import './Footer.css';
import christmastree from "../../images/christmas-tree.png"
import christmasbell from "../../images/christmas-bell.png"

function Footer() {
  return (
    <footer className = "footer">
      <div className = "footer-content">
        <div className = "contact-form">
          <h3 className = "contact-us-format">CONTACT US</h3>
          <h4 className = "get-in-touch-format">Get in touch</h4>
            <div className = "input-form">
              <input type = "text" placeholder = "First Name"/>
              <input type = "text" placeholder = "Last Name" />
              <input type = "text" placeholder = "Message me" />
            </div>
            <button className = "button-format">
              Submit
            </button>
        </div>
      </div>

      <div className = "last-section">
        <img className="christmas-tree" src={christmastree}/>
        <img className="christmas-bell" src={christmasbell}/>
        <div className = "about-us">
          ABOUT US 
          <div className = "about-us-content">
            We are brainrot
          </div>
          <div className = "link-copy-right">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
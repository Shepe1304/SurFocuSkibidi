import React, { useState } from 'react'
import './Footer.css';
import brainrot from "../../images/brain-rot.png"
import toilet from "../../images/toilet.png"

function Footer() {
  const [buttonText, setButtonText] = useState("mitSub");

  const handleButtonClick = () => {
    setButtonText(text => text === "mitSub" ? "Submit": "mitSub");
  }
  return (
    <footer className = "footer">
      <div className = "footer-content">
        <div className = "contact-form">
          <h3 className = "contact-us-format">contact us if your brain doesn't work anymore.</h3>
            <div className = "input-form">
              <input type = "text" placeholder = "Anything, but last name"/>
              <input type = "text" placeholder = "Anything, but first name" />
              <input type = "text" placeholder = "Message someone, it's not us" />
            </div>
            <button className = "button-format" onClick = {handleButtonClick}>
              {buttonText}
            </button>
        </div>
      </div>

      <div className = "last-section">
        <img className="brain-rot" src={brainrot}/>
        <img className="toilet icon" alt = "shaking-icon" src={toilet}/>
        <div className = "about-us">
          abouT uS 
          <div className = "about-us-content">
            about us? <br/>
            what is "about us" <br/>
            we dont know
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
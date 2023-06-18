import './index.scss'
import React from 'react'
import {Facebook,Instagram,Twitter,Google,Pinterest} from'@mui/icons-material'

function Contact() {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="email" placeholder='Enter Your E-mail...'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <Facebook/>
                <Instagram/>
                <Twitter/>
                <Google/>
                <Pinterest/>
            </div>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'
import './index.scss'
function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Fag</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Officia alias, nulla praesentium doloribus 
            eaque animi similique? Fugiat consectetur 
            officiis placeat corporis voluptates beatae,
             consequatur fugit asperiores expedita voluptate eos modi?</span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia alias, nulla praesentium doloribus eaque animi similique? Fugiat consectetur officiis placeat corporis voluptates beatae, consequatur fugit asperiores expedita voluptate eos modi?</span>
        </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className='logo'>RevStore</span>
            <span className='copyright'> ©Copyright 2023. All Rights Reserved </span>
          </div>
          <div className="right"> 
          <img src="../../../public/img/payment.png" alt=''/>
          </div>
        </div>
      </div>
    
  )
}

export default Footer
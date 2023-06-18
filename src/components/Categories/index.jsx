import './index.scss'
import React from 'react'
import {Link} from 'react-router-dom'
function Categories() {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sale" />
          <button><Link className='link' to='/products/1'>Sale</Link></button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button><Link className='link' to='/products/1'>Women</Link></button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button><Link className='link' to='/products/1'>New Season</Link></button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col"> 
          <div className="row">
          <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button><Link className='link' to='/products/1'>Men</Link></button>
          </div></div>
          <div className="col"><div className='row'><img src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button><Link className='link' to='/products/1'>Accessories</Link></button></div>
          </div>
          </div>
        <div className="row"> <img src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button><Link className='link' to='/products/1'>Shoes</Link></button></div>
      
    </div>
    </div>
  )
}

export default Categories
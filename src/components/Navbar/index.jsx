import React, { useState } from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { PersonOutlineOutlined } from '@mui/icons-material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { Link} from 'react-router-dom'
import './index.scss'
import { Search } from '@mui/icons-material'
import Cart from '../Cart'
function Navbar() {
  const [open , setOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className='left'>
            <div className='item'>
                <img src='/public/img/en.png' alt='lang'/>
                <KeyboardArrowDown />
            </div>
            <div className='item'>
              <span>USD</span>
              <KeyboardArrowDown/>
            </div>
            <div className='item'>
                <Link className='link' to="/products/1">Women</Link>
              </div>
              <div className='item'>
                <Link className='link' to="/products/2">Men</Link>
              </div>
              <div className='item'>
                <Link className='link' to="/products/3">Children</Link>
              </div>
            </div>
        
        <div className='center'>
          <Link className='link' to='/'>RevStore</Link>
        </div>
        <div className='right'>
        <div className='item'>
          <Link className='link' to='/'>Homepage</Link>
        </div>
        <div className='item'>
          <Link className='link' to='/'>About</Link>
        </div>
        <div className='item'>
          <Link className='link' to='/'>Contact</Link>
        </div>
        <div className='item'>
          <Link className='link' to='/'>Stores</Link>
        </div>
        <div className='icons'>
          <Search/>
          <PersonOutlineOutlined/>
          <FavoriteBorderOutlined/>
          <div className='cartIcon' onClick={() => setOpen (!open)}>
          <ShoppingCartOutlined/>
          <span>0</span>
        </div>
        </div>
        </div>
        </div>
        {open && <Cart/>}
        </div>
    
  )
}

export default Navbar
import React, { useState } from 'react'
import './index.scss'
import {AddShoppingCart , FavoriteBorder , Balance} from '@mui/icons-material'
const Product = () => {
const [selectedImg , setSelectedImg] = useState(0)
const [quntity , setQuntity] = useState(1)

  const images =
   [ "https://images.pexels.com/photos/5604520/pexels-photo-5604520.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2",
    "https://images.pexels.com/photos/4906201/pexels-photo-4906201.jpeg?auto=compress&cs=tinysrgb&w=600",
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt='' onClick={e => setSelectedImg(0)}/>
          <img src={images[1]} alt=''  onClick={e => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className="right">
        <h1>Titlee</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Alias soluta est accusamus sunt deserunt ipsum minima minus illo voluptate<br/> veniam, qui repudiandae quisquam nobis quae aperiam<br/> sint ad error. Sed?</p>
        <div className="quntity">
          <button onClick={() => setQuntity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          {quntity}
          <button onClick={() => setQuntity((prev) => prev+1)}>+</button>
        </div>
          <button className='add'> <AddShoppingCart/> Add To Cart </button>
          <div className="link">
            <div className="item">
              <FavoriteBorder/> ADD TO WISH LIST
            </div>
            <div className="item">
              <Balance/> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor : Polo</span>
            <span> Product Type : Coat</span>
            <span> Tag: Coat, Woman , Top</span>
          </div>
          <hr/>
          <div className="info">
            <span>
              DESCRIPTION
            </span>
            <hr/>
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
          </div>
      </div>
    </div>
  )
}

export default Product
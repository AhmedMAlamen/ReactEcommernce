import React from 'react'
import './index.scss'
import { DeleteOutlined } from '@mui/icons-material'
function Cart() {
    const data =  [
        {
        id:1,
        img:'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2:'https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:"Some Random Girls",
        desc:"Some Random Girls",
        isNew:true,
        oldPrice:19,
        price:12
        },
       
    ]
  return (
    <div className='cart'>
        <h1>Products In Your Cart</h1>
        {data?.map(item => (
            <div className="item" key = {item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <DeleteOutlined className='delete'/>
                <div className="price">1 x ${item.price}
                </div>
                </div>
                
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Rest Cart</span>
    </div>
  )
}

export default Cart
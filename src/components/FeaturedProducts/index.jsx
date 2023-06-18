import './index.scss'
import Card from '../Card'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FeaturedProducts({type}) {
    
  const data = [
    {
    id:1,
    img:'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600',
    img2:'https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600',
    title:"Some Random Girls",
    oldPrice:19,
    price:12
    },
    {
        id:2,
        img:'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:"two girls",
        oldPrice:19,
        price:12,
    },
    {
        id:3,
        img:'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:"meh",
        oldPrice:19,
        price:12,
    },
    {
        id:4,
        img:'https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:"bag",
        oldPrice:19,
        price:12,
    },
  
                      
            

  ]


  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1> {type} Products </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum non, iusto eius aliquam quidem neque veritatis dolorem earum labore incidunt facilis ad a quae doloribus, nam facere assumenda illo?</p>
        </div>
        <div className='bottom'>
            {data.map(item=>  (
                <Card item ={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts 
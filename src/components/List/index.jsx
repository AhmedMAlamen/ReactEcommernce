import React from 'react'
import Card from '../Card'
import './index.scss'
function List() {
  const data = [
    {
    id:1,
    img:'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600',
    img2:'https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600',
    title:"Some Random Girls",
    isNew:true,
    oldPrice:19,
    price:12
    },
    {
        id:2,
        img:'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:"two girls",
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
        id:3,
        img:'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:"meh",
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
        id:4,
        img:'https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:"bag",
        isNew:true,
        oldPrice:19,
        price:12,
    },
  
                      
            

  ]

  return (
    <div className='list'>{data?.map(item =>(
      <Card item={item} key={item.id}/>
))
     } </div>
  )
}

export default List
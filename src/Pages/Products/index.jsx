import React, { useState } from 'react'
import './index.scss'
import List from '../../components/List'
import { useParams } from 'react-router-dom'
function Products() {
  const catId = parseInt(useParams().id )
  const [maxPrice, setMaxPrice] = useState(0)
  const [sort,setSort] = useState (null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
            <h2>Products Categories</h2>
            <div className="inputItem">
        <input type='checkbox' id="1" value={1} />
        <label htmlFor="1">Shoes</label><br/>
        <input type='checkbox' id='2' value={2}/>
        <label htmlFor='2'>Skirts</label><br/>
        <input type='checkbox' id='3' value={3}/>
        <label htmlFor='3'>Coats</label><br/>
        </div>
        </div>
        <div className="filterItem">
        <h2>Filter By Price</h2>
        <div className="inputItem">
          <span>{maxPrice}</span>
          <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
          <span>1000$</span>
        </div>
        </div>
        <div className="filterItem">
            <h2>Sort by </h2>
            <div className="inputItem">
              <input type="radio" id='asc' value="asc" name='price' onChange={e => setSort("asc")}/>
              <label htmlFor="asc">Price (Lowest First)</label><br/>
              <input type="radio" id='desc' value="desc" name='price' onChange={e => setSort("desc")}/>
              <label htmlFor="de sc">Price (Highest First)</label>
            </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src='https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
        <List catId ={catId} maxPrice={maxPrice} sort = {sort}/>
      </div>
    </div>
  )
}

export default Products
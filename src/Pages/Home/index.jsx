import React from 'react'
import Slider from '../../components/Slider'
import './index.scss'
import FeaturedProducts from '../../components/FeaturedProducts'
import Categories from '../../components/Categories'
import Contact from '../../components/Contact'

function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home
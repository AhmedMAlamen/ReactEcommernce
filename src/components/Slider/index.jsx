import './index.scss'
import {EastOutlined,WestOutlined} from '@mui/icons-material'
import React, { useState } from 'react'

function Slider() {
    
    const data = [
        "https://wallpapercave.com/dwp2x/wp10691405.jpg",
        "https://wallpapercave.com/dwp2x/wp10668532.jpg",
        "https://wallpapercave.com/wp/wp10668538.jpg"
    ]
    const [currentSlide,setCurrentSlide] = useState (0);
    const prevSlide = () =>  {setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1) }
    const nextSlide = () => setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlined/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Slider
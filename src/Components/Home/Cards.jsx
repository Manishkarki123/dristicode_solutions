import React from 'react'
import Comp_Carousel from '../../Common/Comp_Carousel'
import '../../style/home/cards.css'
import Get_app from '../../Common/Get_app'

const Cards = () => {


  return (
    <>
      <div className='main-people'>
        <div className='people'>
          <span className='people-card'>WHAT PEOPLE ARE SAYING</span>
          <div className='dots' >
            <hr className='hr1' />
            <hr className='hr2' />
            <hr className='hr3' />
          </div>
          <div className='lorem'>
            <p className='p-cards'>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui</p>
            <p className='p-cards'>vel tristique purus justo vestibulum eget lectus non gravida ultrices</p>
            <p className='p-cards'>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui</p>
            <p className='p-cards'>vel tristique purus justo vestibulum eget lectus non gravida ultrices</p>
          </div>
        </div>
      </div>
      <Comp_Carousel />
      <Get_app/>

    </>
  )
}

export default Cards

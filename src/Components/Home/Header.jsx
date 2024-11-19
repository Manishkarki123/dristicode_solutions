import React from 'react'
import Navbar from '../../Common/Navbar'
import bg from "../../images/home_img/bg.png"
import iphone1 from "../../images/home_img/iphone1.png"
import iphone2 from "../../images/home_img/iphone2.png"
import "../../style/home/header.css"
import { useState,useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
   
  useEffect(() => {
    AOS.init({
      disable:'phones',
      once: true,
      duration:700,
      easing: "ease-out-cubic",
    }); 
  }, []);

  return (
    <div style={{}} className='header-main'>
      <div>
        <Navbar />
        <div
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'top', minHeight: '100vh', width: '100%', backgroundRepeat: 'no-repeat' }}
          className="bg-img">
          <div style={{}}>
            <div className='' style={{ width: '80%', margin: 'auto' }}>
              <div className='text' style={{ zIndex: '-1', marginTop: '9rem', position: 'absolute', top: '10%' }}>
                <p className='text1'>A great app makes </p>
                <p className='text1'>your life better</p>
                <div className='text2'>
                  <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec
                  </p>
                  <p className=''>vulputate tempus velit nam id
                    purus tellus hendrerit mi dapibus.</p>
                  <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec
                  </p>            
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='iphones'>
          <img data-aos='fade-right' 
          src={iphone1} alt="iphone1" className='iphone1' 
          />
          <img 
          src={iphone2} alt="iphone2" className='iphone2' 
          />
        </div>

      </div>
    </div>
  )
}

export default Header

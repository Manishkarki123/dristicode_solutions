import React from 'react'
import '../style/home/getapp.css'
import getapp from '../images/home_img/getapp_phone.png'
import playstore from '../images/home_img/playstore.png'
import appstore from '../images/home_img/appstore.png'
import bg_getapp from '../images/home_img/bg_getapp.png'

const Get_app = () => {

  return (
    <div className='first' style={{backgroundImage:`url(${bg_getapp})`,backgroundSize:'cover',backgroundPosition:'top',backgroundRepeat:'no-repeat', minHeight:'100vh',width:'100%',marginTop: '3rem' }} >

      <div className='main-getapp'>
        <div className='getapp'>
          <span className='getapp-span'>GET APP NOW</span>
          <div className='getapp-hr'>
            <hr style={{ gap: '0', width: '50px', height: '0', borderTop: '2px dotted ', borderTopColor: 'blue' }} />
            <hr style={{ gap: '0', width: '30px', borderTop: '5px  dotted blue' }} />
            <hr style={{ gap: '0', width: '50px', height: '0', borderTop: '2px dotted', borderTopColor: 'blue' }} />
          </div>
          <div className='getapp-text'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit donec
            tempus pellentesque dui vel tristique purus justo vestibulum
            eget lectus non gravida ultrices Lorem ipsum dolor sit amet consectetur adipiscing elit donec
            tempus pellentesque dui vel tristique purus justo vestibulum
            eget lectus non gravida ultrices
          </div>
          <div style={{}} className='download'>
            <span className='download-span'>
              DOWNLOAD FROM:
            </span>
            <div className='download-btn'>
              <button className='app-store-google-btn'> <img className='app-store-image' src={playstore} alt="" /></button>
              <button className='app-store-google-btn'><img className='app-store-image' src={appstore} alt="" /></button>
            </div>
          </div>
        </div>

      </div>
      <div className='image-getphone'>
        <img className='getapp-phone' src={getapp} alt="Get App Now" />
      </div>
    </div>

  )
}

export default Get_app
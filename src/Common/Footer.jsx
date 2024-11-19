import React from 'react'
import footerImg from '../images/home_img/footer_bg.jpg'
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import '../style/home/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-bg' style={{ backgroundImage: `url(${footerImg})` }}>
        <div className='footer-flex'>
          <div className='footer-topic'>
            <span className='footer-txt'>JOIN OUR NEWSLETTER</span>
            <div className='footer-dots' >
              <hr className='footer-hr1' />
              <hr className='footer-hr2' />
              <hr className='footer-hr3' />
            </div>
            <div className='footer-lorem'>
              <p className='p-cards'>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui</p>
              <p className='p-cards'>vel tristique purus justo vestibulum eget lectus non gravida ultrices</p>
              <p className='p-cards'>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui</p>
              <p className='p-cards'>vel tristique purus justo vestibulum eget lectus non gravida ultrices</p>
            </div>

            <div className='inp-btn'>
              <input className='input' type="text"  placeholder='Enter Email' />
              <button className='footer-btn' type='submit'>
                <span id='btn' className='span-btn'>SUBSCRIBE</span>
                <span className='paper-icon'> <FaPaperPlane /></span>

              </button>
            </div>
            <div className='copyright'>
              <div className='' style={{ display: 'flex', flexBasis: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <span><MdOutlineCopyright style={{ fontSize: '1.3rem' }} /> </span>
                <span> Copyright</span>
              </div>
              <strong> by Faded 2016. All right reserved.</strong>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer
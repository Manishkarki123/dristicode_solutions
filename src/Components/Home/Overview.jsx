import React from 'react'
import '../../style/home/overview.css'
import { overview_Data } from '../../data/home/overview'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Overview = () => {
  useEffect(() => {
    AOS.init({
      disable: 'phones',
      once: true,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className='main-overview'>
      <div className='overview'>
        <span className='span-over' style={{ textAlign: 'center', fontSize: '30px', fontWeight: '500' }}>OVERVIEW</span>
        <div className='line' style={{ marginBottom: '0.7rem', display: 'flex', flexDirection: 'row', gap: '0.3rem', justifyContent: 'center', alignItems: 'center' }}>
          <hr style={{ width: '40px', height: '0', borderTop: '1px dotted', borderTopColor: 'blue' }} />
          <hr style={{ width: '10px', borderTop: '3px  dotted blue' }} />
          <hr style={{ width: '40px', height: '0', borderTop: '1px dotted', borderTopColor: 'blue' }} />
        </div>
        <div className='para'>
          <p className='lorem1'>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui</p>
          <p className='lorem2'>vel tristique purus justo vestibulum eget lectus non gravida ultrices</p>
        </div>

        <div className='card'>
          {overview_Data.map((elem, id) => {
            return <div data-aos='flip-up' key={id} className='values' >
              <span style={{ fontSize: '50px' }} className='icon'>  {elem.icon}  </span>
              <div className='line' style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'row', gap: '0.3rem', justifyContent: 'center', alignItems: 'center' }}>
                <hr style={{ width: '40px', height: '0', borderTop: '2px solid blue ', borderTopColor: 'blue' }} />

              </div>
              <span className='title' style={{ marginBottom: '15px', fontSize: '20px', fontWeight: '600' }}>
                {elem.title}
              </span>
              <span style={{ marginBottom: '10px', fontSize: '15px' }} className='descrip1'>
                {elem.description1}
              </span>
              <span style={{ marginBottom: '10px', fontSize: '15px' }} className='descrip2'>
                {elem.description2}
              </span>
              <span style={{ fontSize: '15px' }} className='bio'>
                {elem.bio}
              </span>
            </div>
          }
          )}
        </div>

      </div>

    </div>

  )
}

export default Overview

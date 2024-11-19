import React from 'react'
import Navbar from '../../Common/Navbar'
import '../../style/faq/faq.css'
import faq_img from '../../images/faq_img/faq1.png'
import { faq_Data } from '../../data/faq/faq'
import { useState } from 'react'
import Get_app from '../../Common/Get_app'
const Faq = () => {

  const [toggle, setToggle] = useState(null);


  const toggleVisible = (id) => {
    setToggle(prev => (prev === id ? null : id));
  };

  return (
    <div>
      <Navbar />
      <div className='works_bg'>
        <div className='works-main'>
          <div className='span-div'>
            <span className='span-work-text1'>Frequently Asked Questions</span>
            <span className='span-work-text2'>Lorem ipsum dolor sit amet consectetur adipiscing elit
              donec tempus pellentesque dui vel
              tristique purus justo vestibulum eget lectus non
              gravida ultrices Lorem ipsum dolor sit amet consectetur adipiscing elit
              donec tempus pellentesque dui vel
              tristique purus justo vestibulum eget lectus non
              gravida ultrices Lorem ipsum dolor sit amet consectetur adipiscing elit
              donec tempus pellentesque dui vel
              tristique purus justo vestibulum eget lectus non
              gravida ultrices
            </span>
          </div>

        </div>
      </div>

      <div className=' ssm:flex ssm:flex-col ssm:w-5/6 ssm:m-auto faq-main md:w-5/6  md:m-auto md:grid md:grid-cols-2 '>
        <div className='faq-content ssm:mb-20 sd:mb-20 md:mb-0'>
          <div className=' ssm:text-md text-lg text-left'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit donec
            tempus pellentesque dui vel tristiqu purus justo vestibulum eget
            lectus non gravida ultrices
          </div>

          <div className='sd:mb-20 md:mb-0 faq-text-content'>
            {faq_Data.map((elem) => (

              <div key={elem.id} className='faq-content-head'>
                <div className='text-base flex flex-row justify-between items-center p-8 m-2 h-10 w-full bg-backgroundGrey'>
                  <span className= {toggle === (elem.id) ? 'text-customBlue ' : 'text-customBlack'}>
                    {elem.topic}
                  </span>
                  <button 
                    onClick={() => toggleVisible(elem.id)}
                   className= { toggle === (elem.id) ? ' plus-btn border-2 border-solid border-customBlue w-6 h-5 pb-1  text-customBlue ' : ' plus-btn border-2 border-solid border-customBlack w-6 h-5 pb-1  text-customBlack'}
                    >
                    {toggle === (elem.id) ? <span className='w-full'>-</span> : <span className='w-full'>+</span>
                    }
                  </button>
                </div>

                {(toggle === elem.id) &&

                <div className=  ' flex text-sm pl-20 '>
                    <span className=' h-20 border-l-2 border-gray-500 border-dotted w-4'></span>
                    <span className=' text-center '>{elem.content}</span>
                </div>
                }
              </div>
            )
            )}
          </div>
        </div>
        <img className='ssm:translate-x-10  ssm:-z-20 ssm:mt-80 ssm:absolute ssm:top-100 ssm:-bottom-90 ssm:translate-y-60  md:-z-0 md:relative md:translate-y-0 md:mt-0 md:translate-x-40  translate-x-20 w-5/6   object-contain ' src={faq_img} alt="" />
      </div>
      <Get_app />
    </div>
  )
}

export default Faq

import React from 'react'
import '../../style/pricing/pricing.css'
import Navbar from '../../Common/Navbar'
import { pricing_Data } from '../../data/pricing/pricing'
const Pricing = () => {
    return (
        <div className='pricing-top'>
            <Navbar />
            <div className='works_bg'>
                <div className='works-main'>
                    <div className='span-div'>
                        <span className='span-work-text1'>PRICING PLAN</span>
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
            <div className='pricing-card'>
                <div className='pricing-row'>

                    {pricing_Data.map((elem, index) => {
                        return (
                            <div key={elem.id} className={`${index === 1 ? 'pricing-big-col' : 'pricing-col'}`}>
                                <div className='pricing-head'>
                                    <h1 className={` ${index === 0 ? 'pricing-h1' : index === 1 ? 'pricing-h2' : 'pricing-h3'}`}>
                                        {elem.title}
                                    </h1>

                                    <span className='pricing-span'>
                                        {elem.icon}
                                    </span>
                                    <hr className='pricing-hr' />

                                </div>
                                <div className='pricing-content'>
                                    <h1>
                                        {elem.text1}
                                    </h1>
                                    <h1>
                                        {elem.bandwidth}
                                    </h1>
                                    <h1>
                                        {elem.storage}
                                    </h1>
                                    <h1>
                                        {elem.email}
                                    </h1>
                                    <h1>
                                        {elem.disk}
                                    </h1>
                                    <h1 className={`${index===0 ? 'pricing-h1' : index === 1 ? 'pricing-h2' : 'pricing-h3'}`}>
                                        {elem.price}
                                    </h1>
                                </div>
                                <hr className='pricing-hr' />
                                <div>
                                    <button className='pricing-btn'>
                                        <h1 className='pricing-order-h1'>Order Now</h1>
                                    </button>
                                </div>



                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Pricing

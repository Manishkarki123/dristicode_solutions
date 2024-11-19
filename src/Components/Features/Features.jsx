import React from 'react'
import '../../style/works/works_header.css'
import '../../style/feature/features.css'
import Navbar from '../../Common/Navbar'
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineDiamond } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import feature_phone from '../../images/feature_img/feature_phone.png'
const Features = () => {
    return (
        <div>
            <Navbar />
            <div className='works_bg'>
                <div className='works-main'>
                    <div style={{}} className='span-div'>
                        <span className='span-work-text1'>MAIN FEATURES</span>
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
            <div className='feature-main'>
                <div className='feature-col1'>
                    <div className='feature-card1'>
                        <span ><MdOutlinePhoneAndroid className='icon-phone' /></span>
                        <div>
                            <h4>Retina Ready</h4>
                            <hr style={{ height: '0', width: '30px' }} />
                            <span style={{ textAlign: 'center' }} className='login-para'>
                                Integer quis mollis lacus maecenas in
                                ornare ex sed scelerisque nec elit nec
                                vehicula duis pretium libero
                            </span>
                        </div>
                    </div>
                    <div className='feature-card2'>
                        <span >< MdOutlineDiamond className='icon-phone' /></span>
                        <div>
                            <h4>Unique Design</h4>
                            <hr style={{ height: '0', width: '30px' }} />
                            <span style={{ textAlign: 'center' }} className='login-para'>
                                Duis finibus odio sit amet nisi dictum et
                                viverra libero semper donec consectetur
                                ultrices ante ac vehicula.
                            </span>
                        </div>
                    </div>

                </div>
                <img className='feature-phone' src={feature_phone} alt="" />

                <div className='feature-col2'>
                    <div className='feature-card3'>
                        <span ><FaCode className='icon-phone' /></span>
                        <div>
                            <h4>Clean Code</h4>
                            <hr style={{ height: '0', width: '30px' }} />
                            <span style={{ textAlign: 'center' }} className='login-para'>
                                Praesent sit amet felis consequat dui
                                sit amet dignissim arcu dignissim
                                ultrices massa ut pulvinar.
                            </span>
                        </div>
                    </div>
                    <div className='feature-card4'>
                        <span ><CiDroplet className='icon-phone' /></span>
                        <div>
                            <h4>Perfect Pixel</h4>
                            <hr style={{ height: '0', width: '30px' }} />
                            <span style={{ textAlign: 'center' }} className='login-para'>
                                Cras eget consequat justo pellentesque
                                sodales metus metus lacinia dolor
                                aliquam id donec vitae sapien
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features

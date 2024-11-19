import React from 'react'
import '../../style/works/works_header.css'
import Navbar from '../../Common/Navbar'
import phone_lg1 from "../../images/works_img/phone_lg1.png"
import phone_sm1 from "../../images/works_img/phone_sm1.png"
import phone_sm2 from "../../images/works_img/phone_sm2.png"
import Get_app from '../../Common/Get_app'
import Footer from '../../Common/Footer'

const Works_Header = () => {
    return (
        <div>
            <div style={{ position: '' }}>
                <Navbar />
                <div className='works_bg'>
                    <div className='works-main'>
                        <div style={{}} className='span-div'>
                            <span className='span-work-text1'>HOW IT WORKS</span>
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
                <div className='work-phones' style={{}}>
                    <div className='section1' style={{}}>
                        <img className='ph_sm1' src={phone_sm1} alt="Small Phone" />
                        <div className='content1' style={{}}>
                            <span className='number' >
                                01
                            </span>
                            <h4>Login App</h4>
                            <hr style={{ height: '0', width: '30px' }} />
                            <span style={{ textAlign: 'center', }} className='login-para'>
                                Duis finibus odio sit amet nisi dictum et viverra libero semper donec
                            </span>
                        </div>

                    </div>

                    <div className='section2' style={{}}>
                        <img className='ph_lg1' src={phone_lg1} alt="Small Phone" />
                        <div className='content2' style={{}}>
                            <span className='number' >
                                02
                            </span>
                            <h4>Data Analysis</h4>
                            <hr style={{ height: '0', width: '50px' }} />
                            <span style={{ textAlign: 'center', }} className='login-para'>
                                Duis finibus odio sit amet nisi dictum et viverra libero semper donec
                            </span>
                        </div>

                    </div>

                    <div className='section3' style={{}}>
                        <img className='ph_sm2' src={phone_sm2} alt="Small Phone" />
                        <div className='content3' style={{}}>
                            <span className='number' >
                                03
                            </span>
                            <h4>Show Result</h4>
                            <hr style={{ height: '0', width: '30px' }} />
                            <span style={{ textAlign: 'center', }} className='login-para'>
                                Duis finibus odio sit amet nisi dictum et viverra libero semper donec
                            </span>
                        </div>

                    </div>

                </div>
                <Get_app/>
                <Footer/>

            </div>

        </div>
    )
}

export default Works_Header

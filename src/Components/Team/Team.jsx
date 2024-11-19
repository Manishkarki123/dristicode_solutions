import React from 'react'
import '../../style/team/team.css'
import { team_Cards } from '../../data/team/team.js'
import { team_Media } from '../../data/team/team.js'

import Navbar from '../../Common/Navbar.jsx'

const Team = () => {
    return (

        <div className='team-top'>
            <Navbar />
            <div className='works_bg'>
                <div className='works-main'>
                    <div className='span-div'>
                        <span className='span-work-text1'>MY TEAM</span>
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
            <div className='team-main'>
                <div className='team-content'>

                </div>
                
            </div>
            <div className='team-row'>
                {team_Cards.map((elem) => {
                    return (<div className='team-item-col'>
                        <img className='team-img' src={elem.img} alt="cards" />
                        <h1 style={{ fontWeight: '700', fontSize: '1.5rem', color: '#606060' }}>{elem.name}</h1>
                        <h2 style={{ color: '#606060' }}>{elem.position}</h2>
                        <hr className='team-hr' />
                        <div className='team-media'>
                            {team_Media.map((elem) => {

                                return (<div>
                                    <span className='team-span'>{elem.fb}</span>
                                    <span className='team-span'>{elem.twitter}</span>
                                    <span className='team-span'>{elem.instagram}</span>
                                    <span className='team-span'>{elem.linkedin}</span>
                                    <span className='team-span'>{elem.pi}</span>
                                </div>

                                )
                            })}

                        </div>
                    </div>)
                })}
            </div>
        </div>

    )
}

export default Team

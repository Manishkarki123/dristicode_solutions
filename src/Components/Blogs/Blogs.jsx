import React from 'react'
import { blog_Cards } from '../../data/blog/blog.js'
import Navbar from '../../Common/Navbar.jsx'
import moment from 'moment/moment.js'
import '../../style/blog/blog.css'
import { Link } from 'react-router-dom'
const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className='works_bg'>
        <div className='works-main'>
          <div className='span-div'>
            <span className='span-work-text1'>BLOG LIST</span>
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

      <div style={{ gap: '5rem' }} className='team-row'>
        {blog_Cards.map((elem) => {
          const formattedDate = moment(elem.date).format('YYYY-MM-DD');
          return (<div key={elem.id} style={{ backgroundColor: '#F9F9F9' }} className='team-item-col'>
            {console.log(elem.id)}
            <img className='team-img' src={elem.img} alt="cards" />
            <h1 style={{ fontWeight: '700', fontSize: '1.5rem', color: '#606060' }}>{elem.name}</h1>
            <h2 style={{ color: '#606060' }}>{elem.position}</h2>
            <div className='blog-item'>
              <span className='blog-topic'>{elem.topic}</span>
              <h2 style={{ color: '#606060' }}>{formattedDate}</h2>
              <span className='blog-content'>{elem.content}</span>
              <Link to={`/blog/readmore/${elem.id}`} className='blog-link' >READMORE...</Link>
            </div>
          </div>)
        
        })}
      </div>
    </div>
  )
}

export default Blogs

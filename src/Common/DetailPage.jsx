import React from 'react'
import { useEffect } from 'react'
import { detail_Data } from '../data/blog/blog'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import Navbar from '../Common/Navbar'
import { FaQuoteLeft } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { Comment } from '../data/blog/blog'
import '../style/detail/detail.css'

const DetailPage = () => {
  useEffect(() => {
    const handleColorChange = () => {
      document.getElementById('textarea').style['-webkit-box-shadow'] = '0 12px 20px 0 rgba(0, 0, 0, 0.414), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }

    const inputElement = document.getElementById('textarea');
    inputElement.addEventListener('click', handleColorChange);

    return () => {
      const removeElement = document.getElementById('textarea');
      removeElement.removeEventListener('click', handleColorChange);
    };

  }, [])

  const { id } = useParams();
  console.log(typeof id);
  const detail = detail_Data.filter((data) => data.id === id)[0];
  const dateFormat = moment(detail.date).format('YYYY-MM-DD');
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: '6rem' }} className='works_bg'>
        <div className='works-main'>
          <div className='span-div'>
            <span className='span-work-text1'>BLOG DETAILS</span>
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
      <div className='detail-main col'>
        <img src={detail.img} alt="photos" />
        <div style={{ marginTop: '2rem', fontWeight: '500', fontSize: '1.7rem' }}>
          {detail.topic}
        </div>
        <div className='date'>
          <CiCalendar />
          <span>
            {dateFormat}
          </span>
        </div>
        <div style={{ color: '#666666' }}>
          {detail.description1}
        </div>
        <div style={{ marginBottom: '1.5rem', color: '#666666' }}>
          {detail.description2}
        </div>
        <div className='quote-text'>
          <FaQuoteLeft style={{ fontSize: '1.5rem', color: '#4776E6' }} />
          <span style={{ color: '#4776E6', marginLeft: '1.5rem' }}>
            Curabitur ut efficitur ex ut tempus lacus morbi pretium convallis elit cursus nibh condimentum in etiam faucibus leo a dapibus rutrum.
          </span>
        </div>
        <div style={{ marginTop: '1.5rem', color: '#666666' }}>
          {detail.description3}
        </div>

        <div className='detail-media'>
          <span style={{ fontSize: '1.3rem' }}>SHARE IT</span>
          <div className='grid-media'>
            {detail.media.map((elem, index) => {
              return <span key={index} className='span-media'>{elem}</span>
            })}
          </div>

        </div>
        <span style={{ fontSize: '1rem', fontWeight: '650' }}>THERE ARE 03 COMMENTS IN THIS POST</span>
        <div className='vlog-main'>
          {
            Comment.map((elem, index) => {
              return <div key={index} className='vlog-row'>
                <img className='detail-img' src={elem.img} alt="Image" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
                  <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', gap: '0.3rem' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: '650' }}>
                      {elem.name}
                    </div>
                    <hr style={{ width: '30px' }} />
                    <div style={{ color: '#A1A1A1', fontStyle: 'italic' }}>
                      {elem.time}
                    </div>
                  </div>

                  <div style={{ color: '#666666', textAlign: 'center' }}>
                    {elem.about}
                  </div>
                </div>

              </div>
            })
          }
        </div>
        <span style={{ fontWeight: '700', marginBottom: '1.5rem' }}>
          LEAVE A COMMENT
        </span>
        <div className='field' >
          <div >
            <form className='field-main' action="#">
              <div className='field-row'>
                <input className="field-inp" type="text" name="username" id="field-input" placeholder='Your Name' />
                <input className='field-email' type="email" placeholder='Your Email' />
              </div>
              <textarea id='textarea' rows='6' style={{ border: '2px solid green', color: '#9CA3AF' }} name='textarea' > Type Here... </textarea>
              <button>Post a Comment</button>
            </form>

          </div>

          <div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailPage

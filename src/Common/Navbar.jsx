import React from 'react'
import { Drawer, Box, Button, Divider } from '@mui/material';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo_faded from '../images/home_img/logo-faded.png'
import logo_faded_blue from '../images/home_img/logo-faded-blue.png'
import sidebar from '../images/home_img/sidebar.png'
import '../style/home/navbar.css'
import { Dropdown_Works, features_Dropdown } from '../data/home/navbar.js'
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [feature_drop, setFeatureDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);


  // function Onscroll navbar//
  const scrollNavbar = () => {
    if (window.scrollY > 0) {
      setNavbar(true);

    }
    else {
      setNavbar(false);

    }
  }

  //event listener to work on scroll
  window.addEventListener('scroll', scrollNavbar);


  //open the drawer
  const openDrawer = () => {
    setDrawer(prev => !prev);
    setMenu(false);
  }

  const clickDropDown = () => {
    setDropdown(prev => !prev);
  }


  const clickfeatureDropDown = () => {
    setFeatureDropdown(prev => !prev);
  }



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  }, [])


  useEffect(() => {
    const breakPoint = 772;
    if (windowWidth > breakPoint) {
      setDrawer(false);
      setMenu(true);
    }
  }, [windowWidth])


  return (
    <div style={{ position: '' }}>

      <div className={navbar ? 'navbar' : ''} style={{ position: 'fixed', top: '0', width: '100%', margin: 'auto', zIndex: 1 }} >

        <div className='top-flex'>

          <div style={{ marginTop: '1.7rem' }} className=''>
            <img src={navbar ? logo_faded_blue : logo_faded} alt="faded art" />
          </div>

          <div className='nav'>
            <Link to="/" id='home' className={navbar ? 'link' : 'span'} ><span className='font'>Home</span></Link>

            <li className='dropdown'>
              <span to="" id='works' className={navbar ? 'link' : 'span'}><span style={{ display: 'flex', flexDirection: 'row', gap: '0.2rem', justifyContent: 'center', alignItems: 'center' }} className='font' >How it Works <RiArrowDropDownLine /></span></span>
              <div className='dropdown-content'>
                {Dropdown_Works.map((elem) => (<Link key={elem.id} to={`${elem.topic}`} id='dropbtn' >{elem.name}</Link>)

                )
                }

              </div>
            </li>

            <li className='dropdown'>
              <Link to="/features" id='feature' className={navbar ? 'link' : 'span'}><span style={{
                display: 'flex', flexDirection: 'row', gap: '0.2rem', justifyContent: 'center',
                alignItems: 'center'
              }} className='font'>Features <RiArrowDropDownLine /></span></Link>
              <div className='dropdown-content'>
                {features_Dropdown.map((elem) => {
                  return (<Link to={`${elem.topic}`} id='dropbtn'>{elem.name}</Link>)
                })
                }
              </div>
            </li>
            <Link to="/main/team" id='team' className={navbar ? 'link' : 'span'} ><span className='font'> Team</span></Link>
            <Link to="/main/pricing" id='price' className={navbar ? 'link' : 'span'}><span className='font'>Pricing</span></Link>
            <Link to="/main/faq" id='faq' className={navbar ? 'link' : 'span'} ><span className='font'>Faq</span></Link>
            <Link to="/blog" id='blog' className={navbar ? 'link' : 'span'} ><span className='font'>Blog</span></Link>
            <Link to="#" id='contact' className={navbar ? 'link' : 'span'} ><span className='font'>Contact</span></Link>
          </div>

          {menu && (<div className='div-menu'>
            <IoMenuSharp onClick={openDrawer} className='menu' />
          </div>

          )}
        </div>
      </div>

      {/* Drawer component to slide the bar */}
      <div className='' style={{}}>
        <Drawer anchor='right' open={drawer} onClose={() => {
          setDrawer(false);
          setMenu(true);
        }}>

          <Box className='drawer-main' sx={{ height: '100vh', backgroundColor: 'lightgrey', minWidth: '30vw' }}>
            <div className={navbar ? 'drop' : 'top-drop'}>
              <div className='side-flex'>
                <img src={sidebar} alt="Sidebar" style={{ objectFit: 'contain', width: '100%', top: '0', left: '0', }} />
              </div>
              <span className='drop-text'><strong>Faded App</strong></span>
              <Divider style={{ backgroundColor: 'black', marginBottom: '1rem' }} />

              <span className='nav-text'><strong>Categories|Navbar</strong></span>
              <Divider style={{ backgroundColor: 'black', marginBottom: '1rem' }} />

              <Button> <Link to="/" className='link-drop'>Home</Link> </Button>
              <Button> <Link to="" className='link-drop'>How it Works</Link>< RiArrowDropDownLine onClick={clickDropDown} style={{ color: 'black', fontSize: '25px' }} /></Button>

              {
                dropdown &&
                <div style={{ backgroundColor: 'white' }} className='drop-transition'>
                  <Link to ="/main/works" className='sub-drop'>Works</Link>
                  <Link className='sub-drop'>Dropdown1</Link>
                  <Link className='sub-drop'>Dropdown2</Link>
                  <Link className='sub-drop'>Dropdown3</Link>

                </div>
              }
              <Button> <Link to="" className='link-drop'>Features</Link> <RiArrowDropDownLine onClick={clickfeatureDropDown} style={{ color: 'black', fontSize: '25px' }} /> </Button>
              {
                feature_drop &&
                <div style={{ backgroundColor: 'white' }} className='drop-transition'>
                  <Link to="/features" className='sub-drop'>Features</Link>
                  <Link className='sub-drop'>Dropdown1</Link>
                  <Link className='sub-drop'>Dropdown2</Link>
                  <Link className='sub-drop'>Dropdown3</Link>

                </div>
              }
              <Button> <Link to="/main/team" className='link-drop'>Team</Link></Button>

              <Button> <Link to="/main/pricing" className='link-drop'>Pricing</Link></Button>

              <Button> <Link to="/main/faq" className='link-drop'>Faq</Link> </Button>

              <Button><Link to="/blog" className='link-drop'>Blog</Link></Button>

              <Button><Link to="" className='link-drop'>Contact</Link></Button>
              <Divider />
            </div>

          </Box>


        </Drawer>

      </div>
    </div>
  )
}
export default Navbar
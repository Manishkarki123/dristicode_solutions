import React from 'react'
import Header from '../../Components/Home/Header'
import Overview  from '../../Components/Home/Overview'
import Cards from '../../Components/Home/Cards'
import Footer from '../../Common/Footer'

const Main = () => {
  return (
    <div>
      <Header/>
      <Overview/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Main

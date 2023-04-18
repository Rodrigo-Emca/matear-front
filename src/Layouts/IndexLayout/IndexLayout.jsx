import React from 'react'
import Header from '../../Pages/Header/Header'
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom'

export default function IndexLayout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer className="footer"/>
    </>
      
    
  )
}

import React from 'react'
import Header from '../Pages/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}
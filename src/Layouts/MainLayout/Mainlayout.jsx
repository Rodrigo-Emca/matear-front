import React from 'react';
// import Header from '../../components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom'
// import Alert from '../../components/Alert/Alert'


function MainLayout() {
    return (
        <div>
            {/* <Header className="header"/> */}
            <Outlet className="outlet"/>
            <Footer className="footer"/>
            {/* <Alert/> */}
        </div>
    );
}

export default MainLayout;
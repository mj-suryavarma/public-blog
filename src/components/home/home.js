import React from 'react';
import Header from '../header/header';
import HomeBody from '../home-body/homeBody';
import Footer from '../footer/footer';
import Login from '../homeLogin/login';

function Home() {
    return (
        <div className='home_page'>
            <Header />
            <Login />
            <HomeBody />
            <Footer />
        </div>
    )
}

export default Home

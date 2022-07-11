import React from 'react';
import Profile from "../Profile/Main"
import Footer from '../Footer/Footer';
import "./Home.css"
import Aboutme from '../Aboutme/Aboutme';
import Studies from '../Studies/Studies';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import ScrollButton from '../Scroll/ScrollButton';



function Home() {
    return (
        <div className='home-container'>
            <Profile/>
            <Footer/>
            <Aboutme/>
            <Studies/>
            <Experience/>
            <Portfolio/>
            <ScrollButton/>
        </div>
    );
}

export default Home;
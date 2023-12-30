
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import './style.css';

const HomePage = () => {
    return (
        <div className='body'>
            <Navbar></Navbar>
            <h1>Welcome to my website!</h1>
            <p>This is the home page.</p>
            <Footer></Footer>
        </div>
    );
};


export default HomePage;

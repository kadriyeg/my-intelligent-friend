import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import EntranceComp from '@/app/components/entrance/page';
import ServiceCard from '@/app/components/services/card/page';
import FeatureCard from '@/app/components/features/card/page';
import Feedback from '@/app/components/feedback/page';
import FileUpload from '@/app/components/fileUpload/page';
import Footer from '@/app/components/footer/Footer';
import './style.css';

const HomePage = () => {
    return (
        <div className='body'>
            <Navbar></Navbar>
            <EntranceComp></EntranceComp>
            <FileUpload></FileUpload>
            <ServiceCard></ServiceCard>
            <FeatureCard></FeatureCard>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};


export default HomePage;

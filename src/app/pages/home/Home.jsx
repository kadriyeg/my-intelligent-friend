import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import EntranceComp from '@/app/components/entrance/page';
import ServiceCard from '@/app/components/services/card/page';
import FeatureCard from '@/app/components/features/card/page';
import FeedbackCard from '@/app/components/feedback/card/page';
import FileUpload from '@/app/components/file-upload/FileUpload';
import Footer from '@/app/components/footer/Footer';
import 'style.css';

const HomePage = () => {
    return (
        <div className='body'>
            <Navbar></Navbar>
            <EntranceComp></EntranceComp>
            <FileUpload></FileUpload>
            <ServiceCard></ServiceCard>
            <FeatureCard></FeatureCard>
            <FeedbackCard></FeedbackCard>
            <Footer></Footer>
        </div>
    );
};


export default HomePage;

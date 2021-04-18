import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer/Footer';
import Header from '../Header/Header';
import Repair from '../Repair/Repair';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <CustomerReview></CustomerReview>
            <Repair></Repair>
            <Footer></Footer>
        </div>
    );
};

export default Home;
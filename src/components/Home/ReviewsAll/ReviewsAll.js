import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Footer/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';


const ReviewsAll = () => {
    return (
        <div>
            <Navbar></Navbar>
           <HeaderMain></HeaderMain>
           <BusinessInfo></BusinessInfo>
           <CustomerReview></CustomerReview>
           <Footer></Footer>
        </div>
    );
};

export default ReviewsAll;
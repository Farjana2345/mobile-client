import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Footer from '../Footer/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const ServiceAll = () => {
    return (
        <div>
            <Navbar></Navbar>
           <HeaderMain></HeaderMain>
           <BusinessInfo></BusinessInfo>
           <Services></Services> 
           <Footer></Footer>
        </div>
    );
};

export default ServiceAll;
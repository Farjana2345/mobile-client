import React from 'react';
import FooterHeader from '../FooterHeader/FooterHeader';
import FooterMain from '../FooterMain/FooterMain';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#060616'}}>
            <FooterHeader></FooterHeader>
            <FooterMain></FooterMain>
        </div>
    );
};

export default Footer;
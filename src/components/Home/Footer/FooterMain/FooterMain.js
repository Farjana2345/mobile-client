import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import mobile from '../../../../images/feature.jpg';
import mobile1 from '../../../../images/m.jpg';
import mobile2 from '../../../../images/mb1.jpg'
import mobile3 from '../../../../images/mb2.jpg'
import mobile4 from '../../../../images/mb3.jpg'
import mobile5 from '../../../../images/mb4.jpg'

const FooterMain = () => {
    return (
        <div className="container">
            <div className="row mt-5 pt-5">
            <div className="col-md-3">
                <div className="about">
                    <h4 className="text-white">ABOUT US</h4>
                    <p className=" mt-4 text-secondary">The first mate and his Skipper too will do their best to make comfortable these are voyages of the need no welfare states star ship enterprise the first mate.</p>
                    <button style={{backgroundColor:'#82b440'}}>GET LOCATION</button>
                </div>
            </div>
            <div className="col-md-3">
                <div className="our-service">
                    <h4 className="text-white" >OUR SERVICES</h4>
                    <p className=" mt-4 text-secondary">SmartPhones</p>
                    <p className="text-secondary">Iphone</p>
                    <p className="text-secondary">Tablet-ipad</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="twitter">
                    <h4 className="text-white">TWITTER FEEDS</h4>
                    <p className=" mt-4 text-secondary">Need no welfare states starship  enterprise...<br/> http://Csb-07/d/Design%20</p>
                    <p className="text-secondary">Welfare states starship...<br/> http://Csb-07/d/Design%20</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="instragrm">
                    <h4 className="text-white">INSTAGRAM</h4>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)'}} className="ins-image mt-4">
                        <img className="img-fluid" style={{width:'100px',height:'70px'}} src={mobile} alt=""/>
                        <img className="img-fluid" style={{width:'100px',height:'70px'}}  src={mobile1} alt=""/>
                        <img className="img-fluid" style={{width:'100px',height:'70px'}}  src={mobile2} alt=""/>
                        <img className="img-fluid" style={{width:'100px',height:'70px'}}  src={mobile3} alt=""/>
                        <img className="img-fluid" style={{width:'100px',height:'70px'}}  src={mobile4} alt=""/>
                        <img className="img-fluid" style={{width:'100px',height:'70px'}}  src={mobile5} alt=""/>
                    </div>
                </div>
            </div>
            
            </div>
            <p style={{paddingBottom:'40px'}} className="text-center text-white"> Copyrights 2017 Catania. All Rights Reserved</p>
        </div>
    );
};

export default FooterMain;
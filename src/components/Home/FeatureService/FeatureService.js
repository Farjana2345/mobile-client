import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faSpaceShuttle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import feature from '../../../images/feature.jpg';
const FeatureService = () => {
    return (
        <div style={{overflow:'hidden',backgroundColor:'#060616'}} className="feature text-white">
              <div className="row">
                    <div className="col-md-6">
                        <div className="texts ms-5 mt-5 pt-5">
                            <h3>WHO WE ARE</h3>
                            <div style={{border:'1px solid',width:'150px',color:'yellow'}}></div>
                            <p className="mt-3">The first mate and his Skipper too will do their very best to make the others bee comfortable in their tropic island nest the love Boat promises something for the everyone michael Knight a young loner on a crusade to champion.</p>
                            <div className="paragrp mt-3">
                                <p> The others comfortable in their tropic island nest the love Boat promises to have something for everyone michael Knight a young loner.</p>
                            </div>
                        </div>
                        <div className="container row mt-4 pt-4">
                            <div className="col-md-4 d-flex justify-content-center">
                                <FontAwesomeIcon style={{fontSize:'50px',color:'#6f9a37'}} icon={faSpaceShuttle} />
                                <h4>FAST <br/> DELIVERY</h4>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center">
                                <FontAwesomeIcon style={{fontSize:'50px',color:'#6f9a37'}} icon={faTachometerAlt} />
                                <h4>LIFETIME <br/> WARRANTY</h4>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center">
                            <FontAwesomeIcon style={{fontSize:'50px',color:'#6f9a37'}} icon={faCertificate} />
                                <h4>CERTIFIED <br/> EXPERTS</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                      <img className="w-100" src={feature} alt=""/>  
                    </div>
                </div>
                 
            </div> 
        
    );
};

export default FeatureService;
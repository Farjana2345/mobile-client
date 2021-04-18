import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FooterHeader.css'

const FooterHeader = () => {
    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col-md-4">
                    <div className="address">
                        <div className="icon bg-secondary">
                            <FontAwesomeIcon style={{fontSize:'40px'}} icon={faMapMarker}/>
                        </div>
                        <div className="details-adress  ms-5">
                            <h5>ADDRESS:</h5>
                            <p>A1099, Duoit Services, New 
                                Alaska, United States.</p>
                            <button>VISIT US</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="address">
                        <div className="icon bg-secondary">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <div className="details-adress ms-5">
                            <h5>EMAIL:</h5>
                            <p>infoservice@support.com
                                supportservice@denim.com</p>
                            <button>VISIT US</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="address">
                        <div className="icon bg-secondary">
                            <FontAwesomeIcon icon={faPhone}/>
                        </div>
                        <div className="details-adress ms-5">
                            <h5>ADDRESS:</h5>
                            <p>1-333-444-8989-00 <br/>
                            1-222-555-7878-03</p>
                            <button>VISIT US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterHeader;
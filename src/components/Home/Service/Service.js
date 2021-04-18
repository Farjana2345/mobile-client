import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const{imageUrl,title,description,price,_id}=props.service;
    return (
        <div className="col-md-4 mt-5 text-center">
            <div className="services">
            <img style={{width:'350px'}} src={imageUrl} alt=""/>
            <h5 className="text-center">{title}</h5>
            <p className="text-center">Service charge: {price}</p>
            <Link to={`/service/${_id}`}><button style={{width:'350px',padding:'10px 0',backgroundColor:'#82b440',border:'none'}}>Book Now</button></Link>
            </div>
            
        </div>

    );
};

export default Service;

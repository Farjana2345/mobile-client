import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://vast-cove-37365.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container">
            <div className="text text-center mt-5 pt-5">
                <h2>OUR EXTREME SERVICES</h2>
                <p>The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest</p>
            </div>
           <div className="row">
               {
                   services.map(service=><Service service={service}></Service>)
               }
            </div> 
        </div>
    );
};

export default Services;
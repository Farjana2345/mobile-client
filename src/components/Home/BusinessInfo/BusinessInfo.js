import React from 'react';
import repair from '../../../images/repair.jpg';
const BusinessInfo = () => {
    return (
        <div style={{backgroundColor:'#58cefe'}} className="container">
           <div className="row">
               <div className="col-md-4">
                    <img style={{width:'200px',height:'150px'}} src={repair} alt=""/>
               </div>
               <div style={{color:'white'}} className="col-md-6 mt-5">
                    <h2>DO YOU NEED A MOBILE REPAIR?</h2>
                    <p>The first mate and his Skipper too will do their best way of card</p>
               </div>
               <div className="col-md-2 mt-5 pt-4">
                    <button style={{border:'none'}} className="p-2">REQUEST A QUOTE</button>
               </div>
            </div> 
        </div>
    );
};

export default BusinessInfo;
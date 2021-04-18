import React from 'react';
import repair from '../../../images/m3.jpg'
import Repairs from './Repairs';
const repairData=[
    {
        img:repair,
        name:"WATER DAMAGE"
    },
    {
        img:repair,
        name:"SCREEN BROKEN"
    },
    {
        img:repair,
        name:"SPEAKER FAILURE"
    }
]
const Repair = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 style={{color:'#82b440'}} className="text-center mt-5">WHAT WE REPAIR</h2>
                <p className="text-center text-secondary">The first mate and his Skipper too will do their very best to make the others comfortable</p>
                {
                    repairData.map(repair=><Repairs repair={repair}></Repairs>)
                }
               
            </div>
          
        </div>
    );
};

export default Repair;
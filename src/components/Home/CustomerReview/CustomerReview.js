import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const CustomerReview = () => {
    const [reviews,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://vast-cove-37365.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data));
    })
    return (
        <div className="bg-light mt-5">
        <div className="container">
            <div className="row">
                <h2 style={{color:'#82b440'}} className="text-center mt-5">TESTIMONIALS</h2>
                {
                    reviews.map(review=><Testimonial review={review}></Testimonial>)
                }
            </div>
        </div>
    </div>   
    );
};

export default CustomerReview;
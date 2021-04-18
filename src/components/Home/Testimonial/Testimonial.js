import React from 'react';

const Testimonial = (props) => {
    const{customer,photoURL,title,text}=props.review;
    return (
        <div className="col-md-4">
            <div className="testimonial text-center shadow p-3 mb-5 bg-body rounded mt-5">
                <div style={{justifyContent:'center',alignItems:'center'}} className="img-area d-flex mt-3 text-secondary">
                    <img className="rounded-circle" src={photoURL} alt=""/>
                    <div className="texts">
                    <h5>{customer}</h5>
                    <p>{title}</p>
                    </div>
                </div>
                <div className="reviews">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
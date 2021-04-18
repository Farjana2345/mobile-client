import React from 'react';
 

const Books = (props) => {
    const{imageUrl,title,description}=props.list;
    return (
        <div className="ms-5 w-75">
                <img className="img-fluid" src={imageUrl} alt=""/>
                  <h6>{title}</h6>
                <p>{description}</p>
            </div>   
    );
};

export default Books;
import React from 'react';

const Repairs = (props) => {
    const{img,name}=props.repair;
    return (
        
        <div className="col-md-4 mt-3">
            <div style={{border:'1px solid gray'}} className="repair-area text-center">
                <img className="img-fluid" src={img} alt=""/>
                <p>{name}</p>
                <p>The first mate and his Skipper too will do <br/>
                    their very best to make the others bee comfortable in their tropic.</p>
            </div>
        </div>
      
    );
};

export default Repairs;
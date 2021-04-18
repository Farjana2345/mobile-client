import React from 'react';
import { Link } from 'react-router-dom';

const Manages = ({manage}) => {
    const handleProductDelete = (id,e) =>{
        fetch(`https://vast-cove-37365.herokuapp.com/deleteItem/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                e.target.parentNode.parentNode.remove()
            }
         })
       
     }
    return (
        <tr>
               
        <td>{manage.title}</td>
        <td>{manage.price}</td>
        <td>{manage.date}</td>
        <td><button onClick={(e)=>handleProductDelete(manage._id,e)}>Delete</button></td> 
        
    </tr> 
    );
};
export default Manages;
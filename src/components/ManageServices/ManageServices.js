import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Manages from '../Manages/Manages';
import Sidebar from '../Sidebar/Sidebar';
const ManageServices = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [manages,setManages]=useState([]);
    useEffect(()=>{
        fetch('https://vast-cove-37365.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setManages(data))
    },[])
    return (
        <div className="container-fluid">
            
           <div className="row">
               <div style={{backgroundColor:'#060616',color:'white',height:'700px'}} className="col-md-3">
                   <Sidebar></Sidebar>
               </div>
               <div className="col-md-9">
               <h4 style={{borderBottom:'2px solid salmon'}} className="text-center p-3">{loggedInUser.name}</h4>
               <table className="table mt-9">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Delete</th>
                                </tr>
                             </thead>
                            <tbody>
                                {
                                    manages.map(manage=><Manages manage={manage}></Manages>)
                                }
                        </tbody>
                    </table>
                </div>    
            </div> 
        </div>
    );
};

export default ManageServices;
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Orders from '../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const[orders,setOrdersList]=useState([]);
    const[loggedInUser,setLoggedInUser]=useContext(UserContext);
    useEffect(()=>{
        fetch('https://vast-cove-37365.herokuapp.com/allorder')
        .then(res=>res.json())
        .then(data=>setOrdersList(data))
    },[]);
    console.log(orders)
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
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                </tr>
                             </thead>
                            <tbody>
                                {
                                    orders.map(lists=><Orders lists={lists}></Orders>)
                                }
                        </tbody>
                    </table>
                </div>    
            </div> 
        </div>
    );
};

export default OrderList;
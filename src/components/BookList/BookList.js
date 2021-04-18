import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Books from '../Books/Books';
import Sidebar from '../Sidebar/Sidebar';

const BookList = () => {
    const[orderList,setOrderList]=useState([]);
    const[loggedInUser,setLoggedInUser]=useContext(UserContext);
    useEffect(()=>{
        fetch('https://vast-cove-37365.herokuapp.com/order?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setOrderList(data))
    },[]);
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{backgroundColor:'#060616',color:'white',height:'700px'}} className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h4 style={{borderBottom:'2px solid salmon'}} className="text-center p-3">{loggedInUser.name}</h4>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)'}} className="order-area">
                    { 
                        
                        orderList.map(list=><Books list={list}></Books>)
                    
                    }
                </div>
                </div>
            </div>
        </div>  
    );
};

export default BookList;
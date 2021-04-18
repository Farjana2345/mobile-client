import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import mb from '../../images/mobile.jpg';
import firebase from "firebase/app";
const Sidebar = () => {

    
    const handleLogOut = ()=>{
        firebase.auth().signOut()
        .then(res=>{
           setLoggedInUser({})
        })
        .catch((error) => {  
          });
       }

    const[loggedInUser,setLoggedInUser]=useContext(UserContext);
    const[adminEmail,setAdminEmail]=useState(false);
    useEffect(() => {
        fetch('https://vast-cove-37365.herokuapp.com/loginAdminEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdminEmail(data)
            })
    }, [loggedInUser.email])
   
    return (
     
            <div className="sideBar">
                <div className="">
                    <Link style={{color:'#659DBD',fontWeight:'bold'}} class="navbar-brand" to="/"><img style={{width:'80px',height:'70px'}} src={mb} alt=""/></Link>
                    <ul class="nav flex-column">
                            <li class="nav-item">
                                <Link style={{fontWeight:'800px',fontSize:'18px'}} class="nav-link active text-white" aria-current="page" to="/book">Book</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{fontWeight:'800px',fontSize:'18px'}} class="nav-link active text-white" aria-current="page" to="/bookList">Book List</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{fontWeight:'800px',fontSize:'18px'}} class="nav-link active text-white" aria-current="page" to="/review">Review</Link>
                            </li>
                          
                            {adminEmail&& <div>
                        <li class="nav-item">
                           <Link style={{fontWeight:'800px',fontSize:'18px'}} class="nav-link active text-white" aria-current="page" to="/orderlist">Order List</Link>
                       </li>
                       <li class="nav-item">
                           <Link style={{fontWeight:'800px',fontSize:'18px'}} class="nav-link text-white" to="/addservice">Add Service</Link>
                       </li>
                       <li class="nav-item">
                           <Link style={{fontWeight:'800px',fontSize:'18px'}} class="nav-link text-white" to="/makeadmin">Make Admin</Link>
                       </li>
                       <li class="nav-item">
                           <Link style={{fontWeight:'800px',fontSize:'18px'}} class="nav-link text-white" to="/manageservice">Manage Services</Link>
                       </li>
                    </div>}
                    {loggedInUser.email?
                                <Link  to="/login" onClick={handleLogOut}><button style={{backgroundColor:'skyblue',border:'none',padding:'8px 20px',color:'white'}}className="log">LogOut</button></Link>
                                :<Link to="/login"><button className="log">LogIn</button></Link>    
                            }
                    </ul>
                 </div>
            </div>
        

    );
};

export default Sidebar;
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Sidebar/Sidebar';
const MakeAdmin = () => {
    const { register, handleSubmit,errors } = useForm();
    const[admin,setAdmin]=useState([]);
    const onSubmit = data => {
        const newAdmin={
            email:data.email
        };
        fetch('https://vast-cove-37365.herokuapp.com/addAdmin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newAdmin)
        })
        .then(res=>{
            if(res){
                alert('successfully');
            }
        })

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{backgroundColor:'#060616',color:'white',height:'700px'}} className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                <h1 className="admins">Make Admin</h1>
                    <div className="form-area">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="name">Email:</label>
                                    <input class="form-control " name="email"  ref={register} placeholder="Admin email"/>
                                    <input style={{width:'150px',padding:'7px 0',marginTop:'5px',backgroundColor:'#3aafa9',color:'white'}} type="submit" value="save"/>
                                </div>   
                            </div>
                        </form>
                    </div>    
                </div>
            </div>      
        </div>
    );
};

export default MakeAdmin;
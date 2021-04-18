import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';


const Review = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser)
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        const reviews = {
            ...loggedInUser,
            ...data
        };
        const url='https://vast-cove-37365.herokuapp.com/addReview';
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(reviews)
        })
        .then(result=>{
            if(result){
                alert("Your Review Was Successfully");
            }
        })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{backgroundColor:'#060616',color:'white',height:'800px'}} className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                <h4 style={{borderBottom:'2px solid salmon'}} className="text-center p-3">{loggedInUser.name}</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input class="form-control w-50" name="customer"  ref={register} placeholder="Your name"/><br/>
                    <input class="form-control w-50 " name="title"  ref={register} placeholder="Product name"/><br/>
                    <input style={{padding:"40px 0"}} class="form-control w-50 " name="text"  ref={register} placeholder="Description"/><br/>
                            
                    <input style={{width:'150px',padding:'7px 0',marginTop:'5px',backgroundColor:'#3aafa9',color:'white'}} type="submit" value="save"/>         
                            
                </form>
                </div>
            </div>
        </div>
    );
};

export default Review;
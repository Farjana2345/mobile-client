import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const GetBooking = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext);
    const{_id}=useParams();
    const[booking, setBooking]=useState({});
    useEffect(()=>{
        fetch(`https://vast-cove-37365.herokuapp.com/service/${_id}`)
        .then(res=>res.json())
        .then(data=>setBooking(...data));
    },[_id]);
    const{imageUrl,description}=booking;
   console.log(booking);
    const { register, handleSubmit,errors } = useForm();
    const[orders,setOrder]=useState(null);
    const onSubmit = data => {
        setOrder(data);
    };
    const handlePayment = paymentId =>{
        const order={
            ...orders,
            paymentId,
             imageUrl,
             description,
             date:new Date()
        };
        const url ='https://vast-cove-37365.herokuapp.com/addOrder';
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(order)
        })
        .then(result=>{
            if(result){
                alert('Successfully');
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
                <h4 style={{borderBottom:'2px solid salmon'}} className="text-center p-3">{loggedInUser.name}</h4>
                    <div style={{display:orders ? 'none':'block'}} className="getBook">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input class="form-control w-50" name="name" value={loggedInUser.name} ref={register}/><br/>
                            <input class="form-control w-50" name="email" value={loggedInUser.email} ref={register}/><br/>
                            <input class="form-control w-50" name="title" value ={booking.title} ref={register}/><br/>
                            <input class="form-control w-50" name="price" value ={booking.price} ref={register}/><br/>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radio" id="exampleRadios2" value="option2"/>
                                <label class="form-check-label" for="radio">
                                    payment credit card
                                </label>
                            </div>
                            <input style={{backgroundColor:'skyblue',border:'none',padding:'8px 20px',color:'white'}} type="submit" />
                        </form>
                    </div>
                    <div style={{display:orders ? 'block':'none'}} className="payment-area">
                        <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetBooking;
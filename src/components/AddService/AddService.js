import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../App';

const AddService = () => {
        const[imageUrl, setImageUrl]=useState(null);
        const[loggedInUser,setLoggedInUser]=useContext(UserContext);
        const { register, handleSubmit,errors } = useForm();
        const onSubmit = data => {
            const productData ={
                ...loggedInUser,
                title : data.title,
                imageUrl : imageUrl,
                price : data.price,
                description : data.description,
                date:new Date()
               
            };
            const url = 'https://vast-cove-37365.herokuapp.com/addService';
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(productData)
            })
            .then(res=>console.log('server site response', res));
        };
    
        const handleImage = event =>{
            console.log(event.target.files)
            const imageData = new FormData();
            imageData.set('key', '48cdb70d449cb4acbd4362f065b671cc');
            imageData.append('image', event.target.files[0]);
    
            axios.post('https://api.imgbb.com/1/upload', imageData)
              .then(function (response) {
                setImageUrl(response.data.data.display_url);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{backgroundColor:'#060616',color:'white',height:'700px'}} className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <div className="form-area">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="row">
                            <h4 style={{borderBottom:'2px solid salmon'}} className="text-center p-3">{loggedInUser.name}</h4>
                                <div class="col-md-6">
                                    <label for="name">Service Title:</label>
                                    <input class="form-control " name="title"  ref={register} placeholder="Title"/><br/>
                                    <label for="description">Description:</label>
                                    <input style={{padding:"40px 0"}} name="description"  class="form-control" ref={register}/><br/>
                                </div>
                                <div class="col-md-6">
                                    <label for="price">Service Charge:</label>
                                    <input class="form-control" name="price" placeholder="Service Charge" ref={register}/><br/><br/>
                                    <label for="file">Add Photo : </label>
                                    <input style={{backgroundColor:'white',border:'none'}} type="file"  onChange={handleImage} name="exampleRequired"/>
                                </div>
                                    
                            </div>
                            
                            <input style={{width:'150px',padding:'7px 0',marginTop:'5px',backgroundColor:'#3aafa9',color:'white'}} type="submit" value="save"/>
                            
                        </form>
                    </div>    
                </div>
            </div>      
        </div>
    );
};

export default AddService;
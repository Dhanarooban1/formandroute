import React from 'react'
import '../App.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function Register() {
const [Done,setDone] = useState(false)
const [view,setview] = useState(false)
const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();


console.log("Before updating, isClicked:",Done);
const onsubmit = () =>{
    setDone(true);
    
    console.log("After updating, isClicked:", Done);
}
  return (
    <>
     <div id='Good' >
        {Done ? <h3 id="successMsg">Register Successfully</h3> : null}
        </div>
    <div className=' d-flex  justify-content-center  vh-100'>
 <form  className=' container col-md-6 justify-content-center  navbar navbar-light bg-light row mb-1 ' htmlFor="" id='RegisterPlace' onSubmit={handleSubmit(onsubmit)}>
 <input 
  type="text" 
  name="FirstName" 
  id="FirstName"  
  className='form-control mr-sm-2'
  placeholder="Enter First Name"
  {...register("FirstName", { required: "Please enter your first name!" })}
/>
{errors.FirstName && <p className="input-group-text">{errors.FirstName.message}</p>}

    <input 
    type="text" name=""
     id="LastName"
     placeholder="Enter Last Name"
     {...register("LastName",{ required: "Please enter your Last name!"})}
     />
{errors.LastName && <p className="input-group-text">{errors.LastName.message}</p>}


    <input type="text" 
    name="" id="EmailName" 
    placeholder="Enter Email" 
    {...register("Email",{required: "Please enter your Email!",
    pattern: {
        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        message: "Invalid email",
    },
    })}
    />
    {errors.Email && <p className="input-group-text">{errors.Email.message}</p>}

    <input 
    type="Number" 
    name="" 
    id="EmailName" 
    placeholder="Enter  your Password" 
    {...register("password", {
        required: "password is required",

        minLength: {
          value: 4,
          message: "password must be more than 4 characters",
        },
        maxLength: {
          value: 20,
          message: "password must be less than 20 characters",
        },
      })}
    />
{errors.password && <p className="input-group-text">{errors.password.message}</p>}
    <button className='btn btn-outline-success my-2 my-sm-0' id='Register'>Register</button>
 </form>
    </div>
    {Done ? <h1>{watch("FirstName")}</h1> : null}
    </>
  )
}


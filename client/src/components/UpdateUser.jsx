import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
   const {id} = useParams();

   const[name,setName]= useState();
   const[email,setEmail]= useState();
   const[age,setAge]= useState();
   
   const navigate = useNavigate();

   useEffect(()=>{
      axios.get('http://localhost:3000/getUser/'+id)
      .then(res => {
        console.log(res)
        setName(res.data.name);
        setAge(res.data.age);
        setEmail(res.data.email);
      }).catch(err => console.log(err));
   },[]);

   const Update = (e)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/updateUser/"+id,{name,email,age})
    .then(res =>{ 
      console.log(res)
      navigate('/')  
    })
    .catch(err => console.log(err));
   } 

  return (
    <div className=' bg-cyan-500 w-full h-screen flex items-center justify-center '>
    <div className='bg-white w-[50%] p-3 rounded-md'>
        
       <form onSubmit={Update} className='flex flex-col gap-2'>
        <hr />
        <h2 className='font-bold text-xl'>Update User</h2>
        <hr />
         <label htmlFor="">Name</label>
         <input type="text" placeholder='Enter Name' className='form-control px-4 py-2 border-[1px] border-black outline-blue-400 rounded-md' value={name} onChange={(e)=> setName(e.target.value)} />
         <label htmlFor="">Email</label>
         <input type="email" placeholder='Enter Email' className='form-control px-4 py-2 border-[1px]  border-black outline-blue-400 rounded-md' value={email}  onChange={(e=> setEmail(e.target.value))} />
         <label htmlFor="">Age</label>
         <input type="number" placeholder='Enter Age' className='form-control px-4 py-2 border-[1px] border-black outline-blue-400 rounded-md' value={age}  onChange={(e=> setAge(e.target.value))} />
         <button className='w-24 px-4 py-1 bg-green-500 text-white font-semibold rounded-md'>Update</button>
        </form>
    </div>
  </div>
  )
}

export default UpdateUser
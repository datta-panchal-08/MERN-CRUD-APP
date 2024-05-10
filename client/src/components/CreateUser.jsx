import React, { useState } from 'react';
import axios from 'axios' 
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const[name,setName]= useState();
  const[email,setEmail]= useState();
  const[age,setAge]= useState();
  
  const navigate = useNavigate();


  const Submit = (e) =>{
     e.preventDefault();
      axios.post("http://localhost:3000/createUser",{name,email,age})
      .then(res =>{ 
        console.log(res)
        navigate('/')  
      })
      .catch(err => console.log(err));
  }

  return (
    <div className=' bg-cyan-500 w-full h-screen flex items-center justify-center '>
      <div className='bg-white w-[50%] p-3 rounded-md'>
          
         <form onSubmit={Submit} className='flex flex-col gap-2'>
          <hr />
          <h2 className='font-bold text-xl'>Add User</h2>
          <hr />
           <label htmlFor="">Name</label>
           <input onChange={(e => setName(e.target.value))}  type="text" placeholder='Enter Name' className='form-control px-4 py-2 border-[1px] border-black outline-blue-400 rounded-md'  />
           <label htmlFor="">Email</label>
           <input onChange={(e => setEmail(e.target.value))} type="email" placeholder='Enter Email' className='form-control px-4 py-2 border-[1px]  border-black outline-blue-400 rounded-md' />
           <label htmlFor="">Age</label>
           <input onChange={(e => setAge(e.target.value))} type="number" placeholder='Enter Age' className='form-control px-4 py-2 border-[1px] border-black outline-blue-400 rounded-md'/>
           <button className='w-24 px-4 py-1 bg-green-500 text-white font-semibold rounded-md'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default CreateUser
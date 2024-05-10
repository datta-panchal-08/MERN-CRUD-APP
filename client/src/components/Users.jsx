import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  {Link} from 'react-router-dom';
const Users = () => {
    const [users,setUsers]= useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3000').then(res => setUsers(res.data)).catch(err => console.log(err)); 
    },[])
    
    const deleteUser = (id)=>{
        axios.delete("http://localhost:3000/deleteUser/"+id)
        .then(res => {
            console.log(res);
            window.location.reload();
        }).catch(err => console.log(err))
        ;

    }
  return (
    <div className='h-screen w-full flex bg-cyan-500 items-center justify-center'>
       <div className='   rounded bg-white p-3'>
        <Link to="/create" className='w-28 px-4 py-1 bg-green-500 rounded-md text-white font-semibold '>Add +</Link>
       <table className='border text-center mt-3'>
             <thead>
                <tr className=''>
                    <th className='border-[1px] border-solid border-zinc-300 p-4 ' >Name</th>
                    <th className='border-[1px] border-solid border-zinc-300 p-4 ' >Email</th>
                    <th className='border-[1px] border-solid border-zinc-300  p-4' >Age</th>
                    <th className='border-[1px] border-solid border-zinc-300  p-4' >Action</th>
                </tr>
             </thead>
             <tbody>
             {users.map((user,id) => <tr key={id} className=' text-center p-3'>
                 <td className='border-[1px] border-solid border-zinc-300 p-4 ' >{user.name}</td>
                 <td className='border-[1px] border-solid border-zinc-300 p-4 ' >{user.email}</td>
                 <td className='border-[1px] border-solid border-zinc-300 p-4 ' >{user.age}</td>
                 <td className='border-[1px] border-solid border-zinc-300  flex gap-2 p-4'>
                    <button onClick={(e)=> deleteUser(user._id)} className='px-3 py-1 bg-red-600 text-white rounded-md' >Delete</button>
                   <Link to={`/update/${user._id}`} className='px-3 py-1 bg-green-600 text-white rounded-md'>Update</Link></td>
              </tr>
            )}
              </tbody>
        </table>
       </div>
    </div>
  )
}

export default Users
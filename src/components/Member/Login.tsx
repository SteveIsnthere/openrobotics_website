import React from 'react';
import {useState} from 'react';

const Register = () => {
  const [data,setData] = useState({
      email:"",
      password:"",
  });
  
  return (
    <section className='py-20 lg:py-[120px] overflow-hidden flex flex-col justify-center items-center'>
       <div className="w-full max-w-xs">
        <h1 className='text-red-500 text-2xl font-bold '>Members Only</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
            </label>
            <input value={data.email} onChange={(e) => setData({email:e.target.value , password: data.password})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"></input>
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <input value={data.password} onChange = {(e) => setData({email:data.email,password:e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Register
            </button>
            </div>
        </form>
       </div>
    </section>
  )
}

export default Register;

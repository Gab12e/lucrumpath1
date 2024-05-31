import { data } from 'autoprefixer';
import React, { useState } from 'react';
// import Laptop1 from '../assests/laptop1.png';
import { RxAvatar } from "react-icons/rx";
import fetchData from '../utility/fetchData';
const SignUp = () => {
  let [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    email: '',
    password: ''
  })
  return (
        <div className="border-4 lg:w-[35rem] w-[90%] mt-[4rem] mx-auto flex-col top-0 justify-center rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl ">
          <h1 className="text-teal-500 md:text-2xl sm:3xl text-center text-xl  font-medium cursor-pointer pt-4" style={{ marginBottom: '30px' }}>SIGN UP</h1>
          <RxAvatar className='mx-auto justify-center items-center cursor-pointer shadow-xl border rounded-xl' size={50} />
          <input className='p-3 my-6 mx-auto md:mx-100 py-2  flex w-[90%] lg:w-[30rem] rounded-md text-black' onChange={({target})=> setFormData({...formData, firstName: target.value})} type="firstname" placeholder="ex. lucrumpath" required />
          <input className='p-3 my-6 mx-auto md:mx-100 py-2  flex w-[90%] lg:w-[30rem] rounded-md text-black' onChange={({target})=> setFormData({...formData, middleName: target.value})} type="middlename" placeholder="12345" required />
          <input className='p-3 my-6 mx-auto md:mx-100 py-2  flex w-[90%] lg:w-[30rem] rounded-md text-black' onChange={({target})=> setFormData({...formData, email: target.value})} type="@" placeholder="ex. yourname@gmail.com" required />
          <input className='p-3 my-6 mx-auto md:mx-100 py-2  flex w-[90%] lg:w-[30rem] rounded-md text-black' onChange={({target})=> setFormData({...formData, password: target.value})} type="password" placeholder="password" required />
          <button className="p-3 my-6 mx-auto justify-center py-2 text-center bg-teal-500 flex w-[90%] lg:w-[30rem] rounded-md text-white" onClick={()=>{
            fetchData('signup', {
              method: 'POST',
              data: {
                fullname: formData.firstName + ' ' + formData.middleName,
                password: formData.password,
                email: formData.email
              }},
            (res)=>{
              console.log(res)
            })
            }}>I'M IN</button>
        </div>
    
  )
}
export default SignUp
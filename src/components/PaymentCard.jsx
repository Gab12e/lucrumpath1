import React from 'react';
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PaymentCard = () => {
    return (
        <div className="border-2 lg:w-[40rem] py-2 px-2 w-[90%] mt-[3rem] mx-auto flex-col top-0 justify-center rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl ">
            <div className="container mx-auto">
                <div className=' justify-between mx-auto py-4'>
                    <Link to='/Tradingplan'>
                    <div className='container lg:pl-[10px]'>
                        <FaArrowLeft className="rounded-full cursor-pointer mb-[-3rem] shadow-lg shadow-gray-400 p-2  cursor-pointer hover:scale-105 ease-in duration-500" size={30} />
                    </div>
                    </Link>
                    <div className='text-center'>
                        <h1 className='text-sm lg:text-2xl mt-2 font-semibold'>Setting</h1>
                        <h3 className='font-medium text-[10px] '>Payment</h3>
                    </div>
                </div>
                <div className='px-3'>
                    <h4 className='text-[10px]'>Saved cards:</h4>
                    <div className='flex gap-x-2'>
                        <FaCcPaypal className='mt-1 cursor-pointer' size={40} />
                        <input className='p-1 my-1 mx-auto md:mx-100 py-1  flex w-[100%] lg:w-[35rem] rounded-md text-black' type="middlename" placeholder="Card Number" required />
                    </div>
                    <div className='flex gap-x-2'>
                        <FaCcVisa className='mt-1 cursor-pointer' size={40} />
                        <input className='p-1 my-1 mx-auto md:mx-100 py-1  flex w-[100%] lg:w-[35rem] rounded-md text-black' type="middlename" placeholder="Card Number" required />
                    </div>
                    <div className='flex gap-x-2'>
                        <FaCcMastercard className='mt-1 cursor-pointer' size={40} />
                        <input className='p-1 my-1 mx-auto md:mx-100 py-1  flex w-[100%] lg:w-[35rem] rounded-md text-black' type="middlename" placeholder="Card Number" required />
                    </div>
                </div>
                <div className='px-3'>
                    <p>Add new card</p>
                    <div>
                        <input className='p-1 my-2 mx-auto md:mx-100 py-1  flex w-[100%] lg:w-[100%] rounded-md text-black' type="middlename" placeholder="Cardholder's Name" required />
                        <div className='flex gap-x-1'>
                            <input className='p-1 my-2 mx-auto md:mx-100 py-1  flex w-[50%] lg:w-[50%] rounded-md text-black' type="middlename" placeholder="Card Number" required />
                            <input className='p-1 my-2 mx-auto md:mx-100 py-1  flex w-[30%] lg:w-[30%] rounded-md text-black' type="middlename" placeholder="Expire" required />
                            <input className='p-1 my-2 mx-auto md:mx-100 py-1  flex w-[20%] lg:w-[20%] rounded-md text-black' type="middlename" placeholder="Cvv" required />
                        </div>
                        <button onClick='/' className="p-3 my-2 mx-auto justify-center py-1 text-center bg-teal-500 flex w-[100%] lg:w-[100%] rounded-md text-white">ADD CARD</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaymentCard
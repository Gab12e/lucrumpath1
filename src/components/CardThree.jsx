import React from 'react'
import { Link } from 'react-router-dom'
import WTI from '../assets/img/wti.png';
import GBP from '../assets/img/gbp.png';
import GLD from '../assets/img/gold.jpg';
import AUD from '../assets/img/aud.png';

const CardThree = () => {
    return (
        <div className='lg:py-[2rem] bg-indibg mb-[5rem] lg:mb-[0] h-[100%] bg-cover w-full'>
            <div className='container mx-auto'>
                <h1 className='text-center font-bold pt-2 text-2xl'>Top trading assets and unique market indices</h1>
                <div className="flex mt-10 mb-10 text-[#767EB3] flex-row sm:flex-row  items-center justify-evenly w-full max-w-lg mx-auto rounded-lg sm:max-w-lg last:pl-32 last:pr-50 lg:max-w-lg overflow-x-scroll scrollbar-hide">
                    <Link to="/CardOne">
                        <button className="hover:scale-105 duration-300 hover:bg-white hover:shadow-md mr-2 ml-6 p-24 text-center hover:text-[rgb(75,75,247)] rounded-md font-medium w-[150px] my-1 px-2 py-2">Forex</button>
                    </Link>

                    <Link to="/CardTwo">
                        <button className="hover:scale-105 duration-300 hover:bg-white hover:shadow-md mr-2 ml-2 p-24 text-center hover:text-[rgb(75,75,247)] rounded-md font-medium w-[150px] my-1 px-2 py-2">Cryptocurrencies</button>
                    </Link>

                    <Link to="/CardThree">
                        <button className="hover:scale-105 duration-300 hover:bg-white shadow-md mr-2 ml-6 p-24 text-center hover:text-[rgb(75,75,247)] rounded-md font-medium w-[150px] my-1 px-2 bg-white relative text-blue-500 py-2">Bitcoin</button>
                    </Link>
                </div>

                <div className=' grid grid-col gap-y-4 md:grid-cols-3 gap-x-4 lg:grid-cols-4'>
                    <div className='border p-4 rounded-lg shadow-xl shadow-white w-full h-[20rem]'>
                        <div className='flex py-5 justify-between'>
                            <div className='flex'>
                            <img className='w-4 h-4 m-1' src={WTI} alt="" />
                                West Texas Intermediate
                            </div>
                            <div>
                                0%
                            </div>
                        </div>
                        <div className='flex py-5 justify-between'>
                            <div>
                                <h4 className='text-gray-500'>Bid</h4>
                                <p className='text-teal-700'>71.909</p>
                            </div>
                            <div>
                                <h4 className='text-gray-500'>Ask</h4>
                                <p className='text-teal-700'>71.945</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            <h4>Spread <span>0.035</span></h4>
                            <div className="grid grid-cols-2 gap-4 w-full py-1">
                                <div>
                                    <button className='w-full p-1 text-gray- border border-[green] rounded-lg mt-4 text-[green] '>Buy</button>
                                </div>
                                <div>
                                    <button className='w-full p-1 text-gray- border border-[red]  rounded-lg mt-4 text-[red] '>Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border p-4 rounded-lg shadow-xl shadow-white w-full h-[20rem]'>
                        <div className='flex py-5 justify-between'>
                            <div className='flex'>
                            <img className='w-4 h-4 m-1' src={GBP} alt="" />
                                Silver/USD
                            </div>
                            <div>
                                0%
                            </div>
                        </div>
                        <div className='flex py-5 justify-between'>
                            <div>
                                <h4 className='text-gray-500'>Bid</h4>
                                <p className='text-teal-700'>23.019</p>
                            </div>
                            <div>
                                <h4 className='text-gray-500'>Ask</h4>
                                <p className='text-teal-700'>23.04</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            <h4>Spread <span>0.022</span></h4>
                            <div className="grid grid-cols-2 gap-4 w-full py-1">
                                <div>
                                    <button className='w-full p-1 text-gray- border border-[green] rounded-lg mt-4 text-[green] '>Buy</button>
                                </div>
                                <div>
                                    <button className='w-full p-1 text-gray- border border-[red]  rounded-lg mt-4 text-[red] '>Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border p-4 rounded-lg shadow-xl shadow-white w-full h-[20rem]'>
                        <div className='flex py-5 justify-between'>
                            <div className='flex'>
                            <img className='w-4 h-4 m-1' src={GLD} alt="" />
                                Gold/USD
                            </div>
                            <div>
                                0%
                            </div>
                        </div>
                        <div className='flex py-5 justify-between'>
                            <div>
                                <h4 className='text-gray-500'>Bid</h4>
                                <p className='text-teal-700'>1998.68</p>
                            </div>
                            <div>
                                <h4 className='text-gray-500'>Ask</h4>
                                <p className='text-teal-700'>1998.97</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            <h4>Spread <span>0.3</span></h4>
                            <div className="grid grid-cols-2 gap-4 w-full py-1">
                                <div>
                                    <button className='w-full p-1 text-gray- border border-[green] rounded-lg mt-4 text-[green] '>Buy</button>
                                </div>
                                <div>
                                    <button className='w-full p-1 text-gray- border border-[red]  rounded-lg mt-4 text-[red] '>Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border p-4 rounded-lg  shadow-xl shadow-white w-full h-[20rem]'>
                        <div className='flex py-5 justify-between'>
                            <div className='flex'>
                            <img className='w-4 h-4 m-1' src={AUD} alt="" />
                                Copper/USD
                            </div>
                            <div>
                                0%
                            </div>
                        </div>
                        <div className='flex py-5 justify-between'>
                            <div>
                                <h4 className='text-gray-500'>Bid</h4>
                                <p className='text-teal-700'>8411.34</p>
                            </div>
                            <div>
                                <h4 className='text-gray-500'>Ask</h4>
                                <p className='text-teal-700'>8418.15</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            <h4>Spread <span>6.81</span></h4>
                            <div className="grid grid-cols-2 gap-4 w-full py-1">
                                <div>
                                    <button className='w-full p-1 text-gray- border border-[green] rounded-lg mt-4 text-[green] '>Buy</button>
                                </div>
                                <div>
                                    <button className='w-full p-1 text-gray- border border-[red]  rounded-lg mt-4 text-[red] '>Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardThree
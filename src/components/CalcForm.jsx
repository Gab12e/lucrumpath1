import React, {  useState } from 'react';
import { useEffect } from 'react';

const CalcForm = () => {
  let [open, setOpen] = useState(false)
  let [ethPrice, setEthPrice] = useState(0)
  useEffect(()=>{
    if (!open) {
      var ws = new WebSocket('ws://currencywss.glitch.me/')
      ws.onopen = ()=>{
        setOpen(true)
        console.log('open')
      }
    }
    ws.onmessage=(data)=>{
      let dataObj = JSON.parse(data.data).filter((ele)=> ele.symbol === 'ETHUSD')
      setEthPrice(dataObj[0].price)
    } 
  }, [])
  return (
    <div className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary' data-aos='fade-up' data-aos-offset='500'>
        <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
          <input className='input placeholder:text-darkblue' type="text" placeholder='Enter your hash rate' />
          <select className='select'>
            <option value="">TH/s</option>
            <option value="">H/s</option>
            <option value="">KH/s</option>
            <option value="">MH/s</option>
            <option value="">GH/s</option>
          </select>
          <button className='btn text-white px-8 flex self-start'>Calculate</button>
        </form>
        <div className='mt-24'>
          <div className='text-blue font-medium mb-4'>
            ESTIMATED 24 HOUR REVENUE:
          </div>
          <div className='text-[32px] font-bold mb-3'>
            {ethPrice / 6000} ETH <span className='text-blue'>${ethPrice}</span>
          </div>
          <div className='text-gray-500 tracking-[1%]'>
            Revenue will change based on mining difficulty and Ethereum
          </div>
        </div>
    </div>
  )
};

export default CalcForm;

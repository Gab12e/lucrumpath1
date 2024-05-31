import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import CheckIcon from '@mui/icons-material/Check';
// import ToggleButton from '@mui/material/ToggleButton';

const Demo = () => {
    // const [selected, setSelected] = React.useState(false);

  return (
    <div className=' lg:py-[2rem] bg-demobg h-[45rem] bg-cover w-full'>
        <div className='container mx-auto'>
        <h1 className='text-center pt-[4rem] lg:pb-10 text-xl font-bold'>LUCRUM PATH</h1>
        <div className='grid lg:grid-cols-2'>
            <div className='text-center mt-2 lg:mt-[5rem]'>
                <h1 className='lg:text-center lg:mt-[4rem] font-bold text-lg lg:text-3xl'>Unique trade types. Hundreds of <br />instruments. Financial and derived <br />markets</h1>
                <h2 className='font-medium text-md'>Trade anywhere, anytime.</h2>
                <p className=' text-[10px] lg:text-[15px]'>Ready to join over 2.5 million traders who have chosen Derive as their <br /> trusted broker? Enter your email address to create a free demo account.</p>
            </div>
            <div className=" w-full mt-2 shadow-lg shadow-gray-400 rounded-xl lg:p-2">
              <div className="p-5">
                <form>
                  <div className=" gap-4 w-full">
                    <div className="flex flex-col">
                      {/* <label className="uppercase text-start font-bold text-sm pb-3">Join over 2.5 million traders</label> */}
                      <input className="border-2 rounded-lg p-1 text-black flex border-gray-300 dark:bg-[white]" placeholder='email' type="email" required />
                      <h1>I agree to the terms and condition</h1>
                    </div>
                  </div>
                  <div className="flex flex-col py-1">
                    <Link to='/SignUp'>
                  <button className='w-full p-1 text-gray-  rounded-lg mt-4 bg-[pink] '>Create account</button>
                  </Link>
                  <p className='text-[10px] py-2'>By pressing “Create demo account”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s Security and privacy policy.</p>
                  </div>
                  <button className='w-full p-1 text-black bg-white flex items-center text-center mx-auto justify-center rounded-bl-[1rem] rounded-tr-[1rem] mt-2 '> <FcGoogle size={30} className='rounded-full p-1 justify-between borde text-blue bg-[white] mr-[0.5rem]' />Google</button>
                  <button className='w-full p-1 text-gray- bg-blue flex items-center text-center mx-auto justify-center rounded-bl-[1rem] rounded-tr-[1rem] mt-2 '> <FaFacebookF size={25} className='rounded-full p-1 justify-between borde text-blue bg-[white] mr-[0.5rem]' />Facebook</button>
                  <button className='w-full p-1 text-gray- bg-black flex items-center text-center mx-auto justify-center rounded-bl-[1rem] rounded-tr-[1rem] mt-2  '> <BsApple size={30} className='rounded-full p-1 justify-between text-[white] mr-[0.5rem]' />Apple</button>
                  <h3 className='text-center mt-3'>Already have an account?  
                  <Link to='/SignIn'>
                  <span className='text-[red] py-2 m-2 cursor-pointer'>SignIn</span>
                  </Link>
                  </h3>
                </form>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Demo
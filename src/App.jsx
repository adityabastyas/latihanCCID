import React from 'react'
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";


function Input(props) {
  const { type, label, id, src, src2, src3 ,placeholder, alt, ...rest } = props;
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className='text-base font-semibold text-[#0B132A]'>
        {label}
      </label>
      <div className='border flex  py-4 px-3 gap-2 bg-[#FCFDFE] border-[#DEDEDE] rounded-lg focus-within:border-black'>
        <img src={src} alt={alt} />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...rest}
          className='outline-none w-full text-xs text-[#4F5665]'
        />
      </div>
      <img src={src2} alt={src2} />
      <img src={src3} alt={src3} />

    </div>
  );
}



function App() {
  return (
    <div>
      <div>
        <Input
        src2={<FaEye />}/>
        src3={<IoMdEyeOff />}
      </div>
    </div>
  )
}

export default App
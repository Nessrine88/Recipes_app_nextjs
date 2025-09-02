import React from 'react'

const Confirmation = () => {
  return (
    <div className='px-16 tracking-wide flex items-center h-100dvh justify-center '>
      <div>
       <p className='text-text-secondary font-bold  text-center text-2xl'>Check your email</p>
      <p>We.ve sent the code to your email</p>
     
      <div className='space-x-5 flex justify-center'>
        <button className='w-16 h-16 lg:h-20 lg:w-20  border-2  my-5 rounded-lg'></button>
        <button className='w-16 h-16  lg:h-20 lg:w-20  border-2  my-5 rounded-lg'></button>
        <button className='w-16 h-16 lg:h-20 lg:w-20  border-2  my-5 rounded-lg'></button>
        <button className='w-16 h-16  lg:h-20 lg:w-20 border-2  my-5 rounded-lg'></button>
      </div>
       <p className=''>code expires in: <span>03:12</span></p>
       <div className='space-y-5 my-10'>
        <button className='border-2 border-custom-green w-full py-4 rounded-3xl text-white text bg-primary font-semibold'>Verify</button>
    
      <button className='border-2 border-gray-400 w-full py-4 rounded-3xl text-white text-text-gray text-text-secondary font-semibold'>Send again</button>
       </div> 
      </div>
      
      
    </div>
  )
}

export default Confirmation

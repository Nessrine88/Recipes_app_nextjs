import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
           <p className='text-danger font-bold my-5'>Cancel</p>
<div className="flex flex-col items-center gap-4">
      {/* hidden file input */}
 
      <input type="file" id="fileUpload" className="hidden" />

      {/* styled label as button */}
      <label
        htmlFor="fileUpload"
        className="cursor-pointer h-full w-full p-10 border-2 border-border border-dashed flex justify-center items-center font-medium rounded-xl text-secondary transition"
      >
        <Image src="" alt='image' width={100} height={100} className='boder-2 bg-text border-border '/>
        <div>Upload File</div> 
        <div>(Up to 12 Mb)</div>
      </label>
    </div>
    </div>
    
  )
}

export default Hero

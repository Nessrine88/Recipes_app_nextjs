import Link from "next/link"
import Image from "next/image"
const Signup = () => {
  return (
    <div className="w-1/4 min-w-56 mx-auto mt-[5%] px-4 py-4">
      <h2 className="text-center  text-2xl text-[var(--dark)] font-bold">Welcome !</h2>
      <p className="text-center  py-5 text-lg text-gray-400">Please enter your account here </p>
<div className="space-y-5 w-5xl">
    <div className="relative">
<input type="email" name="Email" id="email" placeholder='Email or phone number' className="w-full py-4  pl-10 rounded-3xl border-2 border-gray-300 focus:border-green-400 focus:outline-none "></input> <br />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <Image src="/email.svg" width= {20} height={20} alt="email icon"/>
  </span>
    </div>
    <div className="relative w-full">
  <input
    type="password"
    placeholder="Password"
    className="w-full py-4 pr-10 pl-10 rounded-3xl border-2 border-gray-300 focus:border-green-400 focus:outline-none"
  />
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <Image src="/lock.svg" width= {20} height={20} alt="email icon"/>
  </span>
</div>
    </div>
 <div className="my-5 space-y-4">
<p className="text-xl text-[var(--dark)]  drop-shadow-lg ">Your Password must contain :</p>
<p className="flex items-center"><Image src="/check.svg" width= {25} height={25} alt="email icon" className="mr-2"/> At least 6 characters</p>
<p className="flex items-center"><Image src="/graycheck.svg" width= {25} height={25} alt="email icon" className="mr-2"/> Contains a number </p>
 </div>

     <button className="bg-green-500 w-full py-4 rounded-3xl text-white mt-10 ">Signup</button>

    </div>
  )
}

export default Signup

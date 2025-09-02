import Link from "next/link"
import Image from "next/image"
const Login = () => {
  return (
    <div className="w-1/4 min-w-56 mx-auto mt-[5%] ">
      <h2 className="text-center  text-2xl text-gray-700 font-bold">Welcome Back</h2>
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
    className="w-full py-4  pl-10 rounded-3xl border-2 border-gray-300 focus:border-green-400 focus:outline-none"
  />
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <Image src="/lock.svg" width= {20} height={20} alt="email icon"/>
  </span>
</div>
    </div>
 

     <p className="text-right my-5 text-gray-500 font-bold tracking-wide">Forgot password ?</p> 
     <button className="bg-green-500 w-full py-4 rounded-3xl text-white ">Login</button>

     <p className="my-5 text-center text-gray-400">Or continue with</p>
     <button className="bg-red-500 w-full py-4 rounded-3xl text-white">Google</button>
     <p className="mt-5 text-center font-bold text-gray-500 ">Don't have any account ? <span> <Link href="#"  className="text-green-500 font-bold">Sign Up</Link></span></p>
    </div>
  )
}

export default Login

import { useState } from "react"
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import registerImg from "/register.jpg"
import { Toaster, toast } from 'sonner'
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Register() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const req = await axios.post(`http://localhost:3000/api/v1/auth/register`,
        {
          firstName,
          lastName,
          email,
          password
        }
      )

      console.log(req)
      toast.success(req.data.message)
      navigate("/login")

    } catch (error) {
      console.log(error.response?.data?.message || error.message)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  return (
    <section className="min-h-screen pt-20 pb-10 bg-[#fdfcf9] flex items-center justify-center p-4 relative overflow-hidden">
      <Toaster />
      <Toaster position="top-center" />

      {/* Decorative Blobs */}
      <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-red-100 rounded-full blur-[100px] opacity-50" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-amber-100 rounded-full blur-[100px] opacity-50" />

      {/* Main Card */}
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 overflow-hidden flex flex-col md:flex-row">

        {/* Image Section */}
        <div className="relative w-full md:w-[50%] h-40 md:h-auto overflow-hidden group">
          <img
            src={registerImg}
            alt="Stay Ease"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 hover:grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 pointer-events-none">
            <h1 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter">
              Stay <span className="text-red-500">Ease.</span>
            </h1>
            <p className="text-gray-300 text-[10px] md:text-xs font-medium uppercase tracking-widest mt-1">
              Premium Shopping
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create Account</h2>
            <p className="text-slate-500 text-sm">Join the community in seconds.</p>
          </div>

          <form className="space-y-3.5" onSubmit={handleSubmit} >

            {/* Name Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">First Name</label>
                <div className="relative group">
                  <HiOutlineUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:bg-white focus:border-red-500/50 focus:ring-4 focus:ring-red-500/5 transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:bg-white focus:border-red-500/50 focus:ring-4 focus:ring-red-500/5 transition-all text-sm"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Email</label>
              <div className="relative group">
                <HiOutlineMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="email"
                  placeholder="name@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:bg-white focus:border-red-500/50 focus:ring-4 focus:ring-red-500/5 transition-all text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Password</label>
              <div className="relative group">
                <HiOutlineLockClosed className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:bg-white focus:border-red-500/50 focus:ring-4 focus:ring-red-500/5 transition-all text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] mt-2 hover:bg-red-600 transition-all active:scale-[0.97] shadow-lg shadow-slate-200"
            >
              Register Account
            </button>
          </form>

          {/* Social Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-[1px] bg-slate-100"></div>
            <span className="px-3 text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Social Sign Up</span>
            <div className="flex-1 h-[1px] bg-slate-100"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors font-bold text-xs">
              <FcGoogle className="text-lg" /> Google
            </button>
            <button disabled={true} className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors font-bold text-xs">
              <FaApple className="text-lg" /> Apple
            </button>
          </div>

          <p className="mt-6 text-center text-xs font-medium text-slate-400">
            Have an account? <a href="/login" className="text-red-600 hover:underline">Sign In</a>
          </p>
        </div>
      </div>
    </section>
  )
}
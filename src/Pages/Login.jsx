import login from "../../public/login.jpg";
// Importing icons from Hero Icons (hi) and Font Awesome (fa)
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
        
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img 
            src={login} 
            alt="Login Visual" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Please enter your details to sign in.</p>
          </div>

          <form action="" className="space-y-5">
            {/* Email Field with Icon */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineMail className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                />
              </div>
            </div>

            {/* Password Field with Icon */}
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Sign In
            </button>

            {/* Divider for Social Login */}
            <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
                <button type="button" className="w-1/2 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaGoogle className="text-red-500" /> <span className="text-sm font-medium text-gray-700">Google</span>
                </button>
                <button type="button" className="w-1/2 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaGithub /> <span className="text-sm font-medium text-gray-700">Github</span>
                </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don't have an account? <Link to="/register" className="text-blue-600 font-medium hover:underline">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
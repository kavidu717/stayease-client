import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f2ede1]/80 backdrop-blur-md border-b border-black/5 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-2xl font-black tracking-tighter uppercase text-slate-900 hover:text-red-600 transition-colors"
          >
            Stay<span className="text-red-600">.</span>Ease
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-700">
          <Link to="/" className="hover:text-black transition-all relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-black transition-all relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Auth Actions */}
        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="text-sm font-bold uppercase hover:opacity-70 transition-opacity px-4 py-2"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-black text-white text-sm font-bold uppercase px-6 py-2 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-black/10"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}
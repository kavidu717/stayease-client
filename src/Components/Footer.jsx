import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#f2ede1]/80 text-black pt-16 pb-8 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter uppercase">
            Stay<span className="text-red-600">.</span>Ease
          </Link>
          <p className="text-black text-sm leading-relaxed max-w-xs">
            Experience luxury redefined. From urban escapes to coastal retreats, 
            we provide seamless stays at the world's most exquisite locations.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedinIn />} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-bllack">Quick Links</h4>
          <ul className="space-y-4 text-black text-sm font-medium">
            <li><Link to="/rooms">Rooms & Suites</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/offers">Special Offers</Link></li>
            <li><Link to="/amenities">Amenities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-black">Get in Touch</h4>
          <ul className="space-y-4 text-slate-900 text-sm">
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="text-red-500 text-xl shrink-0" />
              <span>123 Luxury Lane, Ocean View, <br />California, 90210</span>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="text-red-500 text-xl shrink-0" />
              <span>+1 (800) 555-STAY</span>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-red-500 text-xl shrink-0" />
              <span>bookings@stayease.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-black">Join Our Club</h4>
          <p className="text-slate-900 text-sm mb-4">
            Subscribe for exclusive member rates and travel inspiration.
          </p>
          <form className="relative mt-4">
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-gray-600 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-red-500 transition-all"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-red-600 px-4 rounded-full hover:bg-red-700 transition-all">
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">
        <p>© 2026 Stay Ease International. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}

// Reusable Helper Components
function FooterLink({ to, children }) {
  return (
    <Link to={to} className="hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group">
      <span className="w-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-3"></span>
      {children}
    </Link>
  );
} 

function SocialIcon({ icon }) {
  return (
    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300">
      {icon}
    </button>
  );
}
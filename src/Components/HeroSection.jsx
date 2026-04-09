import hero from "/hero.jpg"

export default function HeroSection() {
    return (
        <section className="relative w-full h-[95vh] md:h-screen overflow-hidden bg-black">
            
            {/* 1. Background with Cinematic Zoom */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={hero} 
                    alt="Luxury Hotel" 
                    className="w-full h-full object-cover opacity-70 animate-[zoom-in_25s_ease-out_infinite_alternate]" 
                />
                {/* Gradient Overlay for high-end feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            </div>

            {/* 2. Main Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
                
                {/* Brand Tagline */}
                <div className="mb-6 flex items-center gap-4 animate-fade-in">
                    <div className="h-[1px] w-12 bg-red-600"></div>
                    <span className="text-red-500 font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
                        Exclusive Hotel Collection
                    </span>
                    <div className="h-[1px] w-12 bg-red-600"></div>
                </div>

                {/* Hero Headline */}
                <h1 className="text-5xl md:text-[100px] font-black text-white leading-[0.9] uppercase tracking-tighter mb-10">
                    STAY <span className="text-red-600">EASE.</span><br />
                    <span className="text-slate-100 italic font-light lowercase tracking-normal">Extraordinary escapes.</span>
                </h1>

                {/* 3. The Booking Bar (Glassmorphism) */}
                <div className="w-full max-w-5xl bg-white/10 backdrop-blur-2xl rounded-3xl md:rounded-full border border-white/20 shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center gap-2 group">
                    
                    {/* Location Input */}
                    <div className="w-full md:flex-1 px-8 py-3 flex flex-col items-start border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors rounded-t-2xl md:rounded-l-full cursor-pointer">
                        <label className="text-[10px] uppercase font-black text-red-500 tracking-widest">Location</label>
                        <input 
                            type="text" 
                            placeholder="Where are you going?" 
                            className="bg-transparent text-white placeholder-gray-400 outline-none w-full text-sm font-medium mt-1" 
                        />
                    </div>

                    {/* Date Check-in/out */}
                    <div className="w-full md:flex-1 px-8 py-3 flex flex-col items-start border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
                        <label className="text-[10px] uppercase font-black text-red-500 tracking-widest">Check In - Out</label>
                        <p className="text-gray-400 text-sm font-medium mt-1">Add dates</p>
                    </div>

                    {/* Guests */}
                    <div className="w-full md:flex-1 px-8 py-3 flex flex-col items-start hover:bg-white/5 transition-colors cursor-pointer rounded-b-2xl md:rounded-none">
                        <label className="text-[10px] uppercase font-black text-red-500 tracking-widest">Travelers</label>
                        <p className="text-gray-400 text-sm font-medium mt-1">Add guests</p>
                    </div>

                    {/* Search Button */}
                    <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-2xl md:rounded-full font-black uppercase tracking-widest text-xs transition-all active:scale-95 shadow-xl shadow-red-600/40">
                        Search
                    </button>
                </div>

                {/* 4. Trust Badges */}
                <div className="mt-16 flex items-center gap-12 text-white/40">
                    <div className="text-center">
                        <p className="text-white font-black text-2xl">800+</p>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Destinations</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/20"></div>
                    <div className="text-center">
                        <p className="text-white font-black text-2xl">4.9/5</p>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold">User Rating</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/20"></div>
                    <div className="text-center">
                        <p className="text-white font-black text-2xl">24/7</p>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Concierge</p>
                    </div>
                </div>

            </div>

            {/* Visual Detail: Animated Down Arrow Icon */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
                <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>

            {/* Custom CSS Animation */}
            <style jsx>{`
                @keyframes zoom-in {
                    from { transform: scale(1); }
                    to { transform: scale(1.15); }
                }
            `}</style>
        </section>
    );
}
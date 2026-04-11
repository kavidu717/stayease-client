import place1 from "/place1.jpg"
import place2 from "/place2.jpg"
import place3 from "/place3.jpg"

export default function ImageGallery() {
    const places = [
        { img: place1, title: "Golden Sands Beach", distance: "0.5 km", tag: "Relaxation" },
        { img: place2, title: "Mountain Peak Trail", distance: "2.3 km", tag: "Adventure" },
        { img: place3, title: "Downtown Heritage", distance: "1.2 km", tag: "Culture" },
    ];

    return (
        <section className="py-20 bg-[#c6c7c6] px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-[2px] bg-red-600"></div>
                        <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Explore the vicinity</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                        Near <span className="text-red-600">Stay Ease.</span>
                    </h2>
                    <p className="text-slate-500 mt-2 max-w-md font-medium">
                        Discover the most iconic spots and hidden gems just a few steps away from your suite.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {places.map((place, index) => (
                        <div key={index} className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer shadow-xl shadow-slate-200/50">
                            
                            {/* Image with Zoom Effect */}
                            <img 
                                src={place.img} 
                                alt={place.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Distance Badge (Top Right) */}
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                                <p className="text-white text-[10px] font-bold uppercase tracking-widest">{place.distance}</p>
                            </div>

                            {/* Text Content (Bottom) */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
                                <p className="text-red-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
                                    {place.tag}
                                </p>
                                <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-4">
                                    {place.title}
                                </h3>
                                
                                {/* Hidden button that appears on hover */}
                                <button className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    Get Directions 
                                    <span className="w-6 h-[1px] bg-red-600"></span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
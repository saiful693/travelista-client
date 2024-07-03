

const ChooseUs = () => {
    return (
        <div className="mt-20 bg-white rounded-2xl">
            <h1 className="py-10 text-4xl font-black text-center text-green-500">Why Choose Us</h1>
            <div className="p-8 grid gap-3 grid-cols-2 md:grid-cols-4">
                <div className="space-y-3 text-center text-black">
                        <div className="flex justify-center">
                            <img className="w-28" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSZkO3i4gk0Nfyml5vo3uWy16Iu6jvqoYGtDltlS31ku4xyqM" alt="" />
                        </div>
                        <h3 className="text-xl font-semibold">Expertise and Experience</h3>
                        <p>Where Expertise Meets Adventure: Your Journey Starts Here!</p>
                </div>
                <div className="space-y-3 text-black text-center">
                        <div className="flex justify-center">
                            <img className="w-28" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVYYmf_9cSaKio18qwHTcQr9B0kQ3BfaNOSoV5bT5eHIGg8RNm" alt="" />
                        </div>
                        <h3 className="text-xl font-semibold">Tailor Made Tours</h3>
                        <p>Crafting Memories, One Tailor-Made Tour at a Time!</p>
                </div>
                <div className="space-y-3 text-black text-center">
                        <div className="flex justify-center">
                            <img className="w-28" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSde26SaRnPKgq6JA0DhguemR3kq38kNcv6rRbe7y05isUmtORZ" alt="" />
                        </div>
                        <h3 className="text-xl font-semibold">Fast Booking</h3>
                        <p>Instant Adventure Awaits: Book Now, Explore Soon!</p>
                </div>
                <div className="space-y-3 text-black text-center">
                        <div className="flex justify-center">
                            <img className="w-28" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHdDYG2TvREv6BA9uUSHDm4ZWQWptVftzdRnIcZhAjlXJnihmc" alt="" />
                        </div>
                        <h3 className="text-xl font-semibold">Guided Tours</h3>
                        <p>Guided Tours: Your Pathway to Unforgettable Adventures!</p>
                </div>
               
            </div>
        </div>
    );
};

export default ChooseUs;
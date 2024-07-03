
const Banner = () => {
    return (
        <div className="carousel rounded-lg mt-10  w-full">
        <div style={{backgroundImage: 'url(https://i.ibb.co/T0z0v9j/slide1.jpg)'}} id="slide1" className="carousel-item bg-cover relative h-[300px] md:h-[400px] lg:h-[650px]  w-full">
           <div className="flex justify-center items-center w-full">
               <div>
               <h5 className="text-xl lg:text-2xl font-bold text-white">INDEPENDENT ALWAYS</h5>
                <h1 className="text-xl lg:text-5xl font-bold text-white uppercase">Travel With Purpose</h1>
                <div className="border-l">
                    <h5 className="lg:text-xl font-bold text-white">Travelista-Hill Sites</h5>
                </div>
               </div>
           </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div style={{backgroundImage: 'url(https://i.ibb.co/HYhqY8j/slide2.jpg)'}} id="slide2" className="carousel-item bg-cover relative h-[300px] md:h-[400px] lg:h-[650px]   w-full">
            <div className="flex justify-center items-center w-full">
               <div>
               <h5 className="text-xl lg:text-2xl font-bold text-white">Luxury Southeast Asia</h5>
                <h1 className="text-xl lg:text-5xl font-bold text-white uppercase">Tours Made for you</h1>
                <div className="border-l">
                    <h5 className="text-xl font-bold text-white">Travelista-Authentic luxury travel</h5>
                </div>
               </div>
           </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div style={{backgroundImage: 'url(https://i.ibb.co/vXF5B1p/slide3.jpg)'}} id="slide3" className="carousel-item relative h-[300px] md:h-[400px] lg:h-[650px]  w-full">
            <div className="flex justify-center items-center w-full">
               <div>
               <h5 className="text-lg lg:text-2xl font-bold text-white">Explore</h5>
                <h1 className="text-xl lg:text-5xl font-bold text-white uppercase">St. Martins Island</h1>
                <div className="border-l">
                    <h5 className="text-xl font-bold text-white">Travelista-Sea area</h5>
                </div>
               </div>
           </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div style={{backgroundImage: 'url(https://media.radissonhotels.net/image/blog-images--2024/exterior/16256-158590-f78650855_3xl.jpg?impolicy=HighCarrousel)'}} id="slide4" className="carousel-item relative h-[300px] md:h-[400px] lg:h-[650px]  w-full ">
            <div className="flex justify-center items-center w-full">
               <div>
               <h5 className="text-lg lg:text-2xl font-bold text-white">WELCOME TO</h5>
                <h1 className="text-xl lg:text-5xl font-bold text-white uppercase">Paradise on Earth</h1>
                <div className="border-l">
                    <h5 className="text-xl font-bold text-white">Enchanting beauty of the high mountains, serene lakes</h5>
                </div>
               </div>
           </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>

    </div>
    );
};

export default Banner;
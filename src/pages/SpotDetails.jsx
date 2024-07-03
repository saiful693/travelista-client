import { Link, useLoaderData } from "react-router-dom";


const SpotDetails = () => {
    const spot=useLoaderData();
    const {image,tourists_spot_name, country_name, location,short_description,average_cost,seasonality, travel_time,totalVisitorsPerYear}=spot;

    return (
        <div className="mt-10 card bg-white shadow-xl">
            <figure className="rounded-none"><img src={image} alt="" className="w-full md:h-[400px] lg:h-[700px]  object-cover" /></figure>
            <div className="card-body">
                <p className="font-medium">{country_name}</p>
                <p className="font-medium">{location}</p>
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p>{short_description}</p>
                <div>
                    <h2 className="text-lg font-semibold">Tour Information</h2>
                    <p className="flex gap-10 ml-10">Cost     <span className="font-medium ">{average_cost}</span></p>
                    <p className="flex gap-10 ml-10">Seasonality <span className="font-medium ">{seasonality}</span></p>
                    <p className="flex gap-10 ml-10">Travel time <span className="font-medium ">{travel_time}</span></p>
                    <p className="flex gap-10 ml-10">Total Visitor Par-Year <span className="font-medium ">{totalVisitorsPerYear}</span></p>

                </div>
                
                <div className="card-actions justify-center">
                    <Link to="" className="btn btn-ghost w-full font-bold text-xl text-green-500">Book Tour</Link>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;
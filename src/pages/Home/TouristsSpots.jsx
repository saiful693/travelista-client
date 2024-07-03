import { Link } from "react-router-dom";

const TouristsSpots = ({ spot }) => {

    const { _id, image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_email, user_name } = spot;
    return (
        <div className="card bg-white shadow-xl">
            <figure><img src={image} alt="" className="w-full h-52 object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <div className="flex">
                    <p>{country_name}</p>
                    <strong className="uppercase text-lg">{location}</strong>
                </div>
                <p><strong className="mr-2">seasonality:</strong>{seasonality} </p>
                <p><strong className="mr-2">Travel time:</strong>{travel_time} </p>
                <p><strong className="mr-2">Visitor:</strong>{totalVisitorsPerYear} </p>
                <p><strong>Average Cost:</strong> {average_cost} </p>


                <div className="card-actions justify-end">
                    <Link to={`/spot/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TouristsSpots;
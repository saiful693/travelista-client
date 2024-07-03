import { Link } from "react-router-dom";


const Country = ({country}) => {
    const {_id,image,country_name,short_description}=country
    return (
        <Link to={`/country/${_id}`}>
            <div className="card bg-white shadow-xl">
            <figure><img src={image} alt="" className="w-full h-52 object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{country_name}</h2>  
                <p> {short_description} </p>

                {/* <div className="card-actions justify-end">
                    <Link to={`/country/${_id}`} className="btn btn-primary">View Property</Link>
                </div> */}
            </div>
        </div>
        </Link>
    );
};

export default Country;
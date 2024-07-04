import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsSpots from "./Home/TouristsSpots";


const SpcificCountry = () => {
    const spcificCountry=useLoaderData();
    const {country_name}=spcificCountry;

    const [countries,setCountries]=useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/spot')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
  
    const loadedSpots = countries.filter(u => u.country_name === country_name);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {
                loadedSpots.map(spot => <TouristsSpots key={spot._id} spot={spot}></TouristsSpots>)
            }
        </div>
    );
};

export default SpcificCountry;
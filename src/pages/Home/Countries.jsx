// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Country from "./Country";


const Countries = () => {
    const [countries,setCountries]=useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    
    return (
        <div className="mt-10">
                <h2 className="text-center mb-10 text-4xl font-bold text-green-400">Beautiful Countries To Visit</h2>
                <div className="grid grid-cols-3 gap-4">
                    {
                        countries.map(country => <Country key={country._id} country={country}></Country>)
                    }
                </div>
            </div> 
    );
};

export default Countries;
import { useLoaderData } from "react-router-dom";
import TouristsSpots from "./Home/TouristsSpots";
import { useEffect, useState } from "react";


const AllTouristsSpot = () => {
    const loadedSpots = useLoaderData();

    const [sortedSpots, setSortedSpots] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        sortSpots(loadedSpots, sortOrder);
    }, [loadedSpots, sortOrder]);

    const sortSpots = (loadedSpots, order) => {
        const sorted = [...loadedSpots].sort((a, b) => {
            if (order === 'asc') {
                return a.average_cost - b.average_cost;
            } else {
                return b.average_cost - a.average_cost;
            }
        });
        setSortedSpots(sorted);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };



    return (
        <div>
            <div className="mt-10">
                <h2 className="text-center mb-10 text-4xl font-bold text-green-400">Tourists Spots</h2>
                <div className="sort-dropdown mb-5">
                    <label>Sort by Average Cost: </label>
                    <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        sortedSpots.map(spot => <TouristsSpots key={spot._id} spot={spot}></TouristsSpots>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTouristsSpot;
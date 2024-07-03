import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TouristsSpots from "./TouristsSpots";
import ChooseUs from "./ChooseUs";


const Home = () => {

    const loadedSpots = useLoaderData();



    return (
        <div>
            <Banner></Banner>
            {/* tourist spots section */}
            <div className="mt-10">
                <h2 className="text-center mb-10 text-4xl font-bold text-green-400">Tourists Spots</h2>
                <div className="grid grid-cols-3 gap-4">
                    {
                        loadedSpots.map(spot => <TouristsSpots key={spot._id} spot={spot}></TouristsSpots>)
                    }
                </div>
            </div>
            <ChooseUs></ChooseUs>

        </div>
    );
};

export default Home;
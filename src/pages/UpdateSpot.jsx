import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateSpot = () => {

    const spot=useLoaderData();
    const { _id, image, tourists_spot_name, country_name, location,short_description,average_cost,seasonality, travel_time,totalVisitorsPerYear,user_email,user_name} =spot

    const handleUpdateSpot=e =>{
        e.preventDefault();
        const form=event.target;
        const image=form.image.value;
        const tourists_spot_name=form.tourists_spot_name.value;
        const country_name=form.country_name.value;
        const location=form.location.value;
        const short_description=form.short_description.value;
        const average_cost=form.average_cost.value;
        const seasonality=form.seasonality.value;
        const travel_time=form.travel_time.value;
        const totalVisitorsPerYear=form.totalVisitorsPerYear.value;
        const user_email=form.user_email.value;
        const user_name=form.user_name.value;

        const updateSpot={ image, tourists_spot_name, country_name, location,short_description,average_cost,seasonality, travel_time,totalVisitorsPerYear,user_email,user_name}
        fetch(`https://travelista-server.vercel.app/spot/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateSpot)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

        })
    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-3xl p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl  font-bold text-center">Update Tourist Spot</h2>
                <form onSubmit={handleUpdateSpot} className="space-y-4">
                    <div className="flex justify-center gap-10">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Image URL</label>
                            <input
                                type="url"
                                id="image"
                                defaultValue={image}
                                name="image"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Tourist Spot Name</label>
                            <input
                                type="text"
                                id="tourists_spot_name"
                                defaultValue={tourists_spot_name}
                                name="tourists_spot_name"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-10">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Country Name</label>
                            <input
                                type="text"
                                id="country_name"
                                defaultValue={country_name}
                                name="country_name"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Location</label>
                            <input
                                type="text"
                                id="location"
                                defaultValue={location}
                                name="location"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-3/4 px-10">
                            <label className="block mb-1 text-sm font-medium">Short Description</label>
                            <textarea
                                id="short_description"
                                defaultValue={short_description}
                                name="short_description"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Average Cost</label>
                            <input
                                type="number"
                                id="average_cost"
                                defaultValue={average_cost}
                                name="average_cost"
                                className="w-full text-white  px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Seasonality</label>
                            <input
                                type="text"
                                id="seasonality"
                                defaultValue={seasonality}
                                name="seasonality"
                                className="w-full text-white  px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-10">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Travel Time</label>
                            <input
                                type="text"
                                id="travel_time"
                                defaultValue={travel_time}
                                name="travel_time"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Total Visitors Per Year</label>
                            <input
                                type="number"
                                id="totalVisitorsPerYear"
                                defaultValue={totalVisitorsPerYear}
                                name="totalVisitorsPerYear"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-10">
                        <div>
                            <label className="block mb-1 text-sm font-medium">User Email</label>
                            <input
                                type="email"
                                id="user_email"
                                value={user_email}
                                name="user_email"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">User Name</label>
                            <input
                                type="text"
                                id="user_name"
                                value={user_name}
                                name="user_name"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center px-10">
                    <button type="submit" className="w-3/4  px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;
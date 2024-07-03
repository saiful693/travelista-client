import Swal from 'sweetalert2'
const AddSpots = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const form=e.target;
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

        const newSpot={ image:image, tourists_spot_name:tourists_spot_name, country_name:country_name, location:location,short_description:short_description,average_cost:average_cost,seasonality:seasonality, travel_time:travel_time,totalVisitorsPerYear:totalVisitorsPerYear,user_email:user_email,user_name:user_name}
        console.log(newSpot);

        // send data to the server
        fetch('http://localhost:5000/spot',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-3xl p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl  font-bold text-center">Add Tourist Spot</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-center gap-10">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Image URL</label>
                            <input
                                type="url"
                                id="image"
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
                                name="user_name"
                                className="w-full text-white px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center px-10">
                    <button type="submit" className="w-3/4  px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSpots;
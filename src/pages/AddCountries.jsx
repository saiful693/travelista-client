import Swal from 'sweetalert2'
const AddCountries = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form=e.target;
        const image=form.image.value;
        const country_name=form.country_name.value;
        const short_description=form.short_description.value;

        const newCountry={image, country_name,short_description}

         // send data to the server
         fetch('http://localhost:5000/country',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCountry)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Country added successfully',
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
                        <label className="block mb-1 text-sm font-medium">Short Description</label>
                        <textarea
                            id="short_description"
                            name="short_description"
                            className="w-full text-white px-3 py-2 border rounded-md"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center ">
                        <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCountries;
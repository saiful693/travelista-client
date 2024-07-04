import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const MyList = () => {

    const { user } = useContext(AuthContext)
    const loderspots = useLoaderData();


    let count = 1;

    const loadedSpots = loderspots.filter(u => u.user_email === user.email);
    // console.log(loadedSpots)
    const [spots,setSpots]=useState(loadedSpots)

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount != 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining =spots.filter(sp => sp._id !==_id);
                            setSpots(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto mt-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Country</th>
                            <th className="hidden md:table-cell">Average Cost</th>
                            <th className="hidden md:table-cell">Travel Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            spots.map(spot => <tr key={spot._id}>
                                <th>{count++}</th>
                                <td>{spot.tourists_spot_name}</td>
                                <td>{spot.country_name}</td>
                                <td className="hidden md:table-cell">{spot.average_cost}</td>
                                <td className="hidden md:table-cell">{spot.travel_time}</td>
                                <td>
                                    <Link to={`/updateSpot/${spot._id}`}>
                                        <button className="btn btn-success mb-2 md:mr-2">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(spot._id)} className="btn btn-warning">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
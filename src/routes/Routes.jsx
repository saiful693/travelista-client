import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../shared/Login";
import Register from "../shared/Register";
import AddSpots from "../pages/AddSpots";
import PrivateRoute from "./PrivateRoute";
import SpotDetails from "../pages/SpotDetails";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import MyList from "../pages/Home/MyList";
import UpdateSpot from "../pages/UpdateSpot";
import AddCountries from "../pages/AddCountries";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () =>fetch('http://localhost:5000/spot')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/add-tourists-spot',
            element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>,
            loader: () =>fetch('http://localhost:5000/user')

        },
        {
          path:'/all-tourists-spot',
          element: <AllTouristsSpot></AllTouristsSpot>,
          loader: () =>fetch('http://localhost:5000/spot')
        },
        {
          path: '/spot/:id',
          element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
          loader: ({ params }) =>fetch(`http://localhost:5000/spot/${params.id}`)
        },
        {
          path:'/my-list',
          element: <PrivateRoute><MyList></MyList></PrivateRoute>,
          loader: () =>fetch('http://localhost:5000/spot'),
        },
        {
            path: '/updateSpot/:id',
            element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
            loader: ({ params }) =>fetch(`http://localhost:5000/spot/${params.id}`)
        },
        {
          path: '/add-countries',
          element: <AddCountries></AddCountries>
        }
        
      ]
    },
  ]);

export default router;
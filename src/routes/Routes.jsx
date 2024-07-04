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
import SpcificCountry from "../pages/SpcificCountry";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () =>fetch('https://travelista-server.vercel.app/spot')
           
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
            loader: () =>fetch('https://travelista-server.vercel.app/user')
        },
        {
          path:'/all-tourists-spot',
          element: <AllTouristsSpot></AllTouristsSpot>,
          loader: () =>fetch('https://travelista-server.vercel.app/spot')
        },
        {
          path: '/spot/:id',
          element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
          loader: ({ params }) =>fetch(`https://travelista-server.vercel.app/spot/${params.id}`)
        },
        {
          path:'/my-list',
          element: <PrivateRoute><MyList></MyList></PrivateRoute>,
          loader: () =>fetch('https://travelista-server.vercel.app/spot'),
        },
        {
            path: '/updateSpot/:id',
            element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
            loader: ({ params }) =>fetch(`https://travelista-server.vercel.app/spot/${params.id}`)
        },
        {
          path: '/add-countries',
          element: <AddCountries></AddCountries>
        },
        {
          path: '/country/:id',
          element: <SpcificCountry></SpcificCountry> ,
          loader: ({ params }) =>fetch(`https://travelista-server.vercel.app/country/${params.id}`)
        },
      
      ]
    },
  ]);

export default router;